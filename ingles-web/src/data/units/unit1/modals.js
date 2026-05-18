export const modalsData = {
  id: "u1_modals",
  title: "Modal Verbs & Rules",
  explanation: `
    <h3>Verbos Modales y sus Reglas de Oro</h3>
    <p>Los verbos modales expresan la actitud del hablante ante la acción (habilidad, obligación, consejo, posibilidad). Tienen tres reglas de oro inquebrantables:</p>
    
    <div class="rules-box">
      <ol>
        <li><strong>No llevan 's' en 3ra persona singular:</strong> <em>"He can write"</em> (nunca <em>"He cans write"</em>).</li>
        <li><strong>El verbo siguiente va siempre en Bare Infinitive (sin 'to'):</strong> <em>"We should study"</em> (nunca <em>"We should to study"</em>).</li>
        <li><strong>No usan auxiliares (do/does/did) en preguntas o negaciones:</strong> <em>"Must I compile?" / "I cannot execute."</em></li>
      </ol>
    </div>
    
    <h4>Significados principales:</h4>
    <ul>
      <li><strong>Must (Obligación absoluta / Deducción lógica fuerte):</strong>
        <br>- <code>"You must enter your password."</code> (Debés ingresar tu contraseña).
      </li>
      <li><strong>Should (Consejo o recomendación suave):</strong>
        <br>- <code>"You should backup your database."</code> (Deberías respaldar tu base de datos).
      </li>
      <li><strong>Can / Could (Habilidad o permiso en presente / pasado):</strong>
        <br>- <code>"The AI model can process language."</code> (El modelo de IA puede procesar lenguaje).
      </li>
      <li><strong>Don't have to (Falta de obligación - es OPCIONAL):</strong>
        <br>- <code>"You don't have to pay, it is free software."</code> (No tenés la obligación de pagar).
      </li>
      <li><strong>Mustn't (PROHIBICIÓN absoluta):</strong>
        <br>- <code>"You mustn't leak production secrets."</code> (Prohibido filtrar secretos de producción).
      </li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Slack & Daily Standups)</h4>
    <p>En el trabajo de desarrollo de software, usamos verbos modales constantemente para negociar prioridades en las revisiones de código (PR Reviews) o expresar urgencias críticas de seguridad:</p>
    <blockquote>
      <strong>Lead Developer (PR Review Comment):</strong> <em>"We <strong>should</strong> refactor this utility class to avoid code duplication. However, we <strong>must</strong> patch this SQL injection vulnerability before merging. You <strong>don't have to</strong> write unit tests for this hotfix."</em>
    </blockquote>
    <p><strong>💡 Tip:</strong> Notá cómo <em>should</em> sugiere suavemente (sugerencia constructiva), <em>must</em> impone una prioridad obligatoria e incuestionable (seguridad crítica) y <em>don't have to</em> indica opcionalidad/falta de obligación (¡se puede omitir sin problema!).</p>
  `,
  gotcha: "¡Cuidado con la diferencia entre **mustn't** (prohibición, no podés hacerlo) y **don't have to** (falta de necesidad, podés hacerlo si querés pero no es obligatorio). Esto se evalúa frecuentemente en comprensión de manuales.",
  exercises: [
    {
      id: "u1_mod_1",
      type: "multiple-choice",
      question: "Choose the correct modal: 'You _________ share credentials. It is extremely dangerous and strictly forbidden.'",
      options: ["mustn't", "don't have to", "should to"],
      correctAnswer: 0,
      explanation: "Dado que es estrictamente prohibido ('strictly forbidden'), debemos usar el modal de prohibición absoluta: 'mustn't'."
    },
    {
      id: "u1_mod_2",
      type: "multiple-choice",
      question: "Identify the correct modal representing optionality: 'The system has automatic migrations, so you _________ write SQL manually.'",
      options: ["mustn't", "don't have to", "should to"],
      correctAnswer: 1,
      explanation: "Expresa falta de necesidad (no es obligatorio porque es automático, pero podrías hacerlo si quisieras). Se usa 'don't have to'."
    },
    {
      id: "u1_mod_3",
      type: "multiple-choice",
      question: "Choose the correct sentence structure:",
      options: [
        "He shoulds write tests.",
        "He should to write tests.",
        "He should write tests."
      ],
      correctAnswer: 2,
      explanation: "Los modales no llevan 's' en tercera persona y van seguidos de infinitivo sin 'to'. La única opción gramaticalmente correcta es 'He should write tests.'"
    },
    {
      id: "u1_mod_4",
      type: "fill-in-the-blank",
      question: "Which modal verb represents a strong advice/recommendation? (Write should, must, or can)",
      correctAnswer: "should",
      explanation: "El verbo modal para dar consejos y recomendaciones es 'should' (debería)."
    }
  ]
};
