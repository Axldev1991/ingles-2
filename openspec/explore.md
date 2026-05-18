# SDD Explore: Exam Simulator Integration

## 1. Context & Objective
The goal is to integrate a fully interactive, reactive **Exam Simulator ("Simulador de Parcial")** into the `ingles-web` frontend using the UTN Inglés II model exam dataset from the document "Revision for the first test ANSWER KEY.docx".
This will serve as a mock test for students preparing for their first partial, providing real-time validation and "El Lado Humano" (practical IT scenarios) context for each answer.

## 2. Exploration of the Codebase & Architecture
- **State Management (`src/store/appStore.js`)**: Holds current active unit, active topic index, active exercise index, loading states, and completed stats. We should add `activeMode: 'exam'` state to support rendering the Exam Simulator separately without breaking the standard study units.
- **Dynamic Loader (`src/data/loader.js`)**: Loads standard unit files. We can add a custom `loadMockExam()` method or extend `loadUnit` to load `mock_exam.js` from `src/data/units/mock_exam.js`.
- **UI Components (`src/components/`)**:
  - `WelcomeScreen.js` needs a prominent button: "Simular Primer Parcial" or "Exam Arena" to trigger the exam mode.
  - `StudyPanel.js` is focused on standard units. To prevent ballooning its size (currently 15KB), we will create a dedicated `ExamSimulator.js` component under `src/components/ExamSimulator.js`.
  - `main.js` needs to route and render `ExamSimulator` when `store.state.activeMode === 'exam'`.
- **CSS Styles (`src/style.css`)**: Needs responsive, high-fidelity styles for the simulator elements:
  - Input dropdowns for word-filling paragraphs.
  - Interactive rewrites for Active-to-Passive transitions.
  - Interactive listening player mockup with audio controls.
  - Writing checkbox list checking `to-infinitive`, `relative clause`, and `modal verb` in real-time.

## 3. Recommended Approach
We will isolate the Mock Exam logic in its own data file `mock_exam.js` and build a reactive `ExamSimulator.js` component. This prevents monolithic leakage and makes the codebase highly maintainable.
- **TDD Capability**: The project is in standard mode (no active tests), so we will proceed with manual validation.
