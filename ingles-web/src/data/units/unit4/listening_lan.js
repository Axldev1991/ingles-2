export const listeningLanData = {
  id: "u4_listening_lan",
  title: "Local Area Networks (LAN)",
  explanation: `
    <h3>Redes de Área Local</h3>
    <p>Las redes LAN interconectan computadoras dentro de un área física delimitada:</p>
    <ul>
      <li><strong>LAN (Local Area Network):</strong> Redes confinadas a un área geográfica pequeña como oficinas, escuelas o el hogar.</li>
      <li><strong>Wired vs. Wireless:</strong> Una red cableada (wired) utiliza cables físicos de cobre (Ethernet) o fibra óptica; una red inalámbrica (wireless / WLAN) utiliza ondas de radio (Wi-Fi) a través de puntos de acceso (Access Points).</li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Explaining Infrastructure to Non-Techs)</h4>
    <p>Cuando trabajás en desarrollo u soporte, muchas veces tenés que diagnosticar problemas físicos de red con usuarios no técnicos. Explicar la diferencia entre estar conectado por cable o Wi-Fi con calma ayuda a guiar al usuario:</p>
    <blockquote>
      <strong>You:</strong> <em>"Could you check if your computer is plugged into the wall socket with an Ethernet cable, or are you connected via Wi-Fi?"</em>
    </blockquote>
  `,
  gotcha: "¡Ojo! La diferencia clave entre LAN y WAN (Wide Area Network) es la escala geográfica; una LAN está confinada a un solo edificio u hogar, mientras que una WAN cubre ciudades o países enteros.",
  exercises: [
    {
      id: "u4_lan_ex1",
      type: "multiple-choice",
      question: "What does the abbreviation LAN stand for?",
      options: [
        "Local Area Network",
        "Logical Access Node",
        "Large Assistive Network"
      ],
      correctAnswer: 0,
      explanation: "LAN corresponde a Local Area Network (Red de Área Local)."
    },
    {
      id: "u4_lan_ex2",
      type: "multiple-choice",
      question: "Where are Local Area Networks usually physically located?",
      options: [
        "Across multiple cities or countries.",
        "In a single localized building, office, or home.",
        "Only in data centers with satellite dishes."
      ],
      correctAnswer: 1,
      explanation: "Una LAN se limita a una ubicación geográfica pequeña e individual."
    },
    {
      id: "u4_lan_ex3",
      type: "multiple-choice",
      question: "What is the primary difference between a wired LAN and a wireless LAN?",
      options: [
        "Wired LANs do not support internet connections.",
        "Wireless LANs do not use access points.",
        "Wired LANs use physical copper or fiber cables, while wireless LANs use radio waves (Wi-Fi)."
      ],
      correctAnswer: 2,
      explanation: "Las redes wired dependen de medios guiados (cables de red), mientras que las wireless transmiten ondas electromagnéticas."
    }
  ]
};
