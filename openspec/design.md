# SDD Technical Design Document

## 1. Directory Structure Details
All active files will be placed inside `src/`. Static text and asset files remain untouched.

```
src/
├── main.js
├── style.css
├── data/
│   ├── loader.js
│   └── units/
│       ├── unit1.js
│       ├── unit2.js
│       └── unit3.js
├── services/
│   └── storage.js
├── store/
│   └── appStore.js
└── components/
    ├── Header.js
    ├── Sidebar.js
    ├── StudyPanel.js
    └── WelcomeScreen.js
```

---

## 2. Design Patterns & Class Diagrams

### The Pub-Sub Store Pattern (`src/store/appStore.js`)
Instead of a simple global object, the App Store manages state mutations via explicit actions and notifies active views.

```javascript
class AppStore {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(l => l(this.state));
  }

  dispatch(action, payload) {
    // Reducer/Action handler logic
    switch (action) {
      case 'SELECT_UNIT':
        this.state.activeUnitId = payload;
        this.state.activeTopicIndex = 0;
        this.state.activeExerciseIndex = 0;
        this.state.activeMode = 'theory';
        this.resetAnswerState();
        break;
      // other cases...
    }
    this.notify();
  }
}
```

### Modular Component Architecture
All components will export a standard function interface:
```javascript
export function renderComponent(containerElement, store) {
  // 1. Clear previous HTML
  // 2. Generate new HTML using store.state
  // 3. Inject event listeners that call store.dispatch()
}
```
This guarantees that views remain completely decoupled, lightweight, and logic-free. They only represent a visual mapping of the current State.

---

## 3. Storage Service Layer (`src/services/storage.js`)
Encapsulate localStorage reads/writes so that standard application components are fully insulated from browser APIs:

```javascript
const KEY = 'utn_ingles_2_progress';

export const storageService = {
  load(defaultStats) {
    const data = localStorage.getItem(KEY);
    if (!data) return defaultStats;
    try {
      return { ...defaultStats, ...JSON.parse(data) };
    } catch (e) {
      console.error(e);
      return defaultStats;
    }
  },
  save(stats) {
    localStorage.setItem(KEY, JSON.stringify(stats));
  }
};
```

---

## 4. Async Unit Loader (`src/data/loader.js`)
Splits the massive units database so only relevant static items are loaded:

```javascript
export const unitLoader = {
  async loadUnit(unitId) {
    switch (unitId) {
      case 'u1':
        const u1 = await import('./units/unit1.js');
        return u1.unit1Data;
      case 'u2':
        const u2 = await import('./units/unit2.js');
        return u2.unit2Data;
      case 'u3':
        const u3 = await import('./units/unit3.js');
        return u3.unit3Data;
      default:
        throw new Error(`Unknown unit: ${unitId}`);
    }
  },
  
  // High-level list of units with metadata for Sidebar rendering (without full content)
  getUnitsMetadata() {
    return [
      { id: 'u1', title: 'Unit 1: Technical Vocabulary', icon: '📝', topicsCount: 4 },
      { id: 'u2', title: 'Unit 2: Grammatical Structures', icon: '⚡', topicsCount: 5 },
      { id: 'u3', title: 'Unit 3: Text Organization', icon: '🧠', topicsCount: 4 }
    ];
  }
};
```
