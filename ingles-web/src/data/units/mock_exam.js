export const mockExamData = {
  id: "u_mock_exam",
  title: "📝 First Midterm Exam Simulator",
  description: "Practicá con el modelo de examen oficial y recibí corrección instantánea y tips de contexto laboral real.",
  
  // STEP 1: READING COMPREHENSION
  reading: {
    title: "What is the Difference Between Block-Based and Text-Based Programming Languages?",
    paragraphs: [
      "Programming languages are the backbone of the technology we use every day. They allow us to communicate with computers and create software that can perform a variety of tasks. When it comes to learning programming, there are two primary types of languages: block-based and text-based programming languages. Each has its unique features, benefits, and challenges. In this article, we will explore the key differences between these two types of programming languages to help you understand which might be best suited for your learning journey.",
      "Block-Based Programming Languages are designed to be [gap_1] and intuitive. Instead of writing code in text format, users manipulate blocks that represent different programming commands. These blocks can be easily dragged and dropped into a [gap_2] to create a sequence of actions. Some popular block-based programming languages include Scratch, Blockly, and MIT App Inventor.",
      "Advantages of Block-Based Languages: Ease of Use, Immediate [gap_3] and Promotes [gap_4].",
      "Limitations of Block-Based Languages: Limited Functionality and Less [gap_5].",
      "Text-Based Programming Languages require users to write code in a [gap_6] format. This approach often involves using specific [gap_7] rules and structure to create programs. Popular text-based programming languages include Python, Java, C++, and JavaScript.",
      "Advantages of Text-Based Languages: Greater [gap_8] and Control, Industry-Relevant Skills, and Support for Advanced Concepts.",
      "Limitations of Text-Based Languages: Steeper Learning Curve and [gap_9] Handling.",
      "Which One Should You Choose? The choice between block-based and text-based programming languages largely depends on your goals and experience level. If you're a beginner or looking to introduce coding to younger learners, block-based languages are a fantastic starting point. They provide an engaging way to learn the basics of programming without the complexities of syntax. On the other hand, if you're serious about pursuing a [gap_10] in software development or want to create more complex applications, investing time in learning text-based programming languages is essential."
    ],
    options: [
      "career", "programming", "workspace", "textual", "visual", 
      "creativity", "control", "error", "syntax", "feedback", 
      "flexibility", "beginner"
    ],
    answers: {
      gap_1: "visual",
      gap_2: "workspace",
      gap_3: "feedback",
      gap_4: "creativity",
      gap_5: "control",
      gap_6: "textual",
      gap_7: "syntax",
      gap_8: "flexibility",
      gap_9: "error",
      gap_10: "career"
    },
    // Follow up questions
    questions: [
      {
        id: "q1",
        question: "What is the main difference between block-based and text-based programming languages in terms of how code is represented?",
        options: [
          "Block-based uses numbers, while text-based uses characters.",
          "Block-based uses visual blocks that can be dragged and dropped, while text-based uses syntax and text commands.",
          "There is no difference; both require typing in a terminal."
        ],
        correctAnswer: 1,
        explanation: "La diferencia central es la representación visual/bloques vs. textual/sintáctica."
      },
      {
        id: "q2",
        question: "Select two advantages and one limitation of block-based programming languages.",
        options: [
          "Advantages: Ease of use and immediate feedback. Limitation: Less control and limited functionality.",
          "Advantages: High performance and compilation speed. Limitation: Lack of visual interfaces.",
          "Advantages: Industry standard and massive libraries. Limitation: Steep learning curve."
        ],
        correctAnswer: 0,
        explanation: "Las ventajas clave de los bloques son la facilidad de uso y el feedback inmediato, mientras que su gran límite es la menor flexibilidad."
      },
      {
        id: "q3",
        question: "Why might a beginner choose to start with block-based programming instead of text-based programming?",
        options: [
          "Because block-based languages compile directly to native machine code.",
          "Because they are more intuitive and avoid the initial complexities of writing strict syntax.",
          "Because text-based programming is obsolete."
        ],
        correctAnswer: 1,
        explanation: "Comenzar con bloques permite entender la lógica algorítmica sin frustrarse por errores tipográficos o sintácticos."
      },
      {
        id: "q4",
        question: "What are two reasons someone might prefer to learn a text-based programming language if they want to work in the tech industry?",
        options: [
          "Because they offer greater flexibility and control, and are standard in real-world professional development.",
          "Because block-based languages don't support colors.",
          "Because text-based code runs slower and is easier to debug manually."
        ],
        correctAnswer: 0,
        explanation: "La industria profesional utiliza lenguajes textuales debido a su flexibilidad ilimitada y control detallado sobre el hardware."
      },
      {
        id: "q5",
        question: "How does error handling differ between block-based and text-based programming languages?",
        options: [
          "Block-based has no errors at all. Text-based has compiler exceptions.",
          "In block-based, errors are less frequent due to visual constraints. In text-based, syntax errors are frequent and require careful debugging.",
          "Text-based has fewer syntax errors than block-based."
        ],
        correctAnswer: 1,
        explanation: "El editor visual de bloques previene errores de sintaxis (no te deja conectar bloques incompatibles). En texto, un punto y coma faltante rompe el programa."
      }
    ],
    humanSide: "💬 <strong>El Lado Humano (Tech Onboarding):</strong> Al incorporar juniors al equipo, recordar esta distinción te ayuda a decidir su curva de aprendizaje. No los lances directo al código heredado (legacy) complejo de producción sin antes repasar diagramas visuales o flujogramas lógicos (que funcionan igual que los bloques)."
  },

  // STEP 2: GRAMMAR & VERB TENSES
  grammar: {
    title: "Grammar & Verb Tenses Arena",
    instructions: "Escribí el verbo entre paréntesis en el tiempo verbal adecuado (Past Simple, Present Perfect, Future Perfect, Past Perfect Simple o Present Perfect Continuous).",
    exercises: [
      {
        id: "g1",
        sentence: "Developers _________ (use) Java to build web and desktop applications in our last project.",
        correctAnswer: "used",
        tense: "Past Simple",
        explanation: "El conector 'in our last project' sitúa la acción en un momento específico y cerrado del pasado."
      },
      {
        id: "g2",
        sentence: "He _________ (work) on this RPG project for two months.",
        correctAnswer: "has been working",
        tense: "Present Perfect Continuous",
        explanation: "Indica una acción que empezó en el pasado, duró un tiempo ('for two months') y aún continúa en el presente."
      },
      {
        id: "g3",
        sentence: "The Facultad Regional de Avellaneda first _________ (open) in 1955.",
        correctAnswer: "opened",
        tense: "Past Simple",
        explanation: "La fecha histórica 'in 1955' es un marcador temporal de pasado específico y terminado."
      },
      {
        id: "g4",
        sentence: "I _________ (never play) a puzzle game like Portal before!",
        correctAnswer: "had never played",
        tense: "Past Perfect",
        explanation: "Expresa una experiencia previa en el pasado antes de otro punto de referencia temporal."
      },
      {
        id: "g5",
        sentence: "By 2035, most games _________ (include) AI-driven worlds.",
        correctAnswer: "will have included",
        tense: "Future Perfect",
        explanation: "El marcador 'By 2035' denota una acción que estará completada antes de un momento específico en el futuro."
      },
      {
        id: "g6",
        sentence: "We couldn't access the site because we _________ (not log in).",
        correctAnswer: "had not logged in",
        tense: "Past Perfect",
        explanation: "La falta de inicio de sesión ocurrió ANTES de la imposibilidad de entrar en el sitio."
      },
      {
        id: "g7",
        sentence: "What language _________ (you / use) to build that flowchart?",
        correctAnswer: "did you use",
        tense: "Past Simple",
        explanation: "Pregunta directa sobre una acción finalizada del pasado (la creación del flujograma)."
      },
      {
        id: "g8",
        sentence: "By this time next year, companies _________ (integrate) AI and cloud gaming into mainstream titles.",
        correctAnswer: "will have integrated",
        tense: "Future Perfect",
        explanation: "'By this time next year' indica una fecha límite futura, requiriendo Future Perfect (will have + p.p.)."
      },
      {
        id: "g9",
        sentence: "We _________ (learn) about different programming languages in Unit I.",
        correctAnswer: "have been learning",
        tense: "Present Perfect Continuous",
        explanation: "Acción continua que comenzó en la cursada y tiene fuerte relevancia o continuidad actual."
      },
      {
        id: "g10",
        sentence: "Recently, companies _________ (use) video conferencing systems to connect international offices.",
        correctAnswer: "have used",
        tense: "Present Perfect Simple",
        explanation: "El conector 'Recently' (recientemente) se asocia típicamente con acciones completadas en un pasado indefinido y cercano."
      }
    ],
    humanSide: "💬 <strong>El Lado Humano (Daily Standups):</strong> En tus reuniones diarias de standup, conjugar bien es clave. Si decís <em>'I did it'</em> (Past Simple), significa que lo terminaste. Si decís <em>'I have been working on...'</em> (Present Perfect Continuous), aclarás que seguís programando esa feature pero ya avanzaste. ¡Evita malentendidos con tu Project Manager!"
  },

  // STEP 3: MODAL VERBS
  modals: {
    title: "Modal Verbs Selection",
    instructions: "Elegí el verbo modal adecuado para completar la oración según el sentido de la regla o permiso.",
    exercises: [
      {
        id: "m1",
        sentence: "You _________ share your password with anyone.",
        options: ["mustn't", "should", "don't have to", "can"],
        correctAnswer: "mustn't",
        explanation: "Indica una prohibición estricta de seguridad informática."
      },
      {
        id: "m2",
        sentence: "Students _________ save their projects before closing the application.",
        options: ["should", "mustn't", "don't have to", "might"],
        correctAnswer: "should",
        explanation: "Expresa una fuerte recomendación o consejo práctico para no perder el código."
      },
      {
        id: "m3",
        sentence: "You _________ eat near the lab equipment.",
        options: ["mustn't", "can", "don't have to", "should"],
        correctAnswer: "mustn't",
        explanation: "Prohibición por riesgo de dañar hardware de alto costo o cortocircuito."
      },
      {
        id: "m4",
        sentence: "She _________ ask the IT technician for help.",
        options: ["can", "mustn't", "don't have to", "might"],
        correctAnswer: "can",
        explanation: "Expresa habilidad o posibilidad permitida."
      },
      {
        id: "m5",
        sentence: "You _________ bring your own laptop, but it's not necessary.",
        options: ["don't have to", "mustn't", "should", "have to"],
        correctAnswer: "don't have to",
        explanation: "Indica ausencia de obligación ('no es necesario', podés usar las PC de la facultad)."
      },
      {
        id: "m6",
        sentence: "I _________ install the update later — it's not urgent.",
        options: ["might", "must", "have to", "shouldn't"],
        correctAnswer: "might",
        explanation: "Expresa una posibilidad remota o plan no urgente."
      }
    ],
    humanSide: "💬 <strong>El Lado Humano (Security Policies):</strong> En una auditoría de software, saber matizar entre <code>mustn't</code> (está estrictamente prohibido por contrato/compliance) y <code>don't have to</code> (es opcional, no obligatorio) te previene de alertar innecesariamente al cliente principal."
  },

  // STEP 4: PASSIVE VOICE REWRITER
  passive: {
    title: "Passive Voice Architecture",
    instructions: "Reescribí las oraciones activas en Voz Pasiva. Prestá atención a la concordancia de tiempos y el uso de la preposición 'by'.",
    exercises: [
      {
        id: "p1",
        sentence: "The government created the Universidad Obrera Nacional.",
        correctAnswer: "The Universidad Obrera Nacional was created by the government.",
        explanation: "Sujeto singular receptivo en pasado: 'was created' seguido por el agente 'by the government'."
      },
      {
        id: "p2",
        sentence: "The students will complete the test tomorrow.",
        correctAnswer: "The test will be completed by the students tomorrow.",
        explanation: "Futuro pasivo: 'will be completed' más el agente 'by the students'."
      },
      {
        id: "p3",
        sentence: "The technician sets up the router.",
        correctAnswer: "The router is set up by the technician.",
        explanation: "Presente simple pasivo: 'is set up' más el agente 'by the technician'."
      }
    ],
    humanSide: "💬 <strong>El Lado Humano (Incident Reports):</strong> Al redactar reportes de incidentes o post-mortem de caídas de servidor, la voz pasiva es tu mejor aliada política: decir <em>'The server was rebooted...'</em> (Voz Pasiva) suena objetivo y enfocado en solucionar el problema, a diferencia de decir <em>'Juan rebooted the server...'</em> (Voz Activa), lo cual apunta dedos innecesariamente."
  },

  // STEP 5: LISTENING SIMULATOR
  listening: {
    title: "Listening Corner: 5G & Autonomous Vehicles",
    audioTitle: "5G & 6G Networks in Self-Driving Cars",
    transcriptBlanks: [
      {
        text: "So, when we talk about ",
        gapKey: "gap_l1",
        correct: "autonomous",
        afterText: " vehicles, you know, we're talking about cars that can pretty much "
      },
      {
        text: "",
        gapKey: "gap_l2",
        correct: "drive",
        afterText: " themselves, right? Right. But none of that is possible without some serious "
      },
      {
        text: "",
        gapKey: "gap_l3",
        correct: "communication",
        afterText: " going on behind the scenes. Exactly! And that's where "
      },
      {
        text: "",
        gapKey: "gap_l4",
        correct: "5g",
        afterText: " comes in. It really is the "
      },
      {
        text: "",
        gapKey: "gap_l5",
        correct: "backbone",
        afterText: " — it's already starting to change the game."
      }
    ],
    questions: [
      {
        id: "lq1",
        question: "What is the main topic of the conversation?",
        options: [
          "The history of mobile networks from 1G to 4G.",
          "How to drive manually in heavy traffic.",
          "The future of self-driving cars and communication technology.",
          "How to manufacture vehicle engines."
        ],
        correctAnswer: 2,
        explanation: "La charla gira en torno a cómo los vehículos autónomos necesitan conectarse a redes ultrarrápidas de comunicación."
      },
      {
        id: "lq2",
        question: "What technology is described as the 'backbone' of self-driving communication?",
        options: [
          "Low-frequency Radio waves",
          "5G cellular networks",
          "Bluetooth connections",
          "Local satellite telemetry"
        ],
        correctAnswer: 1,
        explanation: "Se señala a las redes 5G como la espina dorsal ('backbone') que hace viable esta conectividad."
      },
      {
        id: "lq3",
        question: "What does V2V stand for in this technology?",
        options: [
          "Virtual-to-Visual rendering",
          "Vehicle-to-Vehicle communication",
          "Vehicle-to-Voice connection",
          "Vector-to-Vector calculus"
        ],
        correctAnswer: 1,
        explanation: "V2V es la sigla para 'Vehicle-to-Vehicle' (vehículo a vehículo), permitiendo que autos compartan coordenadas de frenado."
      },
      {
        id: "lq4",
        question: "According to the speakers, what is a primary benefit of low latency in 5G?",
        options: [
          "Saves car battery and limits dashboard heat.",
          "Enables vehicles to make near-instantaneous driving decisions.",
          "Reduces cellular subscription costs.",
          "Makes visual GPS navigation smoother."
        ],
        correctAnswer: 1,
        explanation: "La latencia ultra baja (milisegundos) permite respuestas en tiempo real, previniendo choques."
      },
      {
        id: "lq5",
        question: "What can V2I (Vehicle-to-Infrastructure) communication allow vehicles to do?",
        options: [
          "Avoid paying road tolls.",
          "Communicate with road components like traffic lights and digital signs.",
          "Self-destruct safely in case of system failures.",
          "Connect directly to home smart systems."
        ],
        correctAnswer: 1,
        explanation: "V2I ('Vehicle-to-Infrastructure') conecta los sensores del auto con semáforos, postes y señales viales inteligentes."
      }
    ],
    humanSide: "💬 <strong>El Lado Humano (Edge Computing & Networks):</strong> Entender la latencia y comunicación V2V te ayuda en la arquitectura de microservicios distribuidos. Diseñar pensando en latencia cero es crucial no solo para autos, sino para que tu API responda al usuario en tiempo real."
  },

  // STEP 6: WRITING ASSISTANT
  writing: {
    title: "Writing Lab: Smart Device Review",
    instructions: "Escribí un párrafo descriptivo sobre un 'Echo dot' y sus funciones. Para aprobar este bloque, tu párrafo DEBE contener:",
    requirements: [
      { id: "purpose", name: "Infinitive of purpose (e.g. 'to play music', 'to help customers')", pattern: /to\s+[a-z]{3,}/i },
      { id: "relative", name: "Relative clause (e.g. 'which is a device', 'that performs')", pattern: /\b(which|who|that)\b/i },
      { id: "modal", name: "Modal verb (e.g. 'You can control', 'It should automatically')", pattern: /\b(can|could|must|should|might|may|have\s+to)\b/i }
    ],
    humanSide: "💬 <strong>El Lado Humano (Writing clean documentation):</strong> Cuando redactes documentación técnica (READMEs, Wikis), usar infinitivos de propósito (<em>'to run this code...'</em>) y cláusulas relativas claras (<em>'the script which builds...'</em>) evita que otros programadores pierdan el tiempo adivinando para qué sirve cada herramienta."
  }
};
