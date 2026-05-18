export const languageWorkData = {
  id: "u2_language_work",
  title: "Language Work: Perfect Tenses Practice",
  explanation: `
    <h3>Práctica de Tiempos Perfectos del Booklet</h3>
    <p>Este tema recoge los ejercicios de Language Work del booklet para practicar la elección correcta entre:</p>
    <ul>
      <li><strong>Present Perfect Continuous</strong> (<code>have/has been + -ing</code>): acción en progreso continuo desde el pasado hasta ahora.</li>
      <li><strong>Future Perfect</strong> (<code>will have + p.p.</code>): acción completada antes de un punto futuro.</li>
      <li><strong>Present Perfect Simple</strong> (<code>have/has + p.p.</code>): acción completada con resultado presente.</li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Sprint Reviews & Retrospectives)</h4>
    <p>La distinción entre el Present Perfect Simple, Present Perfect Continuous y Future Perfect es vital cuando tenés que explicarle a tu Project Manager qué hiciste, en qué estuviste perdiendo el tiempo (literalmente) y cuándo vas a terminar:</p>
    <blockquote>
      <strong>PM:</strong> <em>"Axel, could you summarize your progress for this sprint?"</em>
      <br><strong>Dev:</strong> <em>"Sure! I <strong>have written</strong> three API endpoints so far (Simple: Resultado cuantificable). However, I <strong>have been debugging</strong> a tricky race condition in the auth service since Tuesday (Continuous: Duración, en qué estuviste gastando tiempo). Don't worry though, by Friday morning I <strong>will have completed</strong> the full integration (Future Perfect: Hito futuro exacto)."</em>
    </blockquote>
    <p><strong>💡 Clave para brillar:</strong>
      <ul>
        <li>Usar el <strong>Present Perfect Simple</strong> para los logros concretos ya cerrados (ej: <em>"I have written three endpoints"</em>).</li>
        <li>Usar el <strong>Present Perfect Continuous</strong> para justificar por qué una tarea te está llevando días (ej: <em>"I have been debugging..."</em>).</li>
        <li>Usar el <strong>Future Perfect</strong> para dar garantías de entrega concretas de cara a la fecha de release (ej: <em>"I will have completed..."</em>).</li>
      </ul>
    </p>
  `,
  gotcha: "El Present Perfect Continuous enfatiza la DURACIÓN del proceso; el Present Perfect Simple enfatiza el RESULTADO. <em>'I have been writing code for 3 hours'</em> (duración) vs <em>'I have written 200 lines'</em> (resultado).",
  exercises: [
    {
      id: "u2_lw_1",
      type: "fill-in-the-blank",
      question: "LANGUAGE WORK — 'Scientists __________ (experiment) with virtual assistants for years now.' Use the correct tense.",
      correctAnswer: "have been experimenting",
      explanation: "La acción empezó en el pasado y continúa ahora ('for years now'). Usamos Present Perfect Continuous: <code>have been experimenting</code>."
    },
    {
      id: "u2_lw_2",
      type: "fill-in-the-blank",
      question: "LANGUAGE WORK — 'By 2030, engineers __________ (develop) fully autonomous customer service AI.' Use the correct tense.",
      correctAnswer: "will have developed",
      explanation: "'By 2030' marca un límite futuro. Usamos Future Perfect: <code>will have developed</code>."
    },
    {
      id: "u2_lw_3",
      type: "multiple-choice",
      question: "LANGUAGE WORK — 'The IT department __________ (work) on the migration since March.'",
      options: ["has been working", "will have worked", "worked"],
      correctAnswer: 0,
      explanation: "'Since March' indica un punto de inicio en el pasado con la acción continuando. Present Perfect Continuous: <code>has been working</code>."
    },
    {
      id: "u2_lw_4",
      type: "multiple-choice",
      question: "LANGUAGE WORK — 'By the time you read this, I __________ (already/finish) the report.'",
      options: ["have already finished", "will have already finished", "am finishing"],
      correctAnswer: 1,
      explanation: "'By the time...' establece un hito futuro. Future Perfect: <code>will have already finished</code>."
    },
    {
      id: "u2_lw_5",
      type: "multiple-choice",
      question: "LANGUAGE WORK — 'She __________ (learn) Python for six months and can already build APIs.'",
      options: ["has been learning", "will have learned", "learned"],
      correctAnswer: 0,
      explanation: "'For six months' con resultado presente visible. Present Perfect Continuous: <code>has been learning</code>."
    },
    {
      id: "u2_lw_6",
      type: "fill-in-the-blank",
      question: "LANGUAGE WORK — 'By next semester, the university __________ (introduce) three new IT courses.'",
      correctAnswer: "will have introduced",
      explanation: "'By next semester' = hito futuro. Future Perfect: <code>will have introduced</code>."
    },
    {
      id: "u2_lw_7",
      type: "multiple-choice",
      question: "LANGUAGE WORK — 'The server __________ (crash) three times this week. We need to investigate.'",
      options: ["has been crashing", "has crashed", "will have crashed"],
      correctAnswer: 1,
      explanation: "Aquí enfatizamos el RESULTADO (tres caídas concretas), no la duración. Present Perfect Simple: <code>has crashed</code>."
    },
    {
      id: "u2_lw_8",
      type: "multiple-choice",
      question: "LANGUAGE WORK — Choose the difference: 'I have read 3 books this month' vs 'I have been reading a lot lately.'",
      options: [
        "Both are Present Perfect Simple.",
        "The first emphasizes the result (quantity), the second emphasizes the duration/process.",
        "The first is past, the second is present."
      ],
      correctAnswer: 1,
      explanation: "Present Perfect Simple ('have read 3 books') enfatiza el resultado cuantificable. Present Perfect Continuous ('have been reading') enfatiza el proceso continuo. Esta distinción es CLAVE para el examen."
    }
  ]
};
