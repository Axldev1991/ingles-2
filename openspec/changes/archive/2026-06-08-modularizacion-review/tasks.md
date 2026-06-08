# Tasks: Proyecto Modularization Review

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~1500 (deletions + additions) |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 (StudyPanel refactor) → PR 2 (ExamSimulator refactor) |
| Delivery strategy | ask-on-risk |
| Chain strategy | size-exception |

Decision needed before apply: No
Chained PRs recommended: Yes
Chain strategy: size-exception
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Modularización de StudyPanel y sus subvistas de estudio | PR 1 | Base: main. Crea `src/components/study/` |
| 2 | Modularización de ExamSimulator y los 7 steps interactivos | PR 2 | Base: PR 1 o main. Crea `src/components/exam/` |

## Phase 1: Modularización de StudyPanel (Estudio)
- [ ] 1.1 Crear `src/components/study/UnitDashboard.js` con el renderizado de la cuadrícula de temas.
- [ ] 1.2 Crear `src/components/study/ExerciseArena.js` con el panel interactivo de resolución de ejercicios y feedback.
- [ ] 1.3 Crear `src/components/study/FocusMode.js` para componer Teoría + ExerciseArena.
- [ ] 1.4 Modificar `src/components/StudyPanel.js` para importar y usar los subcomponentes anteriores.

## Phase 2: Modularización de ExamSimulator (Examen)
- [ ] 2.1 Crear componentes individuales de pasos en `src/components/exam/steps/`: `ReadingStep.js`, `TensesStep.js`, `ModalsStep.js`, `PassiveStep.js`, `ListeningStep.js`, `WritingStep.js`, `ResultsStep.js`.
- [ ] 2.2 Migrar el reproductor simulado e intervalos de audio a `ListeningStep.js`.
- [ ] 2.3 Migrar las validaciones Regex de requisitos de escritura a `WritingStep.js`.
- [ ] 2.4 Modificar `src/components/ExamSimulator.js` para actuar únicamente como layout base del stepper de examen y delegar a cada componente.

## Phase 3: Integración y Verificación
- [ ] 3.1 Actualizar imports en `src/main.js` si es necesario.
- [ ] 3.2 Verificar manualmente que el flujo de práctica de temas sume masteryScore.
- [ ] 3.3 Verificar manualmente que las respuestas del examen y la pantalla final de resultados mantengan el cálculo exacto del puntaje.
