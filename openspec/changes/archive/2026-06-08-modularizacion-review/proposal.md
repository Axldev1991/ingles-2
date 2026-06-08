# Proposal: Proyecto Modularization Review

## Intent
Mejorar la mantenibilidad y escalabilidad de la UI en el simulador de examen (`ExamSimulator.js`) y en el panel de estudio (`StudyPanel.js`). Actualmente ambos componentes sufren de alto acoplamiento, mezclando control de flujo, lógica interactiva particular de cada sección y renderizado en archivos gigantes (especialmente `ExamSimulator.js` con casi 700 líneas). Esto dificulta agregar nuevas unidades o modificar pasos sin riesgo de regresión.

## Scope

### In Scope
- Desacoplar `ExamSimulator.js` en subcomponentes por paso (`ReadingStep.js`, `TensesStep.js`, `ModalsStep.js`, `PassiveStep.js`, `ListeningStep.js`, `WritingStep.js`, `ResultsStep.js`) bajo la carpeta `src/components/exam/`.
- Dividir `StudyPanel.js` en subvistas cohesivas (`UnitDashboard.js`, `FocusMode.js`, `ExerciseArena.js`) bajo la carpeta `src/components/study/`.
- Mantener la lógica de Pub-Sub reactiva centralizada en `appStore.js` intacta para evitar regresión de comportamiento.
- Re-enlazar todos los listeners de interacción y timers (Listening / Writing) de forma aislada y limpia en sus respectivos subcomponentes.

### Out of Scope
- Modificación del modelo de datos de las unidades (en `src/data/units/`).
- Cambios a la lógica de negocio o a las mutaciones de estado en `appStore.js`.
- Rediseño visual general de CSS (se mantienen los estilos existentes en `src/css/`).

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- None

## Approach
Crear directorios dedicados para los componentes de las dos secciones:
1. `src/components/exam/`: albergará `ExamSimulator.js` como controlador principal del layout y stepper, el cual renderizará e instanciará las clases/funciones correspondientes para cada paso del examen.
2. `src/components/study/`: albergará `StudyPanel.js` como orquestador de las vistas de estudio, derivando el dashboard y las arenas de práctica a submódulos especializados.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/components/exam` | New | Directorio para componentes del simulador |
| `src/components/study` | New | Directorio para componentes de estudio |
| `src/components/ExamSimulator.js` | Modified | Se reduce a layout base y enrutador de pasos |
| `src/components/StudyPanel.js` | Modified | Se reduce a layout base y enrutador de subvistas |
| `src/main.js` | Modified | Ajustar importaciones si cambia el path de exportación |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Pérdida de eventos en el re-renderizado | Med | Los subcomponentes se suscribirán al store o recibirán la instancia del store para registrar handlers tras inyectar el HTML. |
| Errores en el timer de listening | Low | Aislar el timer de reproducción simulada (`audioTimer`) dentro de `ListeningStep.js`, limpiándolo adecuadamente al desmontar. |

## Rollback Plan
Si surgen fallas críticas de interacción, revertir mediante Git:
`git checkout src/components/ExamSimulator.js src/components/StudyPanel.js src/main.js`
Y remover la carpeta `src/components/exam/` y `src/components/study/`.

## Dependencies
- Ninguna.

## Success Criteria
- [ ] El simulador de examen funciona exactamente igual en los 6 pasos y la pantalla de resultados.
- [ ] La navegación y práctica de las unidades de estudio (dashboard, teoría, ejercicios) mantiene su reactividad.
- [ ] Ningún componente individual supera las 200 líneas de código.
