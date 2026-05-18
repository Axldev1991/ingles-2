export const passiveVoiceLwData = {
  id: "u3_passive_voice_lw",
  title: "Language Work: Active vs Passive Classification",
  explanation: `
    <h3>Clasificación Activa / Pasiva</h3>
    <p>El booklet incluye ejercicios donde debés identificar si una oración está en voz activa o pasiva, y luego reescribirla en la forma contraria:</p>
    <ul>
      <li><strong>Activa</strong>: El sujeto realiza la acción. <em>'Engineers designed the bridge.'</em></li>
      <li><strong>Pasiva</strong>: El sujeto recibe la acción. <em>'The bridge was designed by engineers.'</em></li>
    </ul>
    <p>Para identificarla, buscá la estructura <code>to be + past participle</code> en la oración. Si la tiene, es pasiva.</p>

    <hr>
    <h4>💬 El Lado Humano (Pull Request Descriptions & System Design Docs)</h4>
    <p>Cuando escribís la descripción de tus **Pull Requests (PRs)** o redactás documentación de diseño (System Design Docs), saber clasificar y usar la voz activa o pasiva te ayuda a estructurar explicaciones claras y súper profesionales:</p>
    <blockquote>
      <strong>Dev (Writing in a PR):</strong> <em>"This PR implements the caching layer. In the active flow, the cache manager stores requests in Redis. In the automated background flow, stale cache keys <strong>are evicted</strong> automatically by a cron job every hour. Finally, an alert <strong>will be triggered</strong> if the eviction process fails."</em>
    </blockquote>
    <p><strong>💡 Cuándo usar cada una:</strong>
      <ul>
        <li>Usás <strong>Activa</strong> cuando querés destacar el **componente controlador** que hace la acción (ej: <em>"the cache manager stores..."</em>).</li>
        <li>Usás <strong>Pasiva</strong> cuando el foco está puramente en **lo que le pasa al dato** y no te importa el motor de fondo (ej: <em>"stale cache keys are evicted..."</em> o <em>"an alert will be triggered..."</em>).</li>
      </ul>
    </p>
  `,
  gotcha: "Para saber si es pasiva, buscá <code>am/is/are/was/were + past participle</code>. Si el sujeto HACE la acción → activa. Si el sujeto RECIBE la acción → pasiva.",
  exercises: [
    {
      id: "u3_class_1",
      type: "multiple-choice",
      question: "CLASSIFY — 'The law was signed by President Perón in 1948.' Is this sentence Active or Passive?",
      options: ["Active", "Passive"],
      correctAnswer: 1,
      explanation: "La estructura 'was signed' (was + past participle) indica voz pasiva. El sujeto 'The law' recibe la acción."
    },
    {
      id: "u3_class_2",
      type: "multiple-choice",
      question: "CLASSIFY — 'Students fought for the university's autonomy.' Is this sentence Active or Passive?",
      options: ["Active", "Passive"],
      correctAnswer: 0,
      explanation: "El sujeto 'Students' realiza la acción directamente ('fought'). No hay estructura 'to be + p.p.', por lo tanto es voz activa."
    },
    {
      id: "u3_class_3",
      type: "multiple-choice",
      question: "CLASSIFY — 'The new campus will be inaugurated next year.' Is this sentence Active or Passive?",
      options: ["Active", "Passive"],
      correctAnswer: 1,
      explanation: "La estructura 'will be inaugurated' (will be + past participle) indica voz pasiva en futuro simple."
    },
    {
      id: "u3_class_4",
      type: "multiple-choice",
      question: "CLASSIFY — 'The FAGUT organized protests against the military intervention.' Is this sentence Active or Passive?",
      options: ["Active", "Passive"],
      correctAnswer: 0,
      explanation: "El sujeto 'The FAGUT' realiza la acción ('organized'). Es voz activa."
    },
    {
      id: "u3_rewrite_1",
      type: "fill-in-the-blank",
      question: "REWRITE — Active: 'The military government dissolved the university board.' → Passive: The university board _____________ by the military government.",
      correctAnswer: "was dissolved",
      explanation: "'dissolved' está en pasado simple activo y 'board' es singular. Pasiva: <code>was dissolved</code>."
    },
    {
      id: "u3_rewrite_2",
      type: "fill-in-the-blank",
      question: "REWRITE — Active: 'The congress approves new education laws every year.' → Passive: New education laws _____________ by the congress every year.",
      correctAnswer: "are approved",
      explanation: "'approves' está en presente simple activo y 'laws' es plural. Pasiva: <code>are approved</code>."
    },
    {
      id: "u3_rewrite_3",
      type: "fill-in-the-blank",
      question: "REWRITE — Active: 'The university will build a new research center.' → Passive: A new research center _____________ by the university.",
      correctAnswer: "will be built",
      explanation: "'will build' está en futuro simple activo. Pasiva: <code>will be built</code>."
    },
    {
      id: "u3_rewrite_4",
      type: "fill-in-the-blank",
      question: "REWRITE — Active: 'Teachers use interactive whiteboards in every classroom.' → Passive: Interactive whiteboards _____________ by teachers in every classroom.",
      correctAnswer: "are used",
      explanation: "'use' está en presente simple activo y 'whiteboards' es plural. Pasiva: <code>are used</code>."
    }
  ]
};
