# Specification: Unit 4 Networks

## Purpose
Establecer los requisitos y escenarios para la Unidad 4: Redes. Cubre el contenido auditivo, gramatical (condicionales tipo 0, 1, 2 y 3) y de vocabulario técnico (phrasal verbs de redes).

## Requirements

### Requirement: Video Conferencing Systems
El sistema MUST proveer ejercicios interactivos de tipo opción múltiple basados en el listening de videoconferencias.
#### Scenario: Answer Video Conferencing Questions
- GIVEN el usuario está en el tema "Video Conferencing Systems"
- WHEN selecciona una opción para la pregunta "MCU (Multipoint control unit) will be useful if..."
- THEN el sistema habilita el botón de verificar respuesta.

### Requirement: Conditionals Grammar Conjugation
El sistema MUST validar la conjugación correcta de verbos entre paréntesis en condicionales tipo 0, 1, 2 y 3.
#### Scenario: Validate Conditional Types
- GIVEN el usuario completa el condicional "If you mix yellow and red, you get orange" (Type 0)
- WHEN presiona verificar respuesta
- THEN el sistema lo marca como CORRECTO.

### Requirement: Network Phrasal Verbs Match
El sistema MUST listar la teoría de Phrasal Verbs de redes y validar que el alumno comprenda sus significados (ej. "set up" -> "establish", "plug into" -> "connect").
#### Scenario: Practice Phrasal Verbs
- GIVEN el ejercicio solicita definir el significado de "carry out"
- WHEN selecciona la opción "execute"
- THEN el sistema valida y muestra explicación sobre ejecución de programas.
