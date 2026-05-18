# SDD Tasks: Exam Simulator Implementation

## 1. Phase-by-Phase Task Breakdown

### Task 1: Dataset Creation
- [ ] Create `src/data/units/mock_exam.js`.
- [ ] Populate it with the exact answers, questions, dropdown list, dialogue transcript, and modal verb sentences.
- [ ] Write rich "El Lado Humano" tips explaining why these answers matter in professional team environments.

### Task 2: State Store Expansion
- [ ] Add properties to initial state in `src/store/appStore.js`:
  - `examStepIndex`: Defaults to 1 (when activeMode is 'exam').
  - `examAnswers`: Empty dictionary.
  - `examSubmitted`: Boolean.
  - `examStepResults`: List of objects for step evaluations.
- [ ] Implement actions:
  - `START_EXAM`: Sets `activeMode = 'exam'`, `examStepIndex = 1`, clears previous answers/results.
  - `SET_EXAM_ANSWER`: Stores current input element values in `examAnswers`.
  - `SUBMIT_EXAM_STEP`: Performs verification depending on current `examStepIndex`, calculates score, and increments `examStepIndex` (or completes test on final step).

### Task 3: Interactive UI Component creation
- [ ] Create `src/components/ExamSimulator.js`.
- [ ] Implement step-rendering functions:
  - `renderReadingSection()`
  - `renderGrammarSection()`
  - `renderModalsSection()`
  - `renderPassiveSection()`
  - `renderListeningSection()`
  - `renderWritingSection()`
  - `renderResultsSection()`
- [ ] Integrate a keyup regex event listener in `renderWritingSection()` to update requirement checkboxes dynamically (no full store re-renders on keystroke to preserve focus).

### Task 4: Layout Routing & Entrypoints
- [ ] Add the "Simular Parcial" secondary button inside `WelcomeScreen.js`.
- [ ] Bind button event to dispatch `'START_EXAM'`.
- [ ] Add condition in `src/main.js` `renderApp` to render `ExamSimulator` if `state.activeMode === 'exam'`.

### Task 5: CSS Styles Integration
- [ ] Open `src/style.css`.
- [ ] Add responsive styles for `.exam-container`, `.exam-stepper`, `.step-indicator`, `.listening-player`, and `.req-item`.
- [ ] Ensure high aesthetic quality with smooth transitions and glowing green visual highlights.
