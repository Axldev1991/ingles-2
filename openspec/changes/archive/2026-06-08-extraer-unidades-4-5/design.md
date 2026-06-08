# Design: Extraer e Implementar Unidades 4 y 5

## Technical Approach
Implementar los datos académicos estructurados como ES Modules independientes que se cargan de forma perezosa (lazy load) a través del centralizador `src/data/loader.js`. Esto mantiene la velocidad de carga de la SPA intacta al no cargar en memoria contenido que el alumno aún no ha seleccionado.

## Architecture Decisions

### Decision: Subfolder per Unit
**Choice**: Crear directorios dedicados `src/data/units/unit4/` y `src/data/units/unit5/` compuestos por un `index.js` y archivos separados por tema.
**Alternatives considered**: Tener un único archivo monolítico de datos por unidad.
**Rationale**: Mantener coherencia con la estructura de las Unidades 1, 2 y 3. Facilita la legibilidad y evita mezclar explicaciones complejas de múltiples disciplinas gramaticales.

## Data Flow
El cargador (`loader.js`) importa de forma asíncrona la unidad y expone los temas correspondientes al enrutador `StudyPanel.js` que se acopla dinámicamente con el render de cada vista:
```
  Sidebar (SELECT_UNIT) ──→ appStore (dispatch)
                               │
                               ▼
  loader.js (loadUnit) ──→ StudyPanel (render)
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/data/loader.js` | Modify | Registrar y dar soporte de carga a `unit4` y `unit5` |
| `src/data/units/unit4.js` | Create | Re-exportar unit4Data desde su carpeta |
| `src/data/units/unit4/index.js` | Create | Entrypoint y composición de temas para Unidad 4 |
| `src/data/units/unit4/listening_conferencing.js` | Create | Tema 1: Videoconferencias (listening) |
| `src/data/units/unit4/conditionals.js` | Create | Tema 2: Condicionales tipos 0, 1, 2, 3 |
| `src/data/units/unit4/listening_lan.js` | Create | Tema 3: LAN y redes cableadas/inalámbricas |
| `src/data/units/unit4/phrasal_verbs.js` | Create | Tema 4 y 5: Setting up networks & Phrasal Verbs |
| `src/data/units/unit4/revision_capstone.js` | Create | Tema 6: Capstone de revisión de redes |
| `src/data/units/unit5.js` | Create | Re-exportar unit5Data desde su carpeta |
| `src/data/units/unit5/index.js` | Create | Entrypoint y composición de temas para Unidad 5 |
| `src/data/units/unit5/it_evolution.js` | Create | Tema 1: Evolución de IT (lectura) |
| `src/data/units/unit5/passive_voice.js` | Create | Tema 2 y 3: Voz Pasiva (tiempos verbales y gotchas) |
| `src/data/units/unit5/connectors.js` | Create | Tema 4: Conectores y conjunciones lógicas |
| `src/data/units/unit5/algorithms.js` | Create | Tema 5: Loops, contadores y acumuladores (cloze) |
| `src/data/units/unit5/revision_capstone.js` | Create | Tema 6: Capstone de revisión de evolución de IT |

## Testing Strategy
- **Manual Verification**: Navegar hacia las unidades 4 y 5, verificar la carga de cada tema y confirmar que las respuestas correctas de condicionales y voz pasiva coincidan con las del booklet.
