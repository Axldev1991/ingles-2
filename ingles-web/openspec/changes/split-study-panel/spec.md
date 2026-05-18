# Functional & Technical Specification: Split-Screen Study Layout and Bidirectional Navigation

## 1. System Requirements
- **Language**: Vanilla JavaScript (ES6+ imports), HTML5 Semantic markup, pure CSS (Vite styles).
- **Framework compatibility**: None (Direct DOM manipulations inside the `renderStudyPanel` function).
- **State Management**: AppStore dispatcher/notification architecture.

## 2. Functional Specifications

### Side-by-Side Dual Column Grid (Desktop / Tablet)
- **Grid Layout**: On screens larger than `1024px`, the Focus Mode inside `StudyPanel.js` must present a split layout:
  - **Left Pane (width ratio ~ 1.2)**: Theory Card displaying topic explanations and gotchas.
  - **Right Pane (width ratio ~ 1)**: Practice Card containing the Arena de Práctica, active question, interactions, and actions.
- **Header Elements**: The back button ("⬅ Volver a la Unidad") and Stepper ("Temas") are retained at the top of both columns to maintain global navigation context.
- **Responsive Stacking**: On screens `width <= 1024px`, the grid collapses automatically to 1 column. The Left Pane (Theory Card) stacks above the Right Pane (Practice Card), enabling natural downward scroll.
- **Tab Elimination**: The tab toggle buttons ("Estudiar Teoría", "Práctica Arena") are completely removed since both are visible concurrently.

### Bidirectional Exercise Navigation
- **Previous Exercise Button (`Anterior`)**:
  - A button labeled `⬅ Anterior` must be added to the bottom-left of the exercise actions area.
  - The button is disabled when `activeExerciseIndex === 0`.
  - When clicked, it dispatches `PREV_EXERCISE` to the store, decrementing the index by 1 and updating the view.
- **Next Exercise Button (`Siguiente / Completar Tema`)**:
  - Dispatches `NEXT_EXERCISE` to increment index by 1.
  - If it is the last exercise, the button text is "Completar Tema", which leads to the completion screen (matching existing logic).
- **Completed Exercise Preservation & Pre-filling**:
  - When navigating to any exercise, the store must verify if its ID exists in `stats.completedExercises`.
  - If **completed**:
    - Mark `hasSubmitted = true` and `isCorrect = true`.
    - Automatically select/pre-fill the **correct** answer (e.g. set `selectedOption` to `correctAnswer` for multiple-choice or set `userAnswerText` to `correctAnswer` for fill-in-the-blanks).
    - This allows students to review past answers without getting stuck, while ensuring they cannot change already-submitted correct answers.
  - If **not completed**:
    - Reset the answer state completely so they can solve it interactively.

## 3. Non-Functional Specifications
- **Layout Performance**: Zero-layout shift on grid cell rendering.
- **Accessibility**: Correct labeling of the layout containers (`aria-labelledby` for panels, accessible focus states for buttons).
- **Transition Smoothness**: CSS card entries must remain animated with standard `.full-width-card` sliding rules (or styled natively for `.theory-card` and `.practice-card`).
