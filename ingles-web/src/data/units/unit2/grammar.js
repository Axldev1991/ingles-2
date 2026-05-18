export const grammarData = {
  id: "u2_grammar",
  title: "Grammar Practice: Active vs Passive in Context",
  explanation: `
    <h3>Práctica Gramatical del Booklet</h3>
    <p>Este tema contiene ejercicios para discernir si en el contexto técnico corresponde usar <strong>Voz Activa</strong> o <strong>Voz Pasiva</strong> en tiempos perfectos, prestando especial atención a la concordancia de números (singular/plural).</p>
  `,
  gotcha: "Buscá siempre el sujeto real: si el sujeto realiza la acción, usás Activa. Si el sujeto recibe el efecto de la acción, usás Pasiva. <em>'The servers have updated...'</em> (incorrecto si se actualizaron a sí mismos sin permiso, debería ser <em>'The servers have been updated...'</em>).",
  exercises: [
    {
      id: "u2_g_1",
      type: "multiple-choice",
      question: "GRAMMAR — 'Many new features __________ (implement) in the beta version since last week.'",
      options: [
        "have been implemented",
        "have implemented",
        "has been implemented"
      ],
      correctAnswer: 0,
      explanation: "El sujeto es 'Many new features' (plural) y reciben la acción. Present Perfect Passive en plural: <code>have been implemented</code>."
    },
    {
      id: "u2_g_2",
      type: "multiple-choice",
      question: "GRAMMAR — 'By 2026, the company __________ (train) all operators to use AI.'",
      options: [
        "will have trained",
        "will have been trained",
        "has trained"
      ],
      correctAnswer: 0,
      explanation: "El sujeto es 'the company' (realiza la acción de entrenar a los operadores). Usamos Voz Activa en Future Perfect: <code>will have trained</code>."
    },
    {
      id: "u2_g_3",
      type: "multiple-choice",
      question: "GRAMMAR — 'The system error __________ (detect) by the automated monitoring service before it affected users.'",
      options: [
        "had been detected",
        "will have been detected",
        "has detected"
      ],
      correctAnswer: 0,
      explanation: "Es una acción en el pasado anterior a otra ('before it affected...'). Por ende, usamos Past Perfect Passive: <code>had been detected</code>."
    },
    {
      id: "u2_g_4",
      type: "fill-in-the-blank",
      question: "GRAMMAR — 'A lot of data __________ (transmit) since the server was upgraded.' Use Present Perfect Passive.",
      correctAnswer: "has been transmitted",
      explanation: "'Data' se trata gramaticalmente como incontable en singular en este tipo de pruebas académicas standard del booklet. Present Perfect Passive: <code>has been transmitted</code>."
    },
    {
      id: "u2_g_5",
      type: "multiple-choice",
      question: "GRAMMAR — 'By next month, the network infrastructure __________ (upgrade) completely.'",
      options: [
        "will have been upgraded",
        "will have upgraded",
        "has been upgraded"
      ],
      correctAnswer: 0,
      explanation: "El sujeto 'infrastructure' recibe la acción en el futuro. Future Perfect Passive: <code>will have been upgraded</code>."
    },
    {
      id: "u2_g_6",
      type: "multiple-choice",
      question: "GRAMMAR — 'The project leader __________ (just/approve) the budget.'",
      options: [
        "has just approved",
        "has just been approved",
        "will have just approved"
      ],
      correctAnswer: 0,
      explanation: "El líder de proyecto realiza la acción. Present Perfect Simple en Voz Activa: <code>has just approved</code>."
    },
    {
      id: "u2_g_7",
      type: "multiple-choice",
      question: "GRAMMAR — 'All security protocols __________ (review) by the CISO already.'",
      options: [
        "have been reviewed",
        "has been reviewed",
        "will have reviewed"
      ],
      correctAnswer: 0,
      explanation: "El sujeto 'protocols' (plural) recibe la acción. Present Perfect Passive: <code>have been reviewed</code>."
    },
    {
      id: "u2_g_8",
      type: "fill-in-the-blank",
      question: "GRAMMAR — 'By next Friday, the pull request __________ (merge) into the main branch by our tech lead.'",
      correctAnswer: "will have been merged",
      explanation: "Límite futuro ('By next Friday') con sujeto receptor. Future Perfect Passive: <code>will have been merged</code>."
    }
  ]
};
