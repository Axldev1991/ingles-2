export const readingData = {
  id: "u1_reading_comprehension",
  title: "Reading: Computer Languages",
  explanation: `
    <h3>Comprensión Lectora: Lenguajes de Computación</h3>
    <p>El booklet incluye un texto clave sobre la historia y clasificación de los lenguajes de programación. Puntos centrales a recordar:</p>
    
    <ul>
      <li><strong>Low-level languages (Lenguajes de bajo nivel):</strong> Como el <em>Machine code</em> (código binario directo, ceros y unos) y el <em>Assembly language</em> (lenguaje ensamblador, usa mnemónicos sencillos como ADD, SUB). Están estrechamente acoplados al hardware y la CPU específica.</li>
      <li><strong>High-level languages (Lenguajes de alto nivel):</strong> Como C++, Java, Python. Usan palabras similares al inglés e instrucciones matemáticas, abstrayendo la complejidad de la memoria de la máquina. Son independientes de la arquitectura del procesador.</li>
      <li>El primer lenguaje de alto nivel ampliamente aceptado fue el **FORTRAN** (desarrollado en la década de 1950 para cálculo científico).</li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (Slack & Daily Standups)</h4>
    <p>Cuando necesites dar una opinión técnica sobre la conveniencia de un lenguaje o tecnología sobre otra, es vital que uses estructuras de opinión profesional:</p>
    <blockquote>
      <strong>You (Daily Standup):</strong> <em>"In my opinion, we should go with Python because it has a rich library ecosystem for this specific feature."</em>
      <br><strong>Tech Lead (Slack):</strong> <em>"I see your point. Go ahead and bootstrap a proof of concept."</em>
    </blockquote>
    <p><strong>💡 Tip:</strong> Empezar tu argumento con frases como <em>"In my opinion..."</em> u <em>"I suggest we go with..."</em> suaviza la postura y abre la mesa al diálogo constructivo.</p>
  `,
  gotcha: "Machine code es el ÚNICO lenguaje que el procesador entiende de forma nativa sin ningún tipo de software traductor intermedio.",
  exercises: [
    {
      id: "u1_read_1",
      type: "multiple-choice",
      question: "READING — What makes a low-level language distinct from a high-level language?",
      options: [
        "It is portable and can run on any OS.",
        "It is heavily constrained by and designed for a specific CPU architecture.",
        "It uses complex human phrases."
      ],
      correctAnswer: 1,
      explanation: "Los lenguajes de bajo nivel (como Assembly) dependen directamente del juego de instrucciones de una CPU y arquitectura específicas."
    },
    {
      id: "u1_read_2",
      type: "multiple-choice",
      question: "READING — Which programming language is the only one a computer understands natively without translation?",
      options: ["Assembly language", "Machine code", "FORTRAN"],
      correctAnswer: 1,
      explanation: "El código de máquina (Machine code), compuesto por bits crudos, es el único que los circuitos lógicos de la CPU pueden procesar de forma nativa."
    },
    {
      id: "u1_read_3",
      type: "fill-in-the-blank",
      question: "READING — The first widely accepted high-level language, developed in the 1950s for engineering, was called _________.",
      correctAnswer: "fortran",
      explanation: "FORTRAN (Formula Translation) fue el pionero de los lenguajes de alto nivel para usos matemáticos y científicos."
    },
    {
      id: "u1_read_4",
      type: "multiple-choice",
      question: "READING — Why were high-level languages created?",
      options: [
        "To make computer execution faster.",
        "To make programming more accessible, closer to human English, and independent of specific hardware.",
        "To allow the computer to run without a CPU."
      ],
      correctAnswer: 1,
      explanation: "Se crearon para abstraer la complejidad del hardware, permitiendo a los humanos programar usando términos lógicos abstractos cercanos al inglés."
    }
  ]
};
