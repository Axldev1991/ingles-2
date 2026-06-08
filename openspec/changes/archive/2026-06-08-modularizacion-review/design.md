# Design: Proyecto Modularization Review

## Technical Approach
Refactorizar `ExamSimulator.js` y `StudyPanel.js` separándolos en componentes de función única. Cada componente encapsulará su marcado HTML y sus listeners específicos. El estado general seguirá residiendo en `appStore.js` y se propagará mediante flujos reactivos unidireccionales de Pub-Sub.

## Architecture Decisions

### Decision: Component Contract for Exam Steps
**Choice**: Usar funciones auto-contenidas de renderizado que reciben `containerElement` y la instancia del `store`, encargándose de inyectar el HTML y enlazar los eventos locales.
**Alternatives considered**: Clases con ciclo de vida (excesivo para Vanilla JS en este proyecto), o Web Components (aumentaría complejidad de boilerplate innecesariamente).
**Rationale**: Mantener el patrón imperativo-declarativo actual del proyecto, facilitando la transición y minimizando el riesgo de regresiones.

## Data Flow
El flujo de datos sigue siendo unidireccional:
```
  AppStore (State) ──→ Subcomponente (Render)
        ▲                      │
        │                      ▼
  User Action ─────── Dispatch Action
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/components/exam/ExamSimulator.js` | Modify | Orquestador principal del stepper de exámenes. |
| `src/components/exam/steps/ReadingStep.js` | Create | Paso I: Comprensión lectora, dropdowns y preguntas MCQ. |
| `src/components/exam/steps/TensesStep.js` | Create | Paso II: Conjugación de verbos (sentence inputs). |
| `src/components/exam/steps/ModalsStep.js` | Create | Paso III: Selección de verbos modales. |
| `src/components/exam/steps/PassiveStep.js` | Create | Paso IV: Reescritor de voz pasiva. |
| `src/components/exam/steps/ListeningStep.js` | Create | Paso V: Reproductor de audio simulado y transcript con gaps/MCQs. |
| `src/components/exam/steps/WritingStep.js` | Create | Paso VI: Laboratorio de escritura (Echo Dot) con validación Regex. |
| `src/components/exam/steps/ResultsStep.js` | Create | Paso VII: Tabla de resultados y feedback de Agile Coach. |
| `src/components/StudyPanel.js` | Modify | Orquestador principal de vistas de estudio. |
| `src/components/study/UnitDashboard.js` | Create | Vista de cuadrícula de temas y progresos por unidad. |
| `src/components/study/FocusMode.js` | Create | Modo foco (Teoría + Arena de práctica). |
| `src/components/study/ExerciseArena.js` | Create | Arena interactiva de ejercicios (MCQ / fill-in-the-blank y feedback). |

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Manual | Flujo del simulador | Navegar el examen completo respondiendo cada paso y validar el puntaje final. |
| Manual | Navegación de estudio | Entrar a una unidad, ver teoría, resolver ejercicios y verificar que sume progreso. |

## Migration / Rollout
No migration required. El refactor es puramente estructural e interno.

## Open Questions
None
