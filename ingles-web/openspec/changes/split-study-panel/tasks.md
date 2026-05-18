# Implementation Tasks: Split-Screen & Bidirectional Navigation

## Task 1: Store Refactoring (`appStore.js`)
- [ ] Implement `syncAnswerStateForActiveExercise()` helper on `AppStore` class.
- [ ] Update `SELECT_TOPIC` case to:
  - Reset `activeExerciseIndex` to `0`
  - Call `syncAnswerStateForActiveExercise()`
- [ ] Update `NEXT_EXERCISE` case to:
  - Increment `activeExerciseIndex` by `1`
  - Call `syncAnswerStateForActiveExercise()`
- [ ] Implement `PREV_EXERCISE` case to:
  - Decrement `activeExerciseIndex` by `1` (ensuring bounds checking `> 0`)
  - Call `syncAnswerStateForActiveExercise()`

## Task 2: Interface Refactoring (`StudyPanel.js`)
- [ ] Remove `activeMode` branch for theory vs practice rendering in the main rendering block. Always render the dual columns.
- [ ] Update Focus Mode container to remove `single-column` class from `.study-panel`.
- [ ] Remove the entire `#mode-theory-btn`, `#mode-practice-btn` tabs container and their associated click listeners.
- [ ] Inside `.study-panel`, render two distinct tags/sections side-by-side:
  - `<section class="theory-card" ...>` (Theory Left)
  - `<section class="practice-card" id="practice-card" ...>` (Practice Right)
- [ ] Inside the practice card actions, inject the `#prev-exercise-btn` button to the left of the other actions.
- [ ] Attach `click` event listener to `#prev-exercise-btn` that dispatches `PREV_EXERCISE`.
- [ ] Ensure `#prev-exercise-btn` is disabled if `activeExerciseIndex === 0`.

## Task 3: Styling Additions (`style.css`)
- [ ] Add the CSS style definition for `.prev-btn` including standard hover, border, background, and disabled state opacities.

## Task 4: Local verification
- [ ] Verify both cards render side-by-side on desktop screen sizing.
- [ ] Verify both cards stack vertically when screen sizing is adjusted under `1024px`.
- [ ] Verify navigation works back and forth cleanly.
- [ ] Verify that navigating to already-completed exercises displays them as resolved correctly and pre-filled.
