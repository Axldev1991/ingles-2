# Architectural & Visual Design: Split-Screen Study Panel

## 1. Store Refactoring (`appStore.js`)
We will add a helper method `syncAnswerStateForActiveExercise()` that coordinates the state of the active exercise depending on whether it has been completed:

```javascript
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
```

We will implement two new actions/cases in the dispatcher:
- `PREV_EXERCISE`:
  - Condition: `this.state.activeExerciseIndex > 0`.
  - Operation: `this.state.activeExerciseIndex -= 1`, then call `syncAnswerStateForActiveExercise()`, then notify.
- `NEXT_EXERCISE` (modified):
  - Operation: `this.state.activeExerciseIndex += 1`, then call `syncAnswerStateForActiveExercise()`, then notify.
- `SELECT_TOPIC` (modified):
  - Operation: Sets active topic index, resets active exercise index to 0, then calls `syncAnswerStateForActiveExercise()`, then notify. Note: we no longer set `activeMode` to `'theory'` since they are unified!

## 2. Interface Refactoring (`StudyPanel.js`)
- Render the split screen layout in Focus Mode:
  - Remove the `.single-column` CSS class from the parent study panel.
  - Remove `#mode-theory-btn`, `#mode-practice-btn` and the tabs wrapper.
  - Structure inside `.study-panel`:
    - `Left Column`: `<section class="theory-card" ...>`
    - `Right Column`: `<section class="practice-card" ...>`
  - The `interaction-area`, `feedback-area`, and `exercise-actions` elements inside the practice card are updated.
  - **Previous Button (`⬅ Anterior`)**:
    - Select with `#prev-exercise-btn`.
    - Setup listener to dispatch `PREV_EXERCISE`.
    - Button disabled if `activeExerciseIndex === 0`.
  - **Submit Button (`Verificar Respuesta`)**:
    - Visible and active if `!hasSubmitted` and input has been supplied.
  - **Next Button (`Siguiente / Completar Tema`)**:
    - Visible if `hasSubmitted`.

## 3. Style Enhancements (`style.css`)
We will add styling for `.prev-btn` to matches `.next-btn` but in a subtle secondary dark layout:
```css
.prev-btn {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-muted);
  border: 1px solid var(--border-color);
  padding: 12px 24px;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.prev-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.12);
  color: var(--text-main);
  border-color: rgba(255, 255, 255, 0.2);
}

.prev-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
```
This is fully responsive and ensures perfect visual balance on desktop side-by-side!
