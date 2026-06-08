# Specification: Unit 5 IT Evolution

## Purpose
Establecer los requisitos y escenarios para la Unidad 5: Evolución de la Tecnología de la Información. Cubre lectura histórica de IT, Voz Pasiva avanzada en contextos técnicos y conectores lógicos de discurso.

## Requirements

### Requirement: Advanced Passive Voice
El sistema MUST validar la estructura de Voz Pasiva en múltiples tiempos (ej. "A new security system is being installed").
#### Scenario: Answer Passive Voice Fill-in-the-Blanks
- GIVEN el usuario completa el ejercicio de Voz Pasiva "A critical update was being applied..."
- WHEN presiona verificar respuesta
- THEN el sistema lo marca como correcto si el valor ingresado es "was being applied" (sin importar mayúsculas o espacios extra).

### Requirement: Connector Identification and Loop Cloze
El sistema MUST proveer ejercicios para completar algoritmos y bucles de programación con el conector adecuado (ej. "loops repeat instructions because/although they reduce redundancy").
#### Scenario: Select Correct Loop Connector
- GIVEN el usuario ve el párrafo sobre algoritmos y bucles
- WHEN selecciona la opción "because" para la reducción de redundancia
- THEN el sistema evalúa la respuesta como correcta y muestra feedback conceptual sobre algoritmos.
