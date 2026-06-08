# Proposal: Extraer e Implementar Unidades 4 y 5

## Intent
Expandir la base de contenidos del sistema reactivo de estudio incorporando la Unidad 4 (Networks) y la Unidad 5 (The Evolution of IT). Actualmente la plataforma solo soporta hasta la Unidad 3, y los contenidos de las unidades restantes se encuentran sin estructurar en formato de texto plano.

## Scope

### In Scope
- Creación de todos los archivos y carpetas de datos de la Unidad 4 bajo `src/data/units/unit4/`.
- Creación de todos los archivos y carpetas de datos de la Unidad 5 bajo `src/data/units/unit5/`.
- Adaptación de la teoría académica y ejercicios a formato interactivo (MCQ y completado de texto).
- Inclusión de las explicaciones *"El Lado Humano"* contextualizando reglas en dinámicas de equipos IT (ej. reportes técnicos objetivos, incident post-mortems en voz pasiva, etc.).
- Modificación de `src/data/loader.js` para registrar e importar de forma perezosa (lazy load) las nuevas unidades.

### Out of Scope
- Alteración de los componentes de UI (`StudyPanel.js`, etc.) ya que cargan dinámicamente cualquier unidad registrada.
- Modificación de la lógica del simulador de examen principal (mock exam).

## Capabilities

### New Capabilities
- `unit-4-networks`: Teoría y práctica interactiva sobre condicionales, phrasal verbs de redes y listenings de videoconferencias/LAN.
- `unit-5-it-evolution`: Teoría y práctica sobre voz pasiva en múltiples tiempos verbales, conectores lógicos de discurso y cloze de algoritmos.

### Modified Capabilities
- None

## Approach
Extraer la información académica de `booklet_text.txt` a partir de las líneas 1242 y 1442, estructurando las explicaciones gramaticales e IT y dividiendo cada sección del booklet en temas individuales del store. Cada tema contendrá explicaciones en HTML, Gotchas de examen y de 3 a 5 ejercicios adaptados a los tipos `multiple-choice` y `fill-in-the-blank`.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/data/loader.js` | Modified | Registrar e importar dinámicamente unit4 y unit5 |
| `src/data/units/unit4/` | New | Carpeta y archivos de temas para la Unidad 4 |
| `src/data/units/unit4.js` | New | Entrypoint exportador de la Unidad 4 |
| `src/data/units/unit5/` | New | Carpeta y archivos de temas para la Unidad 5 |
| `src/data/units/unit5.js` | New | Entrypoint exportador de la Unidad 5 |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Variabilidad en respuestas de texto libre (voz pasiva y condicionales) | Med | En los ejercicios tipo `fill-in-the-blank`, asegurar que las claves correctas se comparen sanitizadas y prever variaciones tipográficas. |

## Rollback Plan
Si surge algún problema, revertir cambios en Git y remover los nuevos archivos de datos:
`git checkout src/data/loader.js`
`rm -rf src/data/units/unit4/ src/data/units/unit5/ src/data/units/unit4.js src/data/units/unit5.js`

## Dependencies
- Archivo de origen: [booklet_text.txt](file:///home/axel/Escritorio/UTN/Ingles%202/material-academico/booklet_text.txt)

## Success Criteria
- [ ] Las Unidades 4 y 5 aparecen en la barra lateral e inicio del hub con su descripción y progreso al 0%.
- [ ] Es posible estudiar y completar los ejercicios de todos los temas de ambas unidades.
- [ ] El dominio de maestría (masteryScore) de las Unidades 4 y 5 se calcula y persiste correctamente.
