# SDD Functional & Technical Specifications

## 1. Functional Specifications

### F-01: Application Welcome/Dashboard Screen
- **Behavior**: When the application boots and no unit is active, it must show a prominent welcome screen with an introduction to the Study Hub and a CTA button "Comenzar a Estudiar".
- **Interaction**: Clicking "Comenzar a Estudiar" must automatically select and load the first available unit (Unit 1).

### F-02: Navigation Sidebar
- **Behavior**: Renders a vertical list of study units dynamically.
- **Metrics**: Each unit item must display:
  - The icon (emoji/badge).
  - The title (e.g., "Unit 1: Technical Vocabulary").
  - The count of topics inside it.
  - The current mastery score percentage (0-100%).
  - A responsive visual progress bar representing the mastery score.
- **Interaction**: Clicking a unit button resets the active topic to 0, active mode to "theory", and loads the unit dashboard.

### F-03: Header & Global Analytics
- **Behavior**: The top header must display the logo and two global metric chips:
  - **Streak**: Days in row (retrieved and updated from storage).
  - **Average Mastery**: The average percentage score across all loaded units.

### F-04: Topic Navigation Tabs
- **Behavior**: Inside an active unit, a horizontal navigation tab bar must list all unit topics.
- **Interaction**: Clicking a topic tab switches the main panel content to that topic, resets the active exercise index to 0, and resets active mode to "theory".

### F-05: Study Panel Modes (Theory vs. Practice)
- **Behavior**: Each topic has two views:
  - **Theory Mode**: Renders the complete grammatical and technical explanation, along with an optional highlighted "GOTCHA" alert for common pitfalls. Displays a CTA "¡Entendido! Ir a los ejercicios".
  - **Practice Mode**: Renders an interactive arena card for solving exercises sequentially.

### F-06: Interactive Exercise Arena
- **Behavior**: Shows a question text, a progressive step counter ("Ejercicio X de Y"), and an interaction area:
  - **Multiple-Choice**: Lists options as buttons. Allows selection of one option.
  - **Fill-in-the-blank**: Shows a text input field.
- **Interaction**:
  - The "Verificar Respuesta" button is disabled until a selection or text input is made.
  - Clicking "Verificar Respuesta" evaluates the answer, adds a visual styling class (`correct` or `incorrect`) to the chosen options/input, logs correct status, recalculates unit mastery, updates global stats, and renders a rich pedagogical feedback block outlining:
    - Clear statement of correctness (✅ / ❌).
    - Conceptual breakdown of the correct choice.
    - Deep structural breakdown of why the incorrect choices are wrong.
    - Practical illustrative examples.
  - Replaces the "Verificar" CTA with a "Siguiente Ejercicio" or "Completar Tema" button.

### F-07: Persistent Progress (Local Storage)
- **Behavior**: All user state stats (`streak`, `masteryScores`, `completedExercises`) must persist across browser sessions.

---

## 2. Technical Specifications & Boundaries

### State Contract (`store/appStore.js`)
The central state must match this layout:
```typescript
interface AppState {
  activeUnitId: string | null;
  activeTopicIndex: number;
  activeExerciseIndex: number;
  activeMode: 'theory' | 'practice';
  selectedOption: number | null;
  userAnswerText: string;
  hasSubmitted: boolean;
  isCorrect: boolean;
  stats: {
    streak: number;
    masteryScores: Record<string, number>;
    completedExercises: string[];
  }
}
```

### Component Interfaces
Every UI component must receive the central `store` instance and export a render method:
```javascript
export function renderSidebar(element, store) { ... }
```
Components must be highly modular and side-effect free, interacting only by dispatching events to the `store`.
