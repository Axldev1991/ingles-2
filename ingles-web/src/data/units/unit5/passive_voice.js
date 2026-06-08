export const passiveVoiceData = {
  id: "u5_passive_voice",
  title: "Passive Voice in IT Context",
  explanation: `
    <h3>La Voz Pasiva en la Ingeniería</h3>
    <p>La voz pasiva se utiliza cuando el foco de la oración es la acción y su receptor, en lugar de quién la ejecuta. Es muy común en especificaciones de requisitos, reportes de incidentes y artículos científicos.</p>
    
    <h4>Estructura General:</h4>
    <p><strong>Objeto + Verbo 'to be' (en el tiempo correcto) + Verbo Principal en Participio Pasivo (3ra columna)</strong></p>
    
    <ul>
      <li><strong>Present Continuous:</strong> is/are being + past participle.
        <br><em>Example:</em> A new firewall <strong>is being configured</strong>.
      </li>
      <li><strong>Past Continuous:</strong> was/were being + past participle.
        <br><em>Example:</em> The server <strong>was being backed up</strong> when the crash happened.
      </li>
      <li><strong>Present Perfect:</strong> has/have been + past participle.
        <br><em>Example:</em> Several bugs <strong>have been fixed</strong>.
      </li>
      <li><strong>Past Perfect:</strong> had been + past participle.
        <br><em>Example:</em> The malware <strong>had been removed</strong>.
      </li>
      <li><strong>Modal Passives:</strong> modal + be + past participle.
        <br><em>Example:</em> Security policies <strong>must be updated</strong>.
      </li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Blameless Post-Mortems)</h4>
    <p>En la cultura DevOps y Agile, los análisis de incidentes (Post-Mortems) deben ser **blameless** (sin buscar culpables). La Voz Pasiva es el mejor aliado gramatical del ingeniero para reportar errores enfocándose en el sistema y no en señalar con el dedo a un compañero:</p>
    <blockquote>
      <strong>Mal (Activa):</strong> <em>"Axel forgot to run the migration script, so he corrupted the production database."</em>
      <br><strong>Bien (Pasiva):</strong> <em>"The migration script <strong>was not executed</strong> prior to deployment, which caused the database <strong>to be corrupted</strong>."</em>
    </blockquote>
  `,
  gotcha: "¡Atención! No confundas 'being' (para tiempos continuos, ej. 'is being repaired') con 'been' (para tiempos perfectos, ej. 'has been repaired').",
  exercises: [
    {
      id: "u5_pas_ex1",
      type: "fill-in-the-blank",
      question: "Present Continuous: A new security system __________ (install) in the company's network right now. (Use contraction if possible, otherwise full form)",
      correctAnswer: "is being installed",
      explanation: "Present Continuous en voz pasiva: is/are + being + participio."
    },
    {
      id: "u5_pas_ex2",
      type: "fill-in-the-blank",
      question: "Past Continuous: A critical update __________ (apply) to the system when the power went out. (affirmative)",
      correctAnswer: "was being applied",
      explanation: "El evento estaba ocurriendo de forma continua en el pasado: was + being + applied."
    },
    {
      id: "u5_pas_ex3",
      type: "fill-in-the-blank",
      question: "Present Perfect: Several security measures __________ (implement) in the last few months.",
      correctAnswer: "have been implemented",
      explanation: "Para plural (security measures) en Present Perfect usamos: have + been + implemented."
    },
    {
      id: "u5_pas_ex4",
      type: "fill-in-the-blank",
      question: "Past Perfect: By the time the IT team arrived, the malware __________ (remove) from the system.",
      correctAnswer: "had been removed",
      explanation: "Acción completada antes de otra acción en el pasado: had + been + removed."
    },
    {
      id: "u5_pas_ex5",
      type: "fill-in-the-blank",
      question: "Modal Verbs: Stronger passwords __________ (should/use) to prevent hacking attempts.",
      correctAnswer: "should be used",
      explanation: "Voz pasiva con modales: modal (should) + be + participio (used)."
    }
  ]
};
