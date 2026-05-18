export const revisionCapstoneData = {
  id: "u1_revision_capstone",
  title: "🏁 Unit 1: Revision Arena",
  explanation: `
    <h3>Arena de Revisión Final - Unit 1</h3>
    <p>¡Felicitaciones! Llegaste a la arena de revisión de la Unidad 1. Acá vamos a poner a prueba todos los conceptos del booklet consolidando:</p>
    <ul>
      <li>Vocabulario técnico e histórico de computación (Compiladores, Intérpretes, Assembly, código máquina, Fortran).</li>
      <li>Uso preciso de infinitivos (with/without to) y causativos (make/let).</li>
      <li>Identificación sintáctica de la forma -ing (Gerund, Participle, Adjective).</li>
      <li>Reglas estrictas de verbos modales (must, mustn't, don't have to, should).</li>
      <li>Unión de ideas con pronombres relativos correctos (defining vs non-defining clauses).</li>
    </ul>
    <p>Esta arena contiene <strong>10 preguntas específicas de examen</strong> para blindar tus conocimientos.</p>

    <hr>
    <h4>💬 El Lado Humano (Slack & Daily Standups)</h4>
    <p>Al final de un ciclo, sprint o entrega de laboratorio, es una excelente costumbre felicitar a tus compañeros en Slack para fomentar el compañerismo y consolidar un buen ambiente de equipo:</p>
    <blockquote>
      <strong>You (Slack):</strong> <em>"Great job on the deployment today, team! You made it look easy. All services are running stably."</em>
      <br><strong>Tech Lead (Slack):</strong> <em>"Thank you for your effort! Rest well tonight."</em>
    </blockquote>
    <p><strong>💡 Tip:</strong> La frase idiomática <em>"You made it look easy"</em> (hiciste que pareciera fácil) es un cumplido sensacional para felicitar a alguien por resolver un problema complejo de manera limpia y profesional.</p>
  `,
  gotcha: "Antes de presionar 'Submit', recordá leer con calma la pregunta entera e identificar las pistas estructurales (comas, preposiciones, verbos precedentes). ¡Mucho éxito!",
  exercises: [
    {
      id: "u1_rev_1",
      type: "multiple-choice",
      question: "Which of the following is considered a low-level language that represents instructions as simple mnemonics?",
      options: ["Assembly language", "Machine code", "C++"],
      correctAnswer: 0,
      explanation: "Assembly es el lenguaje de bajo nivel que usa mnemónicos sencillos (ADD, MOV) antes de ser mapeado a binario puro."
    },
    {
      id: "u1_rev_2",
      type: "multiple-choice",
      question: "Choose the correct relative pronoun: 'Linus Torvalds, _________ created Linux, was born in Finland.'",
      options: ["that", "who", "which"],
      correctAnswer: 1,
      explanation: "Como es una cláusula explicativa (Non-defining, separada por comas) sobre una persona, no podemos usar 'that'; debemos usar 'who'."
    },
    {
      id: "u1_rev_3",
      type: "fill-in-the-blank",
      question: "Complete: 'A translator that halts execution at the very first syntax error is a(n) _________.'",
      correctAnswer: "interpreter",
      explanation: "El intérprete (interpreter) se detiene inmediatamente en la primera línea que contenga un error de sintaxis."
    },
    {
      id: "u1_rev_4",
      type: "multiple-choice",
      question: "Identify the syntactic function of 'translating' in: 'A compiler is a translating program.'",
      options: ["Gerund (Noun)", "Present Participle (Verb)", "Adjective"],
      correctAnswer: 2,
      explanation: "Modifica y describe directamente al sustantivo 'program' (programa traductor), de modo que actúa como un Adjetivo."
    },
    {
      id: "u1_rev_5",
      type: "multiple-choice",
      question: "Choose the correct modal: 'Developers _________ document public APIs. It is a mandatory company standard.'",
      options: ["must", "don't have to", "should"],
      correctAnswer: 0,
      explanation: "Dado que es un estándar mandatorio ('mandatory'), la opción correcta es 'must' (obligación absoluta)."
    },
    {
      id: "u1_rev_6",
      type: "multiple-choice",
      question: "Choose the correct modal: 'You _________ use semicolons in JavaScript, as they are mostly optional, but they represent a clean standard.'",
      options: ["mustn't", "don't have to", "should to"],
      correctAnswer: 1,
      explanation: "Como son opcionales, no hay obligación estricta de usarlos. Expresamos esta falta de necesidad con 'don't have to'."
    },
    {
      id: "u1_rev_7",
      type: "multiple-choice",
      question: "Choose the correct relative pronoun: 'The Rust compiler _________ we used to compile the backend is highly optimized.'",
      options: ["who", "whose", "that"],
      correctAnswer: 2,
      explanation: "Para referirnos a objetos (el compilador de Rust) en cláusulas especificativas (Defining), el pronombre correcto es 'that'."
    },
    {
      id: "u1_rev_8",
      type: "multiple-choice",
      question: "Identify the correct relative pronoun: 'C++, _________ was designed by Bjarne Stroustrup, is a highly performant compiled language.'",
      options: ["that", "which", "who"],
      correctAnswer: 1,
      explanation: "Es una cláusula explicativa (Non-defining, separada por comas). En estas cláusulas NUNCA se usa 'that' para objetos, se usa obligatoriamente 'which'."
    },
    {
      id: "u1_rev_9",
      type: "fill-in-the-blank",
      question: "A ___________ executes the instructions without generating a standalone binary machine file.",
      correctAnswer: "interpreter",
      explanation: "El intérprete (interpreter) lee y ejecuta las instrucciones en tiempo real sin producir un binario compilado independiente."
    },
    {
      id: "u1_rev_10",
      type: "multiple-choice",
      question: "Assembly is considered a ___________ language because it is heavily constrained by and close to the CPU architecture.",
      options: ["high-level", "low-level", "markup"],
      correctAnswer: 1,
      explanation: "Assembly es un lenguaje de bajo nivel (low-level), ya que mapea casi 1 a 1 con las instrucciones de la máquina."
    }
  ]
};
