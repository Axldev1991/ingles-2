# SDD Task Breakdown & Implementation Roadmap

## Task List & Dependency Graph

### Phase A: Database Partitioning & Core Services
- [x] **Task 1: Directory Setup**: Create directory trees inside `/src`:
  - `src/data/units/`
  - `src/services/`
  - `src/store/`
  - `src/components/`
- [x] **Task 2: Partitioning Unit Data**:
  - Extract Unit 1 data from `data.js` into `src/data/units/unit1.js`.
  - Extract Unit 2 data from `data.js` into `src/data/units/unit2.js`.
  - Extract Unit 3 data from `data.js` into `src/data/units/unit3.js`.
  - Delete old `src/data.js` once dynamic references are wired up.
- [x] **Task 3: Dynamic Loader Creation**: Build `src/data/loader.js` managing asynchronous loading of unit files using dynamic `import()`.
- [x] **Task 4: Storage Service Creation**: Create `src/services/storage.js` wrapping localStorage actions for safety.

---

### Phase B: Reactive Store Implementation
- [x] **Task 5: Reactive Store Setup**: Build `src/store/appStore.js` implementing a unified Pub-Sub state machine.

---

### Phase C: Modular UI Component Extraction
- [x] **Task 6: Welcome Screen Component**: Move welcome layout into `src/components/WelcomeScreen.js`.
- [x] **Task 7: Header Metrics Component**: Extract streak and average mastery calculations and display into `src/components/Header.js`.
- [x] **Task 8: Sidebar Navigation Component**: Extract unit list rendering, progress bars, and click listeners into `src/components/Sidebar.js`.
- [x] **Task 9: Study Panel Arena Component**:
  - Extract topic navigation tabs.
  - Extract theory view (content + GOTCHA callouts).
  - Extract interactive practice view (multiple-choice buttons, fill-in-the-blank textboxes, locks on submit, visual error styling, custom detailed explanations).

---

### Phase D: Orchestration & Bootstrapping
- [x] **Task 10: Main Entry Refactoring**: Completely rewrite `src/main.js` to:
  - Initialize the `AppStore`.
  - Subscribe `Header`, `Sidebar`, `StudyPanel`, and `WelcomeScreen` to store modifications.
  - Wire up global boots and dispatch actions.
- [x] **Task 11: End-to-End Verification**:
  - Boot Vite server, verify landing page shows.
  - Navigate units and tabs.
  - Test question answers, locks, and feedback card render correctly.
  - Validate state transitions persist via local storage.
