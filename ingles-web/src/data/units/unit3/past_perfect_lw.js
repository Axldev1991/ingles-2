export const pastPerfectLwData = {
  id: "u3_past_perfect_lw",
  title: "Language Work: Past Perfect Practice",
  explanation: `
    <h3>Práctica de Past Perfect del Booklet</h3>
    <p>El booklet incluye ejercicios de secuenciación temporal usando Past Perfect + Past Simple:</p>
    <ul>
      <li>La acción que ocurrió PRIMERO → <strong>Past Perfect</strong> (<code>had + p.p.</code>)</li>
      <li>La acción que ocurrió DESPUÉS → <strong>Past Simple</strong></li>
    </ul>
    <p>Conectores típicos: <em>before, after, by the time, when, already, just</em>.</p>

    <hr>
    <h4>💬 El Lado Humano (Sprint Retrospectives & Lessons Learned)</h4>
    <p>Cuando termina un sprint o se lanza un release importante, se suele tener una reunión de retrospectiva (<strong>Retro</strong>). En ella, el equipo analiza qué salió bien y qué salió mal (Root Cause Analysis). El Past Perfect es ideal para contar anécdotas y lecciones aprendidas con absoluta precisión temporal:</p>
    <blockquote>
      <strong>Developer:</strong> <em>"By the time we migrated the users database (Past Simple: Acción posterior), our marketing team <strong>had already sent</strong> a massive promotional email campaign (Past Perfect: Acción previa). That's why the server load skyrocketed so quickly! Next time, let's make sure the migration <strong>has been completed</strong> before we launch any marketing campaigns."</em>
    </blockquote>
    <p><strong>💡 Clave del Lado Humano:</strong>
      <ul>
        <li>El conector <code>By the time...</code> es extremadamente útil en la comunicación corporativa para marcar qué estado o acción ya se había concretado antes de que sucediera otro evento del proyecto.</li>
      </ul>
    </p>
  `,
  gotcha: "Si una oración empieza con 'Before...' o 'By the time...', la acción ANTERIOR va en Past Perfect y la posterior en Past Simple. <em>'Before the class started, the teacher <strong>had prepared</strong> the materials.'</em>",
  exercises: [
    {
      id: "u3_pp_lw1",
      type: "fill-in-the-blank",
      question: "PAST PERFECT — 'By the time the FRA opened in 1955, the government __________ (already/create) the UON in 1948.'",
      correctAnswer: "had already created",
      explanation: "La creación de la UON (1948) ocurrió ANTES de la apertura de la FRA (1955). Past Perfect: <code>had already created</code>."
    },
    {
      id: "u3_pp_lw2",
      type: "fill-in-the-blank",
      question: "PAST PERFECT — 'When the military coup happened, classes __________ (already/begin) at the FRA.'",
      correctAnswer: "had already begun",
      explanation: "Las clases ya habían comenzado (acción anterior) cuando el golpe ocurrió (acción posterior). Past Perfect: <code>had already begun</code>."
    },
    {
      id: "u3_pp_lw3",
      type: "multiple-choice",
      question: "PAST PERFECT — 'After the students __________ (collect) enough signatures, the congress debated the new law.'",
      options: ["collected", "had collected", "have collected"],
      correctAnswer: 1,
      explanation: "Recolectar firmas ocurrió ANTES de que el congreso debatiera. Después de 'After', la primera acción va en Past Perfect: <code>had collected</code>."
    },
    {
      id: "u3_pp_lw4",
      type: "multiple-choice",
      question: "PAST PERFECT — Choose the correct sentence:",
      options: [
        "The engineer finished the project before the deadline had arrived.",
        "The engineer had finished the project before the deadline arrived.",
        "The engineer had finished the project before the deadline had arrived."
      ],
      correctAnswer: 1,
      explanation: "Terminar el proyecto (acción anterior) → Past Perfect: 'had finished'. La llegada del deadline (acción posterior) → Past Simple: 'arrived'. Solo la acción más antigua lleva Past Perfect."
    },
    {
      id: "u3_pp_lw5",
      type: "fill-in-the-blank",
      question: "PAST PERFECT — 'The programmer __________ (never/work) with Java before she joined the gaming company.'",
      correctAnswer: "had never worked",
      explanation: "No haber trabajado con Java (experiencia anterior) antes de unirse a la empresa (Past Simple 'joined'). Past Perfect: <code>had never worked</code>."
    },
    {
      id: "u3_pp_lw6",
      type: "multiple-choice",
      question: "PAST PERFECT — 'When I arrived at the meeting, the presentation __________ (already/start).'",
      options: ["already started", "had already started", "has already started"],
      correctAnswer: 1,
      explanation: "Mi llegada (Past Simple: 'arrived') fue posterior al inicio de la presentación. Past Perfect: <code>had already started</code>."
    }
  ]
};
