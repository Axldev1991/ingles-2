import { unitLoader } from '../data/loader.js';
import { storageService } from '../services/storage.js';
import { mockExamData } from '../data/units/mock_exam.js';

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
      activeMode: 'theory', // 'theory', 'practice', 'dashboard', 'exam'
      selectedOption: null,
      userAnswerText: '',
      hasSubmitted: false,
      isCorrect: false,
      isLoading: false,
      loadedUnit: null,
      unitsMetadata: unitLoader.getUnitsMetadata(),
      stats: loadedStats,

      // Exam Simulator state
      examStepIndex: 1,
      examAnswers: {},
      examSubmitted: false,
      examStepResults: []
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

  syncAnswerStateForActiveExercise() {
    if (!this.state.loadedUnit) return;
    const topic = this.state.loadedUnit.topics[this.state.activeTopicIndex];
    const exercise = topic.exercises[this.state.activeExerciseIndex];
    
    if (exercise && this.state.stats.completedExercises.includes(exercise.id)) {
      this.state.hasSubmitted = true;
      this.state.isCorrect = true;
      if (exercise.type === 'multiple-choice') {
        this.state.selectedOption = exercise.correctAnswer;
      } else if (exercise.type === 'fill-in-the-blank') {
        this.state.userAnswerText = exercise.correctAnswer;
      }
    } else {
      this.resetAnswerState();
    }
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

  evaluateExamStep() {
    const step = this.state.examStepIndex;
    const answers = this.state.examAnswers;
    let result = { step, score: 0, total: 0, details: [] };

    const sanitize = str => (str || '').trim().replace(/\s+/g, ' ').replace(/\.$/, '').toLowerCase();

    if (step === 1) {
      // Reading comprehension
      // 10 Gaps
      let correctGaps = 0;
      const gapKeys = Object.keys(mockExamData.reading.answers);
      gapKeys.forEach(k => {
        const user = sanitize(answers[k]);
        const correct = sanitize(mockExamData.reading.answers[k]);
        const isCorrect = user === correct;
        if (isCorrect) correctGaps++;
        result.details.push({ type: 'gap', id: k, isCorrect, user, correct });
      });

      // 5 MCQs
      let correctMcqs = 0;
      mockExamData.reading.questions.forEach(q => {
        const user = answers[q.id];
        const isCorrect = user !== undefined && parseInt(user) === q.correctAnswer;
        if (isCorrect) correctMcqs++;
        result.details.push({ type: 'mcq', id: q.id, isCorrect, user, correct: q.correctAnswer });
      });

      result.score = correctGaps + correctMcqs;
      result.total = gapKeys.length + mockExamData.reading.questions.length;
    } else if (step === 2) {
      // Grammar & Verb tenses
      let correct = 0;
      mockExamData.grammar.exercises.forEach(ex => {
        const user = sanitize(answers[ex.id]);
        const correctVal = sanitize(ex.correctAnswer);
        const isCorrect = user === correctVal;
        if (isCorrect) correct++;
        result.details.push({ type: 'tense', id: ex.id, isCorrect, user, correct: ex.correctAnswer });
      });
      result.score = correct;
      result.total = mockExamData.grammar.exercises.length;
    } else if (step === 3) {
      // Modal verbs
      let correct = 0;
      mockExamData.modals.exercises.forEach(ex => {
        const user = answers[ex.id];
        const isCorrect = user === ex.correctAnswer;
        if (isCorrect) correct++;
        result.details.push({ type: 'modal', id: ex.id, isCorrect, user, correct: ex.correctAnswer });
      });
      result.score = correct;
      result.total = mockExamData.modals.exercises.length;
    } else if (step === 4) {
      // Passive voice
      let correct = 0;
      mockExamData.passive.exercises.forEach(ex => {
        const user = sanitize(answers[ex.id]);
        const correctVal = sanitize(ex.correctAnswer);
        const isCorrect = user === correctVal;
        if (isCorrect) correct++;
        result.details.push({ type: 'passive', id: ex.id, isCorrect, user, correct: ex.correctAnswer });
      });
      result.score = correct;
      result.total = mockExamData.passive.exercises.length;
    } else if (step === 5) {
      // Listening
      // 5 gaps
      let correctGaps = 0;
      mockExamData.listening.transcriptBlanks.forEach(blank => {
        const user = sanitize(answers[blank.gapKey]);
        const correct = sanitize(blank.correct);
        const isCorrect = user === correct;
        if (isCorrect) correctGaps++;
        result.details.push({ type: 'listening-gap', id: blank.gapKey, isCorrect, user, correct: blank.correct });
      });

      // 5 MCQs
      let correctMcqs = 0;
      mockExamData.listening.questions.forEach(q => {
        const user = answers[q.id];
        const isCorrect = user !== undefined && parseInt(user) === q.correctAnswer;
        if (isCorrect) correctMcqs++;
        result.details.push({ type: 'listening-mcq', id: q.id, isCorrect, user, correct: q.correctAnswer });
      });

      result.score = correctGaps + correctMcqs;
      result.total = mockExamData.listening.transcriptBlanks.length + mockExamData.listening.questions.length;
    } else if (step === 6) {
      // Writing
      const text = answers['writing_paragraph'] || '';
      let metRequirements = 0;
      mockExamData.writing.requirements.forEach(req => {
        const isMet = req.pattern.test(text);
        if (isMet) metRequirements++;
        result.details.push({ type: 'writing-req', id: req.id, isCorrect: isMet });
      });
      result.score = metRequirements === 3 ? 10 : Math.round((metRequirements / 3) * 10);
      result.total = 10;
    }

    this.state.examStepResults.push(result);
    if (this.state.examStepIndex < 6) {
      this.state.examStepIndex += 1;
    } else {
      this.state.examSubmitted = true;
      this.state.examStepIndex = 7; // Results screen
    }
  }

  async dispatch(action, payload) {
    switch (action) {
      case 'START_EXAM':
        this.state.activeUnitId = null;
        this.state.loadedUnit = null;
        this.state.activeMode = 'exam';
        this.state.examStepIndex = 1;
        this.state.examAnswers = {};
        this.state.examSubmitted = false;
        this.state.examStepResults = [];
        this.notify();
        break;

      case 'SET_EXAM_ANSWER':
        if (this.state.examSubmitted) break;
        const { key, value } = payload;
        this.state.examAnswers[key] = value;
        break;

      case 'SUBMIT_EXAM_STEP':
        if (this.state.examSubmitted) break;
        this.evaluateExamStep();
        this.notify();
        break;

      case 'RESET_EXAM':
        this.state.activeMode = 'dashboard';
        this.state.examStepIndex = 1;
        this.state.examAnswers = {};
        this.state.examSubmitted = false;
        this.state.examStepResults = [];
        this.notify();
        break;

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
          this.state.activeMode = 'dashboard';
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
        this.state.activeMode = 'study';
        this.syncAnswerStateForActiveExercise();
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
        this.syncAnswerStateForActiveExercise();
        this.notify();
        break;

      case 'PREV_EXERCISE':
        if (this.state.activeExerciseIndex > 0) {
          this.state.activeExerciseIndex -= 1;
          this.syncAnswerStateForActiveExercise();
          this.notify();
        }
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

