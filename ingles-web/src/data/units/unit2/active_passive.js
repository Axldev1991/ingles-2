export const activePassiveData = {
  id: "u2_active_passive",
  title: "Passive Voice: Present Perfect & Future Perfect",
  explanation: `
    <h3>La Voz Pasiva en Tiempos Perfectos</h3>
    <p>Para focalizar la atención en la <strong>acción realizada o en el objeto receptor</strong> de la acción, en lugar de quién la ejecuta (o porque es obvio o desconocido), empleamos la voz pasiva.</p>
    
    <h4>1. Present Perfect Passive</h4>
    <p><strong>Fórmula:</strong> <code>have/has been + Past Participle</code></p>
    <ul>
      <li><strong>Active:</strong> <em>"The manager has sent the API documentation."</em></li>
      <li><strong>Passive:</strong> <em>"The API documentation <strong>has been sent</strong> (by the manager)."</em></li>
    </ul>

    <h4>2. Future Perfect Passive</h4>
    <p><strong>Fórmula:</strong> <code>will have been + Past Participle</code></p>
    <ul>
      <li><strong>Active:</strong> <em>"We will have deployed the system by Monday."</em></li>
      <li><strong>Passive:</strong> <em>"The system <strong>will have been deployed</strong> by Monday."</em></li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Slack & Daily Standups)</h4>
    <p>En ambientes ágiles corporativos, la voz pasiva en tiempos perfectos es clave para dar reportes de estatus objetivos, formales o escribir notificaciones/logs automáticos en los canales de Slack:</p>
    <blockquote>
      <strong>Telemetry System (Slack Bot):</strong> <em>"The critical buffer overflow vulnerability <strong>has been patched</strong> successfully."</em>
      <br><strong>Tech Lead (Slack):</strong> <em>"Great! By next Friday, the new release <strong>will have been deployed</strong> to the production servers."</em>
    </blockquote>
    <p><strong>💡 Tip:</strong> Al usar la voz pasiva (<em>"has been patched"</em>, <em>"will have been deployed"</em>), la atención se centra puramente en el LOG o el LOGRO técnico, sin importar quién apretó el botón de deploy.</p>
  `,
  gotcha: "¡Ojo! No confundas <code>has been translating</code> (Activa, Present Perfect Continuous) con <code>has been translated</code> (Pasiva, Present Perfect Simple). En la pasiva, el verbo principal está en participio pasado, no en -ing.",
  exercises: [
    {
      id: "u2_ap_1",
      type: "multiple-choice",
      question: "Convert to Passive: 'The developers have optimized the rendering engine.'",
      options: [
        "The rendering engine is optimized by the developers.",
        "The rendering engine has been optimized by the developers.",
        "The rendering engine has optimized by the developers."
      ],
      correctAnswer: 1,
      explanation: "El objeto ('rendering engine') pasa a sujeto. Usamos Present Perfect Passive: <code>has been optimized</code>."
    },
    {
      id: "u2_ap_2",
      type: "multiple-choice",
      question: "Convert to Passive: 'By tomorrow noon, the security team will have patched the critical exploit.'",
      options: [
        "By tomorrow noon, the critical exploit will be patched by the security team.",
        "By tomorrow noon, the critical exploit will have been patched by the security team.",
        "By tomorrow noon, the critical exploit has been patched by the security team."
      ],
      correctAnswer: 1,
      explanation: "Usamos Future Perfect Passive: <code>will have been patched</code>."
    },
    {
      id: "u2_ap_3",
      type: "multiple-choice",
      question: "Identify Active or Passive: 'The cloud databases have been synchronized successfully.'",
      options: [
        "Active (Present Perfect)",
        "Passive (Present Perfect)",
        "Passive (Future Perfect)"
      ],
      correctAnswer: 1,
      explanation: "Como usa la estructura <code>have been + Past Participle (synchronized)</code>, es Present Perfect en Voz Pasiva."
    },
    {
      id: "u2_ap_4",
      type: "fill-in-the-blank",
      question: "Complete the passive sentence: 'By the time you wake up, all servers __________ (restart).' Use Future Perfect Passive.",
      correctAnswer: "will have been restarted",
      explanation: "La estructura para Future Perfect Passive es <code>will have been + Past Participle</code>. Así, la respuesta correcta es: <code>will have been restarted</code>."
    }
  ]
};
