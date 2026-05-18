export const unit2Data = {
  id: "unit2",
  title: "Unit 2: Gaming & AI Future",
  icon: "🎮",
  description: "Géneros de videojuegos, servicio al cliente por IA conversacional, y tiempos perfectos en inglés (Present Perfect Continuous y Future Perfect).",
  topics: [
    {
      id: "u2_game_genres",
      title: "Video Game Genres & Vocab",
      explanation: `
        <h3>Categorías y Vocabulario de la Industria</h3>
        <p>La industria de los videojuegos es una de las áreas técnicas con mayor crecimiento. El booklet introduce términos que debés reconocer:</p>
        
        <ul>
          <li><strong>FPS (First-Person Shooter):</strong> Juegos de disparo en primera persona (enfocados en reflejos y puntería desde la perspectiva del personaje).</li>
          <li><strong>MMORPG (Massively Multiplayer Online Role-Playing Game):</strong> Mundos virtuales masivos donde los jugadores interactúan, suben de nivel y completan misiones (ej: WoW).</li>
          <li><strong>RTS (Real-Time Strategy):</strong> Juegos de estrategia en tiempo real donde gestionas recursos y comandas ejércitos simultáneamente (ej: StarCraft, Age of Empires).</li>
          <li><strong>Conversational AI en soporte:</strong> Sistemas automatizados diseñados para:
            <br>- <em>Pacify an angry customer</em> (calmar a un usuario enojado que está gritando / <em>yelling</em>).
            <br>- Demostrar ser <em>empathetic</em> (empático, entendiendo la frustración del usuario).
          </li>
        </ul>
      `,
      gotcha: "Recordá conectar los géneros con sus características de diseño de software (latencia en MMORPGs, balanceo de assets en RTS, optimización de físicas en FPS).",
      exercises: [
        {
          id: "u2_gen_1",
          type: "multiple-choice",
          question: "Which game genre focuses on tactical resource gathering, base building, and controlling armies simultaneously in real-time?",
          options: ["FPS", "MMORPG", "RTS"],
          correctAnswer: 2,
          explanation: "RTS (Real-Time Strategy) se caracteriza por la recolección de recursos, construcción de bases y control de unidades en tiempo real."
        },
        {
          id: "u2_gen_2",
          type: "fill-in-the-blank",
          question: "AI chatbots are being developed to pacify frustrated customers who are _________ (screaming/shouting loudly) in support chats.",
          correctAnswer: "yelling",
          explanation: "En el vocabulario de atención al cliente del booklet, gritar o quejarse ruidosamente se describe como 'yelling'."
        }
      ]
    },
    {
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
    },
    {
      id: "u2_revision_capstone",
      title: "🏁 Unit 2: Revision Arena",
      explanation: `
        <h3>Arena de Revisión Final - Unit 2</h3>
        <p>¡Llegaste a la meta de la Unidad 2! Acá consolidamos todo lo aprendido sobre terminología de la industria del gaming, bots automatizados de soporte mediante inteligencia artificial y los tiempos perfectos secuenciales.</p>
        <p>Tenés por delante <strong>10 preguntas interactivas específicas</strong> para blindar tus conocimientos de cara al examen.</p>
      `,
      gotcha: "No confundas el Present Perfect Continuous (acción que sigue ocurriendo hoy) con el Future Perfect (acción futura completamente finalizada antes de un hito temporal).",
      exercises: [
        {
          id: "u2_rev_1",
          type: "multiple-choice",
          question: "A game where you act as a hero in an expansive digital world, completing quests and upgrading stats, is an example of:",
          options: ["FPS", "MMORPG", "RTS"],
          correctAnswer: 1,
          explanation: "Se trata de un MMORPG (Massively Multiplayer Online Role-Playing Game), caracterizado por progreso de estadísticas e interacciones sociales masivas en línea."
        },
        {
          id: "u2_rev_2",
          type: "multiple-choice",
          question: "A game like Counter-Strike or Doom in which you control a gun directly from the character's eyes is classified as a:",
          options: ["MMORPG", "RTS", "FPS"],
          correctAnswer: 2,
          explanation: "FPS (First-Person Shooter) pone al jugador detrás de la mira del arma en primera persona."
        },
        {
          id: "u2_rev_3",
          type: "fill-in-the-blank",
          question: "To help a client who is actively _________ (screaming/yelling) in support chats, the agent must stay calm.",
          correctAnswer: "yelling",
          explanation: "El término extraído del booklet para referirse al cliente que grita por insatisfacción es 'yelling'."
        },
        {
          id: "u2_rev_4",
          type: "fill-in-the-blank",
          question: "A conversational bot needs to show ___________ (understanding of user feelings) responses to ease frustration.",
          correctAnswer: "empathetic",
          explanation: "Para mostrar que comprende los sentimientos del usuario, el sistema debe proveer respuestas 'empathetic' (empáticas)."
        },
        {
          id: "u2_rev_5",
          type: "multiple-choice",
          question: "Complete the sentence: 'We ____________ (debug) this game engine memory leak for five hours, and we still haven't found the pointer issue.'",
          options: ["have been debugging", "will have debugged", "debugged"],
          correctAnswer: 0,
          explanation: "Es una acción continua que empezó hace 5 horas y sigue ocurriendo ahora. Requiere Present Perfect Continuous: 'have been debugging'."
        },
        {
          id: "u2_rev_6",
          type: "multiple-choice",
          question: "Complete the statement: 'The game server ____________ (respond) slowly recently, so we are checking connection latency.'",
          options: ["has been responding", "will have responded", "responded"],
          correctAnswer: 0,
          explanation: "Expresa un proceso continuo que se ha estado repitiendo 'recently' (recientemente). Usamos Present Perfect Continuous: 'has been responding'."
        },
        {
          id: "u2_rev_7",
          type: "multiple-choice",
          question: "Complete the future milestone: 'By next Friday, our indie studio ____________ (release) the patch resolving the FPS drops.'",
          options: ["will have released", "have released", "will be releasing"],
          correctAnswer: 0,
          explanation: "Indica una acción futura que ya habrá concluido para el próximo viernes ('By next Friday'). Usamos Future Perfect: 'will have released'."
        },
        {
          id: "u2_rev_8",
          type: "multiple-choice",
          question: "Select the correct structure: 'By the year 2030, advanced AI agents ____________ (replace) basic level-1 customer support.'",
          options: ["will have replaced", "have replaced", "are replacing"],
          correctAnswer: 0,
          explanation: "Establece un hito en el año 2030 antes del cual la acción se completará. Se utiliza Future Perfect: 'will have replaced'."
        },
        {
          id: "u2_rev_9",
          type: "fill-in-the-blank",
          question: "To ___________ an angry customer means to bring calm and restore peace to the dialogue.",
          correctAnswer: "pacify",
          explanation: "Calmar a un cliente molesto se define en el glosario del booklet como 'pacify'."
        },
        {
          id: "u2_rev_10",
          type: "multiple-choice",
          question: "Real-time strategy games (RTS) require constant and strategic ___________ of virtual resources to succeed.",
          options: ["management", "programming", "translating"],
          correctAnswer: 0,
          explanation: "El pilar de un juego RTS es el 'management' (gestión) constante y veloz de recursos virtuales."
        }
      ]
    }
  ]
};
