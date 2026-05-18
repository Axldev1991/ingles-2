export const infinitiveData = {
  id: "u1_the_infinitive",
  title: "The Infinitive (With & Without 'To')",
  explanation: `
    <h3>El Infinitivo en Inglés</h3>
    <p>El infinitivo es la forma básica de un verbo. Se divide en dos categorías clave de uso gramatical:</p>
    
    <h4>1. Infinitive WITH 'to' (Full Infinitive)</h4>
    <p>Se usa obligatoriamente:</p>
    <ul>
      <li><strong>Detrás de ciertos verbos reflexivos o de intención:</strong> <em>decide, want, hope, plan, need, manage, offer.</em>
        <br>- <code>"We decided to compile the app."</code> (Decidimos compilar la app).
      </li>
      <li><strong>Para expresar PROPÓSITO o FINALIDAD (Infinitive of Purpose):</strong> Equivale al "para + infinitivo" en español.
        <br>- <code>"I wrote a script to automate tests."</code> (Escribí un script *para* automatizar las pruebas).
      </li>
      <li><strong>Después de adjetivos:</strong> <em>easy, hard, difficult, impossible.</em>
        <br>- <code>"It is easy to debug dynamic scripts."</code> (Es fácil depurar scripts dinámicos).
      </li>
    </ul>
    
    <h4>2. Infinitive WITHOUT 'to' (Bare Infinitive / Infinitivo Desnudo)</h4>
    <p>Se usa obligatoriamente:</p>
    <ul>
      <li><strong>Detrás de verbos MODALES:</strong> <em>can, could, should, must, might, may.</em> (¡Jamás pongas 'to' después de un modal!).
        <br>- <code>"You should optimize your code."</code> (Deberías optimizar tu código).
      </li>
      <li><strong>Detrás de verbos causativos como MAKE y LET (en voz activa):</strong>
        <br>- <code>"Make him write the specs."</code> (Hacé que escriba las especificaciones).
        <br>- <code>"Let us debug the network."</code> (Dejanos depurar la red).
      </li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Slack & Daily Standups)</h4>
    <p>En Slack y en tus reportes diarios, usás infinitivos constantemente para indicar <strong>intenciones</strong> o pedir <strong>permiso</strong> (hacer uso de causativos como <em>let</em>):</p>
    <blockquote>
      <strong>You (Slack):</strong> <em>"I'm going <strong>to refactor</strong> the authentication middleware to improve security. Let me <strong>know</strong> if you have any objections."</em>
      <br><strong>Tech Lead (Slack):</strong> <em>"Excellent idea. Let's <strong>do</strong> that before the sprint ends."</em>
    </blockquote>
    <p><strong>💡 Tip:</strong> En la frase <em>"Let me know..."</em> y <em>"Let's do..."</em>, se usa Bare Infinitive (sin <em>to</em>) por el verbo causativo/permisivo <em>let</em>. En cambio, para tu intención de refactorizar se usa Full Infinitive: <em>"going to refactor"</em>.</p>
  `,
  gotcha: "¡Regla de oro! Si tenés un verbo modal como **must** o **should**, el verbo que le sigue va siempre desnudo (bare): <code>must go</code> (nunca <code>must to go</code>). Si expresás una finalidad, usás <code>to</code>: <code>I run to learn</code>.",
  exercises: [
    {
      id: "u1_inf_1",
      type: "multiple-choice",
      question: "Choose the correct structure: 'The project manager decided _________ (hire) two senior system engineers.'",
      options: ["to hire", "hire", "hiring"],
      correctAnswer: 0,
      explanation: "El verbo 'decide' requiere la estructura de Full Infinitive (infinitive with 'to'): 'to hire'."
    },
    {
      id: "u1_inf_2",
      type: "multiple-choice",
      question: "Complete the modal statement: 'Developers must _________ (document) the APIs properly.'",
      options: ["to document", "document", "documenting"],
      correctAnswer: 1,
      explanation: "'must' es un verbo modal, por lo que requiere el Bare Infinitive (infinitive without 'to'): 'document'."
    },
    {
      id: "u1_inf_3",
      type: "multiple-choice",
      question: "Identify the Infinitive of Purpose: 'He created a cron job _________ (clean) log tables automatically.'",
      options: ["to clean", "clean", "for to clean"],
      correctAnswer: 0,
      explanation: "Usamos el infinitivo con 'to' para indicar el propósito de la acción (¿para qué creó el cron job? Para limpiar las tablas)."
    },
    {
      id: "u1_inf_4",
      type: "multiple-choice",
      question: "Complete the causative clause: 'The lead architect made the junior dev _________ (rewrite) the repository patterns.'",
      options: ["to rewrite", "rewrite", "rewriting"],
      correctAnswer: 1,
      explanation: "El verbo causativo 'make' (en este caso en pasado, 'made') obliga al uso de Bare Infinitive en el verbo que realiza el sujeto subordinado: 'rewrite'."
    },
    {
      id: "u1_inf_5",
      type: "fill-in-the-blank",
      question: "Fill in the blank with the correct form of 'install' (with or without 'to'): 'It is highly recommended _________ the package locally.'",
      correctAnswer: "to install",
      explanation: "Después de adjetivos o estructuras descriptivas ('It is recommended...'), se utiliza obligatoriamente el infinitivo con 'to': 'to install'."
    }
  ]
};
