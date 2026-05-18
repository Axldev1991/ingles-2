export const readingData = {
  id: "u2_reading_comprehension",
  title: "Reading: Call Centres & Conversational AI",
  explanation: `
    <h3>Texto de comprensión: Call Centres</h3>
    <p>Este tema evalúa tu comprensión del texto del booklet sobre call centres y la integración de IA conversacional:</p>
    <ul>
      <li>Los <strong>call centres</strong> son departamentos que manejan llamadas de clientes (ventas, soporte técnico, reclamos).</li>
      <li>Un operador puede tener que <strong>pacify</strong> (calmar) a un cliente enojado que está <strong>yelling</strong> (gritando).</li>
      <li>La IA conversacional se está integrando para automatizar respuestas de <strong>level-1 support</strong>.</li>
      <li>Los bots deben ser <strong>empathetic</strong> (empáticos) para mejorar la experiencia del usuario.</li>
      <li>Los videojuegos se clasifican en géneros: <strong>FPS</strong>, <strong>MMORPG</strong>, <strong>RTS</strong>.</li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Handling System Outages & Service-Level Agreements)</h4>
    <p>En el mundo real del software (especialmente en empresas SaaS o de videojuegos multijugador masivos), cuando hay una caída de servicio (<strong>outage</strong>), los canales de soporte explotan. Todo el equipo de desarrollo y soporte entra en "War Room" para solucionar la crisis y hablar con los clientes alterados:</p>
    <blockquote>
      <strong>Customer Support Lead:</strong> <em>"Guys, the MMORPG database server crashed. Users are <strong>yelling</strong> in the forums. We need to <strong>pacify</strong> them before it damages our brand reputation."</em>
      <br><strong>Tech Lead:</strong> <em>"Got it. Our engineers <strong>have been investigating</strong> the root cause since we got the alert. The database backup <strong>has been restored</strong>, and the login services <strong>will have been fully recovered</strong> within 15 minutes. Please send an <strong>empathetic</strong> announcement to all users."</em>
    </blockquote>
    <p><strong>💡 Clave del Lado Humano:</strong>
      <ul>
        <li>Cuando un usuario está furioso (<em>yelling</em>), el soporte técnico automatizado o humano debe usar un tono sumamente calmado y estructurado para <em>pacify</em> al cliente, ofreciendo respuestas claras y empáticas sobre el progreso técnico. ¡Eso vale oro!</li>
      </ul>
    </p>
  `,
  gotcha: "El booklet conecta dos mundos: la industria del gaming y los call centres automatizados. No los estudies por separado — ambos convergen en la aplicación de IA a interacciones humanas.",
  exercises: [
    {
      id: "u2_read_1",
      type: "multiple-choice",
      question: "READING — What is the primary function of a call centre?",
      options: [
        "To develop video games for entertainment.",
        "To handle incoming and outgoing customer calls for sales, support and complaints.",
        "To train AI models for language processing."
      ],
      correctAnswer: 1,
      explanation: "Un call centre es un departamento que gestiona las llamadas entrantes y salientes de clientes para ventas, soporte técnico y reclamos."
    },
    {
      id: "u2_read_2",
      type: "fill-in-the-blank",
      question: "READING — When a customer is extremely angry and shouting in a support call, the operator must _________ them.",
      correctAnswer: "yelling", // Wait! Let's check the correctAnswer in original unit2.js line 124: "pacify"
      correctAnswer: "pacify",
      explanation: "Según el texto del booklet, 'pacify' es el verbo usado para describir la acción de calmar a un cliente enojado."
    },
    {
      id: "u2_read_3",
      type: "multiple-choice",
      question: "READING — Why is it important for conversational AI bots to be 'empathetic'?",
      options: [
        "Because they need to sell more products.",
        "Because understanding user feelings helps ease frustration and improve the service experience.",
        "Because regulations require emotional responses."
      ],
      correctAnswer: 1,
      explanation: "Los bots empáticos mejoran la experiencia del usuario al mostrar comprensión de sus sentimientos y frustración."
    },
    {
      id: "u2_read_4",
      type: "multiple-choice",
      question: "READING — Which game genre involves tactical resource management, base building, and commanding armies?",
      options: ["FPS", "MMORPG", "RTS"],
      correctAnswer: 2,
      explanation: "RTS (Real-Time Strategy) se basa en la gestión táctica de recursos, construcción de bases y comando de ejércitos en tiempo real."
    },
    {
      id: "u2_read_5",
      type: "multiple-choice",
      question: "READING — In which genre does the player see through the character's eyes and focus on aiming?",
      options: ["RTS", "FPS", "MMORPG"],
      correctAnswer: 1,
      explanation: "FPS (First-Person Shooter): el jugador ve desde la perspectiva en primera persona del personaje y se enfoca en apuntar y disparar."
    }
  ]
};
