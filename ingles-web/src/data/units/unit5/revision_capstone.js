export const revisionCapstoneData = {
  id: "u5_revision_capstone",
  title: "Unit 5 Capstone: Technical Reports",
  explanation: `
    <h3>Repaso de la Unidad 5: Reportes Técnicos y Flujo Lógico</h3>
    <p>En esta sección de repaso integramos los componentes clave de la Unidad 5:</p>
    <ul>
      <li>Estructuración de un reporte técnico formal (Introduction, Comparative Analysis, Recommendations, Conclusion).</li>
      <li>Uso de conectores lógicos para cohesionar explicaciones (addition, contrast, cause/effect).</li>
      <li>Voz Pasiva avanzada para reportar hechos sin asignar culpas personales (blameless post-mortem).</li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Presenting Findings to Managers)</h4>
    <p>Al presentar un reporte técnico a gerentes o directores, debés combinar la objetividad de la Voz Pasiva con la claridad de los conectores de causa y efecto:</p>
    <blockquote>
      <strong>You:</strong> <em>"The testing was completed successfully. <strong>Therefore</strong>, we recommend the deployment of the new wireless network infrastructure to improve capacity."</em>
    </blockquote>
  `,
  gotcha: "¡Atención! En reportes técnicos formales, evita usar contracciones como 'wanna' o 'gonna' y frases informales.",
  exercises: [
    {
      id: "u5_cap_ex1",
      type: "multiple-choice",
      question: "Which of the following sentences uses a formal blameless passive voice suitable for a technical report?",
      options: [
        "natasha set up the passwords incorrectly.",
        "The passwords were set up incorrectly.",
        "Rudy and Mike didn't clean the equipment."
      ],
      correctAnswer: 1,
      explanation: "La segunda oración enfoca el error en el sistema sin culpar a nadie directamente (blameless)."
    },
    {
      id: "u5_cap_ex2",
      type: "fill-in-the-blank",
      question: "Choose the correct modal passive form: All network access __________ (must/monitor) to ensure cybersecurity compliance.",
      correctAnswer: "must be monitored",
      explanation: "Voz pasiva con modal must: must + be + participio (monitored)."
    }
  ]
};
