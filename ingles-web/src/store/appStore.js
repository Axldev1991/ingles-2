import { unitLoader } from '../data/loader.js';
import { storageService } from '../services/storage.js';

class AppStore {
  constructor() {
    this.listeners = [];
    
    // Initial core state
    const defaultStats = {
      streak: 1,
      masteryScores: {
        unit1: 0,
        unit2: 0,
        unit3: 0
      },
      completedExercises: []
    };

    const loadedStats = storageService.load(defaultStats);

    this.state = {
      activeUnitId: null,
      activeTopicIndex: 0,
      activeExerciseIndex: 0,
      activeMode: 'theory', // 'theory' or 'practice'
      selectedOption: null,
      userAnswerText: '',
      hasSubmitted: false,
      isCorrect: false,
      isLoading: false,
      loadedUnit: null,
      unitsMetadata: unitLoader.getUnitsMetadata(),
      stats: loadedStats
    };
  }

  subscribe(listener) {
    this.listeners.push(listener);
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(l => l(this.state));
  }

  resetAnswerState() {
    this.state.selectedOption = null;
    this.state.userAnswerText = '';
    this.state.hasSubmitted = false;
    this.state.isCorrect = false;
  }

  recalculateUnitMastery() {
    if (!this.state.activeUnitId || !this.state.loadedUnit) return;
    
    const unit = this.state.loadedUnit;
    const allUnitExerciseIds = [];
    unit.topics.forEach(topic => {
      topic.exercises.forEach(ex => {
        allUnitExerciseIds.push(ex.id);
      });
    });

    const completedInUnit = allUnitExerciseIds.filter(id => 
      this.state.stats.completedExercises.includes(id)
    );

    const percentage = allUnitExerciseIds.length > 0
      ? Math.round((completedInUnit.length / allUnitExerciseIds.length) * 100)
      : 0;

    this.state.stats.masteryScores[this.state.activeUnitId] = percentage;
    
    // Check if the whole unit was completed successfully for the first time
    // and potentially increase streak
    storageService.save(this.state.stats);
  }

  async dispatch(action, payload) {
    switch (action) {
      case 'SELECT_UNIT':
        if (!payload) {
          this.state.activeUnitId = null;
          this.state.loadedUnit = null;
          this.resetAnswerState();
          this.notify();
          break;
        }

        this.state.isLoading = true;
        this.notify();

        try {
          const data = await unitLoader.loadUnit(payload);
          this.state.activeUnitId = payload;
          this.state.loadedUnit = data;
          this.state.activeTopicIndex = 0;
          this.state.activeExerciseIndex = 0;
          this.state.activeMode = 'theory';
          this.resetAnswerState();
        } catch (e) {
          console.error(`Error dispatching SELECT_UNIT for ${payload}:`, e);
        } finally {
          this.state.isLoading = false;
          this.notify();
        }
        break;

      case 'SELECT_TOPIC':
        this.state.activeTopicIndex = payload;
        this.state.activeExerciseIndex = 0;
        this.state.activeMode = 'theory';
        this.resetAnswerState();
        this.notify();
        break;

      case 'SET_MODE':
        this.state.activeMode = payload;
        this.notify();
        break;

      case 'SELECT_OPTION':
        if (this.state.hasSubmitted) break;
        this.state.selectedOption = payload;
        this.notify();
        break;

      case 'SET_ANSWER_TEXT':
        if (this.state.hasSubmitted) break;
        this.state.userAnswerText = payload;
        this.notify();
        break;

      case 'SUBMIT_ANSWER':
        if (this.state.hasSubmitted || !this.state.loadedUnit) break;
        
        const topic = this.state.loadedUnit.topics[this.state.activeTopicIndex];
        const exercise = topic.exercises[this.state.activeExerciseIndex];
        this.state.hasSubmitted = true;

        if (exercise.type === 'multiple-choice') {
          this.state.isCorrect = this.state.selectedOption === exercise.correctAnswer;
        } else if (exercise.type === 'fill-in-the-blank') {
          const cleanAnswer = this.state.userAnswerText.trim().toLowerCase();
          const correctClean = exercise.correctAnswer.toLowerCase();
          this.state.isCorrect = cleanAnswer === correctClean;
        }

        if (this.state.isCorrect) {
          if (!this.state.stats.completedExercises.includes(exercise.id)) {
            this.state.stats.completedExercises.push(exercise.id);
            // Increment streak optionally
            if (this.state.stats.completedExercises.length % 5 === 0) {
              this.state.stats.streak += 1;
            }
          }
        }

        this.recalculateUnitMastery();
        this.notify();
        break;

      case 'NEXT_EXERCISE':
        this.state.activeExerciseIndex += 1;
        this.resetAnswerState();
        this.notify();
        break;

      case 'FINISH_TOPIC':
        if (!this.state.loadedUnit) break;
        const nextTopicIndex = this.state.activeTopicIndex + 1;
        const hasMoreTopics = nextTopicIndex < this.state.loadedUnit.topics.length;
        
        if (hasMoreTopics) {
          this.state.activeTopicIndex = nextTopicIndex;
          this.state.activeExerciseIndex = 0;
          this.resetAnswerState();
          this.state.activeMode = 'theory';
        } else {
          // Finished the whole unit! Let's save and we can set activeMode to 'unit-complete'
          this.state.activeMode = 'unit-complete';
        }
        this.notify();
        break;

      case 'SHOW_WELCOME':
        this.state.activeUnitId = null;
        this.state.loadedUnit = null;
        this.resetAnswerState();
        this.notify();
        break;

      default:
        console.warn(`Unhandled action: ${action}`);
    }
  }
}

export const appStore = new AppStore();
export default appStore;
