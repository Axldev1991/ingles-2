# Tasks: Extraer e Implementar Unidades 4 y 5

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~1200 (mainly additions) |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR 1 (Unit 4 Data) → PR 2 (Unit 5 Data + Loader wiring) |
| Delivery strategy | ask-on-risk |
| Chain strategy | size-exception |

Decision needed before apply: No
Chained PRs recommended: Yes
Chain strategy: size-exception
400-line budget risk: High

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Extraer y estructurar datos de Unidad 4 | PR 1 | Crea carpeta `src/data/units/unit4/` |
| 2 | Extraer y estructurar datos de Unidad 5 e integrar en Loader | PR 2 | Crea `src/data/units/unit5/`, modifica `src/data/loader.js` |

## Phase 1: Implementación de Unidad 4 (Networks)
- [ ] 1.1 Crear `src/data/units/unit4/listening_conferencing.js` con el listening de videoconferencias.
- [ ] 1.2 Crear `src/data/units/unit4/conditionals.js` con la teoría y 8 ejercicios de condicionales.
- [ ] 1.3 Crear `src/data/units/unit4/listening_lan.js` con las preguntas del listening de LAN y etiquetado de elementos.
- [ ] 1.4 Crear `src/data/units/unit4/phrasal_verbs.js` con los 12 phrasal verbs y ejercicios de asociación.
- [ ] 1.5 Crear `src/data/units/unit4/revision_capstone.js` con el capstone de repaso de redes.
- [ ] 1.6 Crear `src/data/units/unit4/index.js` y `src/data/units/unit4.js` para unificar y exportar la Unidad 4.

## Phase 2: Implementación de Unidad 5 (Evolution of IT)
- [ ] 2.1 Crear `src/data/units/unit5/it_evolution.js` con la lectura y preguntas sobre la evolución histórica de IT.
- [ ] 2.2 Crear `src/data/units/unit5/passive_voice.js` con teoría y conjugaciones de voz pasiva (present continuous, past continuous, etc.).
- [ ] 2.3 Crear `src/data/units/unit5/connectors.js` con teoría y ejercicios de conectores de contraste, adición y causa/efecto.
- [ ] 2.4 Crear `src/data/units/unit5/algorithms.js` con el cloze interactivo de bucles, contadores y acumuladores.
- [ ] 2.5 Crear `src/data/units/unit5/revision_capstone.js` con el capstone de repaso de la Unidad 5.
- [ ] 2.6 Crear `src/data/units/unit5/index.js` y `src/data/units/unit5.js` para unificar y exportar la Unidad 5.

## Phase 3: Integración y Cableado
- [ ] 3.1 Modificar `src/data/loader.js` para dar soporte a `unit4` y `unit5` y registrar su metadata en `getUnitsMetadata()`.
- [ ] 3.2 Verificar empaquetado del proyecto (`npm run build`).
