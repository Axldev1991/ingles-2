export const revisionCapstoneData = {
  id: "u4_revision_capstone",
  title: "Unit 4 Capstone: Network Administration",
  explanation: `
    <h3>Repaso de la Unidad 4: Redes y Administración</h3>
    <p>En esta sección de repaso unificamos los conceptos clave de la unidad:</p>
    <ul>
      <li>Diferencias operativas de videoconferencias (Dedicated vs. Desktop).</li>
      <li>Uso correcto de condicionales en entornos IT (Tipo 0 para hechos invariables, Tipo 1 para planes, Tipo 2 para hipótesis de arquitectura y Tipo 3 para análisis post-mortem).</li>
      <li>Conectividad LAN cableada o inalámbrica.</li>
      <li>Uso correcto de phrasal verbs clave para soporte técnico e infraestructura.</li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (The Senior Admin Retrospective)</h4>
    <p>Un administrador de redes veterano sabe que la comunicación efectiva durante un incidente salva vidas. Explicar los condicionales o lo que está ocurriendo de manera estructurada reduce la fricción en el equipo de guardia:</p>
    <blockquote>
      <strong>NetAdmin:</strong> <em>"If we don't switch off the secondary node now, the traffic loop will continue to degrade the LAN bandwidth."</em>
    </blockquote>
  `,
  gotcha: "¡Cuidado en los exámenes! No mezcles las cláusulas condicionales. No se puede poner 'will' o 'would' inmediatamente después de la palabra 'if'.",
  exercises: [
    {
      id: "u4_cap_ex1",
      type: "multiple-choice",
      question: "Which conditional type would you use to express a logical cause-effect fact, such as 'If you heat ice, it melts'?",
      options: ["Type 1", "Type 2", "Type 0"],
      correctAnswer: 2,
      explanation: "El condicional tipo 0 expresa verdades universales y hechos científicos."
    },
    {
      id: "u4_cap_ex2",
      type: "fill-in-the-blank",
      question: "Complete the Phrasal Verb: Make sure to plug the network card _________ the slot before powering on.",
      correctAnswer: "into",
      explanation: "Plug into significa conectar o enchufar un componente en su receptáculo."
    },
    {
      id: "u4_cap_ex3",
      type: "multiple-choice",
      question: "If we __________ (have) more budget last month, we would have upgraded the MCU. (Type 3)",
      options: ["had had", "would have", "had"],
      correctAnswer: 0,
      explanation: "El Tipo 3 requiere Past Perfect en la cláusula del 'if', lo cual da 'had had' (auxiliar had + participio de have)."
    }
  ]
};
