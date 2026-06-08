# Exploration: Extraer Unidades 4 y 5

## Current State
El proyecto actualmente cuenta con datos para las Unidades 1, 2 y 3. Las Unidades 4 y 5 del programa de "Inglés II" de la UTN FRA se encuentran en formato de texto plano dentro de [booklet_text.txt](file:///home/axel/Escritorio/UTN/Ingles%202/material-academico/booklet_text.txt).
- La Unidad 4 cubre: Condicionales (tipos 0, 1, 2, 3), Phrasal Verbs en redes, listenings de videoconferencias y LANs.
- La Unidad 5 cubre: Voz Pasiva (tiempos avanzados), Conectores (contraste, adición, secuencia, causa/efecto) y algoritmos/bucles en IT.

## Affected Areas
- `src/data/loader.js` — Registrar las unidades 4 y 5 en la metadata del cargador dinámico.
- `src/data/units/` — Crear `unit4.js` y `unit5.js` que exporten los datos agregados.
- `src/data/units/unit4/` — Crear carpeta y archivos por tema (`conditionals.js`, `phrasal_verbs.js`, `listening.js`, etc.).
- `src/data/units/unit5/` — Crear carpeta y archivos por tema (`passive_voice.js`, `connectors.js`, `algorithms.js`, etc.).

## Approaches

### 1. Extracción Estructurada por Módulos Temáticos (Recomendado)
Crear módulos JS específicos para cada unidad dentro de carpetas dedicadas (ej. `src/data/units/unit4/index.js`), estructurando el texto, explicaciones ("El Lado Humano", Gotchas) y ejercicios (MCQ / Fill-in-the-blank) según el estándar del proyecto.
- **Pros**:
  - Limpieza absoluta y coherencia con la arquitectura del resto de las unidades.
  - Carga dinámica optimizada (lazy loading a nivel de unidad).
- **Cons**:
  - Mayor cantidad de archivos a crear y enlazar.
- **Effort**: Medium

### 2. Archivo Único por Unidad (Monolítico)
Agrupar todo el JSON de la Unidad 4 en `unit4Data.js` y el de la Unidad 5 en `unit5Data.js`.
- **Pros**: Menos archivos creados.
- **Cons**: Archivos gigantescos difíciles de mantener y contrarios a la modularización lograda previamente.
- **Effort**: Low

## Recommendation
Implementar el **Enfoque 1: Extracción Estructurada por Módulos Temáticos**. Mantiene los estándares de arquitectura modular definidos y facilita la mantenibilidad de los datos de temas y ejercicios individuales.

## Risks
- Detección precisa de respuestas correctas en inputs de texto libre (condicionales y voz pasiva). Se debe implementar soft-matching (trimming, minúsculas) e incluir explicaciones claras en las claves.

## Ready for Proposal
Yes
