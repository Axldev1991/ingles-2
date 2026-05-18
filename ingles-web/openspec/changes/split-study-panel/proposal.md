# Proposal: Split-Screen Study Panel with Backward/Forward Exercise Navigation

## Goal
Improve the study experience in `ingles-web` by:
1. Transforming the monolithic tabbed toggle layout into a **premium side-by-side split screen panel** where theory and practice reside together.
2. Implementing a flexible navigation mechanism to allow students to step **backward and forward** through exercises in a topic, ensuring any completed exercises show as resolved while fresh ones remain interactive.

## Rationale & Rioplatense Insight
Coding without understanding fundamentals is a recipe for disaster. The current layout forces the user to toggle tabs—hiding the theory while performing exercises. This disconnect breaks the *SOLID* study flow: students need to review technical definitions (like "infinitives of purpose") *while* actively validating their output in the Practice Arena. 
Furthermore, preventing students from reviewing completed questions goes against deliberate practice: seeing past mistakes or re-checking correct answers builds confidence and deepens memory.

## Architectural Proposal
- **Split-Screen Design:** 
  - On desktop and tablets (`width > 1024px`), render two panels side-by-side using the pre-existing grid class `.study-panel` (Theory left column, Practice right column).
  - On mobile, let them stack gracefully (Theory top, Practice bottom) using existing media query breakpoints in `style.css`.
  - Deprecate the manual tab buttons (`#mode-theory-btn`, `#mode-practice-btn`) in Focus Mode to reduce cognitive load and visual noise.
- **Bi-directional Navigation:**
  - Add a **Previous** (`Anterior`) and **Next** (`Siguiente` / `Completar Tema`) button layout at the bottom of the active exercise container.
  - Implement a new action `PREV_EXERCISE` in the `appStore` to decrement `activeExerciseIndex`.
  - Add synchronization logic: when shifting exercises (next or previous), automatically check if the target exercise is already in `stats.completedExercises`. If it is, pre-populate the correct solution and mark it as submitted/correct. If not, reset the answer state so they can answer it freshly.

## Impact Analysis
- **Core Files Affected:**
  - `ingles-web/src/components/StudyPanel.js` (UI layout, interactive buttons, event handlers)
  - `ingles-web/src/store/appStore.js` (Navigation actions, state synchronization, answer preservation)
  - `ingles-web/src/style.css` (Visual styling for navigation buttons)
- **Tradeoffs:**
  - *No state persistence of specific wrong options:* Since the database structure is kept extremely light, we only store a list of *completed* exercise IDs. If they navigate to a completed exercise, we show them the correct answer rather than their original selected wrong/correct choice. This keeps complexity to O(1) storage overhead while still perfectly satisfying the need to review past topics.
