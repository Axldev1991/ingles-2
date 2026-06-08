export const listeningConferencingData = {
  id: "u4_listening_conferencing",
  title: "Video Conferencing Systems",
  explanation: `
    <h3>Sistemas de Videoconferencia</h3>
    <p>En el ámbito corporativo y técnico, existen principalmente dos formas de videoconferencias:</p>
    <ul>
      <li><strong>Dedicated Systems (Sistemas dedicados):</strong> Diseñados para salas de reuniones especiales. Cuentan con hardware de alta definición propio, cámaras robóticas con control remoto y pantallas múltiples.</li>
      <li><strong>Desktop Systems (Sistemas de escritorio):</strong> Utilizan computadoras personales convencionales (PCs o laptops) equipadas con una cámara web, auriculares o parlantes y un software de comunicación (como Teams, Zoom o Google Meet).</li>
      <li><strong>MCU (Multipoint Control Unit):</strong> Un dispositivo o software central que interconecta llamadas de tres o más ubicaciones simultáneamente, administrando el flujo de video y audio.</li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Remote Meetings & Bandwidth Issues)</h4>
    <p>En equipos globales, los problemas de conexión son comunes. Si tu señal es mala, apagar la cámara ayuda a reducir el consumo de ancho de banda (bandwidth). Podés avisar de esto en inglés de manera profesional:</p>
    <blockquote>
      <strong>You:</strong> <em>"Guys, my connection is a bit unstable today. If you don't mind, I'll switch off my camera to save some bandwidth."</em>
    </blockquote>
  `,
  gotcha: "¡Atención! Un sistema de escritorio (Desktop System) no requiere hardware costoso dedicado, sino periféricos ordinarios conectados a una PC de uso diario.",
  exercises: [
    {
      id: "u4_list_conf_1",
      type: "multiple-choice",
      question: "Which video conferencing systems are initially mentioned by the technician?",
      options: [
        "Dedicated system and desktop system.",
        "Dedicated system, desktop system and compression system.",
        "Dedicated system only."
      ],
      correctAnswer: 0,
      explanation: "Al inicio, menciona los sistemas dedicados (sala especial) y de escritorio (desktop systems)."
    },
    {
      id: "u4_list_conf_2",
      type: "multiple-choice",
      question: "To use a desktop video conferencing system, you need:",
      options: [
        "A special room with its own hardware.",
        "An ordinary PC and some hardware.",
        "A set of high definition monitors and a video camera for each participant."
      ],
      correctAnswer: 1,
      explanation: "El sistema de escritorio funciona con una PC normal y hardware de oficina estándar (cámara web, micrófono, etc.)."
    },
    {
      id: "u4_list_conf_3",
      type: "multiple-choice",
      question: "Under what condition is an MCU (Multipoint Control Unit) useful?",
      options: [
        "If you need to hold a conference between only three locations.",
        "If you need to hold a conference between only two locations.",
        "If you need to hold a conference between more than three locations."
      ],
      correctAnswer: 2,
      explanation: "La unidad de control multipunto (MCU) se requiere para coordinar la transmisión de video cuando se conectan más de tres ubicaciones."
    },
    {
      id: "u4_list_conf_4",
      type: "multiple-choice",
      question: "What is the benefit of having a video conferencing system according to the technician?",
      options: [
        "They would use less bandwidth.",
        "They could connect to their Tokio, Dubai and Paris offices.",
        "They might see each other's faces."
      ],
      correctAnswer: 1,
      explanation: "El técnico señala que tener el sistema les permitiría conectarse directamente con sus oficinas internacionales en Tokio, Dubái y París."
    }
  ]
};
