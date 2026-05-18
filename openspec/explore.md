# SDD Exploration: Monolith Refactoring (ingles-web)

## 1. Context & Architecture Analysis
The current codebase of `ingles-web` is a classic DOM-manipulation monolith. The components are tightly coupled through the global `state` object and direct DOM element queries.

### Current Files
- `src/data.js` (751 lines): Single massive database containing lessons, GOTCHAs, multiple-choice questions, and fill-in-the-blank questions for all units.
- `src/main.js` (555 lines): Orchestrates state management, UI rendering, event listeners, localStorage persistence, and mathematical logic (mastery scores, streak tracking).
- `src/style.css`: A premium Vanilla CSS styling sheet. No CSS frameworks used (as requested).
- `index.html`: Holds the scaffolding of the HTML layout.

### Target Areas for Refactoring
1. **Dynamic Data Loading (Data Splitting)**: Instead of a massive `data.js`, we can partition units into separate data modules (`src/data/unit1.js`, `src/data/unit2.js`, etc.) and lazy-load them asynchronously using Vite's dynamic imports.
2. **State Decoupling (Observer Pattern / Store)**: Move application state into a unified, reactive store `src/store.js` that emits update events to listeners.
3. **Componentized UI Rendering**: Split the massive DOM-manipulating methods in `main.js` into modular renderers (e.g., `src/components/Sidebar.js`, `src/components/Header.js`, `src/components/StudyPanel.js`).
4. **Local Storage Adaptor**: Encapsulate persistence logic into a storage service (`src/services/storage.js`) to make it easily swappable (e.g., if migrating to indexDB or an API later).

## 2. Refactoring Tradeoffs
- **Traditional Monolith (Current)**:
  - *Pros*: Extremely simple to run, zero load delays.
  - *Cons*: Difficult to maintain, data scalability is limited, high cognitive load for future enhancements, impossible to unit test.
- **Componentized React-like/Reactive Architecture (Proposed)**:
  - *Pros*: Clear Separation of Concerns (SoC), units are loaded on-demand saving memory, isolated testing of business logic, high scalability.
  - *Cons*: Slight load latency on unit change (minimized by micro-modules).

## 3. Recommended Approach
Adopt a modular **reactive store + independent view components** pattern in Vanilla JS.
- Split static data by Unit.
- Implement an explicit state manager with a subscription mechanism.
- Implement rendering components as functions receiving state and emitting events to the store.
