export const revisionCapstoneData = {
  id: "u2_revision_capstone",
  title: "🏁 Unit 2: Revision Arena",
  explanation: `
    <h3>Arena de Revisión Final - Unit 2</h3>
    <p>¡Felicidades! Llegaste a la arena de revisión de la Unidad 2. Acá consolidamos todos los conocimientos clave antes del parcial:</p>
    <ul>
      <li>Vocabulario de Gaming e IA Conversacional (yelling, pacify, RTS, MMORPG, FPS).</li>
      <li>Tiempos perfectos (Present Perfect Continuous y Future Perfect).</li>
      <li>Voz Pasiva en tiempos perfectos (have/has been + p.p., will have been + p.p.).</li>
      <li>Word Building completo: Noun, Verb, Adjective, Adverb.</li>
    </ul>
    <p>Contiene <strong>10 preguntas del examen oficial</strong> para blindar tus conocimientos.</p>

    <hr>
    <h4>💬 El Lado Humano (The Senior Perspective - Unit 2 Capstone)</h4>
    <p>La Unidad 2 conecta dos mundos que parecen distantes pero comparten la misma base lingüística: <strong>Gaming</strong> e <strong>IA Conversacional de Soporte</strong>. En tu día a día técnico:</p>
    <blockquote>
      <strong>Product Owner:</strong> <em>"Why are we investing in a specialized chatbot for customer support?"</em>
      <br><strong>Lead Architect:</strong> <em>"Because we need an <strong>empathetic</strong> agent. Customers are <strong>yelling</strong> when the database fails. A standard auto-responder can't <strong>pacify</strong> them. By deploying this conversational AI, we <strong>will have resolved</strong> 80% of level-1 support complaints automatically before next quarter."</em>
    </blockquote>
    <p><strong>💡 Clave para brillar:</strong>
      <ul>
        <li>Haber entendido los matices de la <strong>voz pasiva</strong> para reportar incidentes sin buscar culpables (<em>"the DB was crashed"</em> -> <em>"the DB has been recovered"</em>).</li>
        <li>Tener la flexibilidad léxica de cambiar de sustantivos a adjetivos o adverbios (<em>difference</em> -> <em>different</em> -> <em>differently</em>) para explicar arquitecturas y convencer stakeholders.</li>
      </ul>
    </p>
  `,
  gotcha: "Leé atentamente cada consigna. Pistas como 'by next week' (Future Perfect) o 'since last month' (Present Perfect Continuous) te darán la respuesta exacta.",
  exercises: [
    {
      id: "u2_rev_1",
      type: "multiple-choice",
      question: "Which of the following describes a system designed to calm down an angry customer who is yelling?",
      options: [
        "A system designed to pacify the customer.",
        "A system designed to differ the customer.",
        "A system designed to ignore the customer."
      ],
      correctAnswer: 0,
      explanation: "El término del booklet es 'pacify' (calmar o apaciguar)."
    },
    {
      id: "u2_rev_2",
      type: "multiple-choice",
      question: "Identify the correct verb tense: 'The infrastructure department _________ (monitor) the web traffic since the server started failing.'",
      options: [
        "has been monitoring",
        "will have monitored",
        "monitors"
      ],
      correctAnswer: 0,
      explanation: "Usa Present Perfect Continuous porque la acción inició en el pasado y continúa hoy ('since... started failing')."
    },
    {
      id: "u2_rev_3",
      type: "fill-in-the-blank",
      question: "Complete the Future Perfect sentence: 'By the time the project ends, our team __________ (implement) three design patterns.'",
      correctAnswer: "will have implemented",
      explanation: "'By the time...' indica Future Perfect Activo: <code>will have implemented</code>."
    },
    {
      id: "u2_rev_4",
      type: "multiple-choice",
      question: "Convert to Passive: 'The security specialist will have updated the firewall policies by Monday.'",
      options: [
        "The firewall policies will have been updated by Monday.",
        "The firewall policies will have updated by Monday.",
        "The firewall policies have been updated by Monday."
      ],
      correctAnswer: 0,
      explanation: "El Future Perfect en pasiva usa la estructura <code>will have been + Past Participle</code>."
    },
    {
      id: "u2_rev_5",
      type: "multiple-choice",
      question: "What is the correct word building category for 'empathize'?",
      options: ["Noun", "Verb", "Adjective", "Adverb"],
      correctAnswer: 1,
      explanation: "'Empathize' (empatizar) es el Verbo (Verb)."
    },
    {
      id: "u2_rev_6",
      type: "multiple-choice",
      question: "Complete: 'We must approach customer complaints __________ (empathy) if we want to retain them.'",
      options: ["empathize", "empathetic", "empathetically"],
      correctAnswer: 2,
      explanation: "Buscamos modificar la forma de realizar la acción 'approach' (verbo). Usamos el Adverbio: 'empathetically'."
    },
    {
      id: "u2_rev_7",
      type: "multiple-choice",
      question: "Choose the correct passive form: 'Several test suites __________ (run) by the CI/CD pipeline since the push.'",
      options: [
        "have been run",
        "has been run",
        "will have been run"
      ],
      correctAnswer: 0,
      explanation: "Sujeto plural 'test suites' + Present Perfect Passive = <code>have been run</code>."
    },
    {
      id: "u2_rev_8",
      type: "multiple-choice",
      question: "Identify the correct genre: A game that requires high reflexes, precise crosshair aim, and spatial awareness in first-person view.",
      options: ["RTS", "MMORPG", "FPS"],
      correctAnswer: 2,
      explanation: "Se trata de un FPS (First-Person Shooter)."
    },
    {
      id: "u2_rev_9",
      type: "fill-in-the-blank",
      question: "Complete: 'By next year, the company _________ (automate) all level-1 support lines.' Use Active Future Perfect.",
      correctAnswer: "will have automated",
      explanation: "El sujeto es 'the company' (activo) + Future Perfect = <code>will have automated</code>."
    },
    {
      id: "u2_rev_10",
      type: "multiple-choice",
      question: "What is the difference between 'difference' and 'differ'?",
      options: [
        "'difference' is a verb, 'differ' is a noun.",
        "'difference' is a noun, 'differ' is a verb.",
        "Both are adjectives."
      ],
      correctAnswer: 1,
      explanation: "'Difference' es el Sustantivo (Noun), mientras que 'differ' es el Verbo (Verb)."
    }
  ]
};
