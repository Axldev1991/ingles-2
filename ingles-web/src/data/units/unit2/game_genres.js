export const gameGenresData = {
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

    <hr>
    <h4>💬 El Lado Humano (Tech Support & Incident Management)</h4>
    <p>El vocabulario de soporte no es solo académico; en la vida real, lidiar con usuarios finales frustrados (o hasta con directores ejecutivos cuando se cae la base de datos) requiere mucha empatía y tacto profesional para calmar la situación:</p>
    <blockquote>
      <strong>User (Yelling):</strong> <em>"This is completely unacceptable! Your server crashed right during our MMORPG guild raid, and we lost all our progress!"</em>
      <br><strong>Support Engineer:</strong> <em>"I completely understand your frustration. If I were in your shoes, I would feel the exact same way. Let me check the database logs right now so we can recover your raid data as soon as possible."</em>
    </blockquote>
    <p><strong>💡 El Arte de la Empatía (Empathetic phrasing):</strong>
      <ul>
        <li>En lugar de ponerte a la defensiva o decir "it's not our fault", usás frases empáticas como <em>"I completely understand your frustration"</em> o <em>"If I were in your shoes..."</em>. Esto ayuda enormemente a <strong>pacify</strong> (calmar) al cliente más temperamental.</li>
      </ul>
    </p>
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
};
