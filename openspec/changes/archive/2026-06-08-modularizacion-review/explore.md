# Exploration: Proyecto Modularization Review

## Current State
El proyecto actualmente sigue un patrón SPA minimalista con un reactive store centralizado (`src/store/appStore.js`) que maneja las transiciones de pantalla de manera reactiva por Pub-Sub. Sin embargo, a nivel de vistas y componentes de UI, se detecta un acoplamiento excesivo y falta de cohesión en dos módulos principales:
- **[ExamSimulator.js](file:///home/axel/Escritorio/UTN/Ingles%202/ingles-web/src/components/ExamSimulator.js) (691 líneas)**: Contiene en un solo archivo la UI del layout del examen, los renderizadores de los 6 pasos interactivos (con lógicas muy distintas de formularios, Regex de escritura, reproductor simulado por intervalos para el Listening) y una función gigante de listeners (`setupEventListeners`).
- **[StudyPanel.js](file:///home/axel/Escritorio/UTN/Ingles%202/ingles-web/src/components/StudyPanel.js) (390 líneas)**: Gestiona el Dashboard de la Unidad, la pantalla de "Unidad Completada", la visualización de Teoría y el flujo de los ejercicios individuales con sus estados de interacción y feedback.

## Affected Areas
- [ExamSimulator.js](file:///home/axel/Escritorio/UTN/Ingles%202/ingles-web/src/components/ExamSimulator.js) — Reemplazar por un orquestador que delegue en componentes de pasos.
- [StudyPanel.js](file:///home/axel/Escritorio/UTN/Ingles%202/ingles-web/src/components/StudyPanel.js) — Dividir en dashboard de unidad, modo foco (teoría/ejercicio), y submódulos de interacción.
- [main.js](file:///home/axel/Escritorio/UTN/Ingles%202/ingles-web/src/main.js) — Actualizar las referencias de importación.

## Approaches

### 1. Modularización por Componentes Cohesivos (Recomendado)
Crear subcarpetas dedicadas para el examen (`src/components/exam/`) y la sección de estudio (`src/components/study/`), separando cada fase del examen y cada subvista de estudio en archivos con responsabilidad única (Single Responsibility Principle).
- **Pros**:
  - Código desacoplado, súper limpio y testeable.
  - Escalar el simulador con un nuevo step o agregar tipos de ejercicios de práctica no requiere modificar archivos gigantes.
  - Facilidad de lectura para mantenimiento.
- **Cons**:
  - Requiere un refactor estructurado de importaciones y mapeo de eventos.
- **Effort**: Medium

### 2. Extracción de Helper Renderers (Paso Intermedio)
Extraer únicamente los templates de renderizado a un archivo de utilidades, pero mantener la lógica de eventos y el flujo dentro de `ExamSimulator.js` y `StudyPanel.js`.
- **Pros**:
  - Menor riesgo inicial de rotura de listeners de eventos.
- **Cons**:
  - No resuelve el problema de fondo: la complejidad ciclomática del archivo principal y los `setupEventListeners` gigantes siguen ahí.
- **Effort**: Low

## Recommendation
Implementar el **Enfoque 1: Modularización por Componentes Cohesivos**. Como arquitecto senior, no podemos permitirnos "soluciones a medias" que comprometan el escalado futuro del simulador educativo. Separar cada paso del examen en su propio módulo y aislar el Dashboard de la Unidad del panel de estudio principal hará que el proyecto respire aire limpio y sea 100% extensible.

## Risks
- Pérdida de referencia en listeners de eventos durante la fragmentación de templates. Debemos asegurarnos de re-enlazar los handlers en cada subcomponente de forma limpia o delegar al contenedor.

## Ready for Proposal
Yes
