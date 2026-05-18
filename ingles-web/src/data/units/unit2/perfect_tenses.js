export const perfectTensesData = {
  id: "u2_perfect_tenses",
  title: "Perfect Tenses: Present Perfect Continuous & Future Perfect",
  explanation: `
    <h3>Tiempos Verbales de Secuencia</h3>
    <p>Para hablar de hitos temporales y procesos de desarrollo de larga duración, usamos estructuras perfectas:</p>
    
    <h4>1. Present Perfect Continuous - <code>have/has been + -ing</code></h4>
    <p>Expresa una acción que empezó en el pasado, continuó durante un período y <strong>sigue ocurriendo en el presente</strong> o tiene efectos inmediatos.</p>
    <ul>
      <li><em>"Our team <strong>has been developing</strong> this RPG for three years."</em> (Llevamos 3 años desarrollando este RPG y seguimos haciéndolo).</li>
      <li><strong>Claves temporales:</strong> *for* (durante), *since* (desde), *recently*.</li>
    </ul>

    <h4>2. Future Perfect - <code>will have + Past Participle</code></h4>
    <p>Se usa para expresar una acción que <strong>estará completamente terminada</strong> antes de un punto de referencia en el futuro.</p>
    <ul>
      <li><em>"By next December, the AI startup <strong>will have launched</strong> its new chat model."</em> (Para antes de diciembre, la acción de lanzar el modelo ya habrá concluido).</li>
      <li><strong>Claves temporales:</strong> *By next year* (para el próximo año), *by the time...*</li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Daily Standups & Sprint Planning)</h4>
    <p>En el día a día del desarrollo de software, la combinación de estos dos tiempos es la moneda corriente en cualquier reunión de sincronización diaria (<strong>Daily Standup</strong>):</p>
    <blockquote>
      <strong>Scrum Master:</strong> <em>"Axel, what's your status with the new payment gateway?"</em>
      <br><strong>Dev:</strong> <em>"Well, I <strong>have been refactoring</strong> the database schemas since Monday to support atomic transactions. It's a complex task, but I <strong>will have finished</strong> the main integration by tomorrow afternoon."</em>
    </blockquote>
    <p><strong>💡 Clave del éxito:</strong>
      <ul>
        <li>Usás <code>have been refactoring</code> para mostrar el <strong>progreso continuo y esfuerzo acumulado</strong> en el que venís invirtiendo tiempo.</li>
        <li>Usás <code>will have finished</code> para dar un <strong>compromiso firme de finalización</strong> con respecto a una fecha límite futura (mañana a la tarde). ¡Super profesional!</li>
      </ul>
    </p>
  `,
  gotcha: "El **Present Perfect Continuous** enfatiza la *duración y continuidad* de la actividad en progreso, mientras que el **Present Perfect Simple** (have + p.p.) se enfoca en el *resultado final* o la cantidad de veces completadas.",
  exercises: [
    {
      id: "u2_perf_1",
      type: "multiple-choice",
      question: "Choose the correct structure: 'Our game development team _________ (work) on the multiplayer network synchronization since last January.'",
      options: [
        "has been working",
        "will have worked",
        "had worked"
      ],
      correctAnswer: 0,
      explanation: "Como la acción comenzó en el pasado, continúa en el presente y tiene el indicador 'since last January', el tiempo correcto es el Present Perfect Continuous: 'has been working'."
    },
    {
      id: "u2_perf_2",
      type: "multiple-choice",
      question: "Complete the milestone statement: 'By the end of this month, the software architect _________ (finalize) the hexagonal architecture specs.'",
      options: [
        "has finalized",
        "will have finalized",
        "is finalizing"
      ],
      correctAnswer: 1,
      explanation: "El indicador 'By the end of this month' marca un límite en el futuro para una acción completada. Por ende, usamos Future Perfect: 'will have finalized'."
    }
  ]
};
