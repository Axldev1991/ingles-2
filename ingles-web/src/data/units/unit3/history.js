export const historyData = {
  id: "u3_history",
  title: "Chronology & Milestones of UTN FRA",
  explanation: `
    <h3>Una Historia de Resiliencia y Lucha Estudiantil</h3>
    <p>La historia de nuestra facultad y universidad es tema evaluable en los textos de comprensión. Tené muy claros estos hitos cronológicos:</p>
    
    <ul>
      <li><strong>1948 - Creación de la UON:</strong> Bajo la presidencia de Juan Domingo Perón se crea la <strong>Universidad Obrera Nacional (UON)</strong> por Ley 13.229, con un fin claro: capacitar profesionalmente a la clase trabajadora e impulsar la industria nacional.</li>
      <li><strong>1955 - Fundación de la FRA e Intervención Militar:</strong> 
        <br>- La <strong>Facultad Regional Avellaneda (FRA)</strong> inicia sus clases a principios de 1955 en la sede de la <em>Escuela Industrial de Avellaneda</em> (Av. Mitre). Su primer decano fue el Ing. <strong>Braidwood</strong>.
        <br>- A finales de año, el golpe de estado ("Revolución Libertadora") derroca al gobierno e interviene la universidad, intentando disolverla por considerarla 'propaganda política'.
      </li>
      <li><strong>1959 - Autonomía y Nombre actual (UTN):</strong> Tras una resistencia heroica de estudiantes y graduados nucleados en la **FAGUT**, se sanciona la <strong>Ley 14.855</strong> el 14 de octubre de 1959, que le otorga autonomía académica y la renombra oficialmente como <strong>Universidad Tecnológica Nacional (UTN)</strong>.</li>
      <li><strong>Sedes Físicas:</strong> Originalmente funcionó en la Av. España (Sede Alsina). Luego, en la década de 1980, se mudó al actual <strong>Campus de Villa Domínico</strong> (Av. Ramón Franco).</li>
    </ul>

    <hr>
    <h4>💬 El Lado Humano (How to pitch your UTN background to global clients)</h4>
    <p>En entrevistas para empresas del exterior (USA, Europa) o cuando hablás con clientes de habla inglesa, "vender" la historia y prestigio de tu universidad (UTN FRA) te posiciona como un profesional con base técnica sólida y orgullo institucional:</p>
    <blockquote>
      <strong>US Interviewer:</strong> <em>"Tell me about your academic background. I see you went to UTN."</em>
      <br><strong>Dev (You):</strong> <em>"Yes! I study at <strong>UTN (National Technological University)</strong>, which is Argentina's premier public institution specialized in engineering. It was actually founded in 1948 as the 'Workers' National University' to empower working-class people. Our regional faculty in Avellaneda (FRA) started classes in 1955 and has a proud history of student resistance for academic autonomy, which we successfully won in 1959. It's famous for producing highly pragmatic, hands-on software developers."</em>
    </blockquote>
    <p><strong>💡 Hack para entrevistas:</strong>
      <ul>
        <li>En lugar de traducir el nombre literalmente como "Technological University", explicales su <strong>propósito fundacional</strong> (<em>empower working-class professionals</em>) y su <strong>estatus prestigioso</strong> en el país. ¡A los americanos les fascina esa mística y resiliencia!</li>
      </ul>
    </p>
  `,
  gotcha: "¡Atención con las fechas! <strong>1948</strong> is the creation national (como UON), <strong>1955</strong> is the creation regional de Avellaneda (FRA) y <strong>1959</strong> is the renacimiento autónomo y cambio oficial de nombre a UTN.",
  exercises: [
    {
      id: "u3_hist_1",
      type: "multiple-choice",
      question: "Under which law number did the university gain academic autonomy and its definitive name 'Universidad Tecnológica Nacional' in 1959?",
      options: ["Law 13.229", "Law 14.855", "Law 11.600"],
      correctAnswer: 1,
      explanation: "La Ley 14.855, sancionada el 14 de octubre de 1959, renombró a la UON como UTN y le concedió la autonomía universitaria reclamada por estudiantes y graduados."
    },
    {
      id: "u3_hist_2",
      type: "multiple-choice",
      question: "Who was the first Dean (Decano) of the Facultad Regional Avellaneda when classes started in 1955?",
      options: ["Ing. Braidwood", "Juan Domingo Perón", "Ing. Alsina"],
      correctAnswer: 0,
      explanation: "El Ing. Braidwood fue el primer decano organizador de la FRA en sus inicios dentro de la Escuela Industrial de Avellaneda."
    },
    {
      id: "u3_hist_3",
      type: "multiple-choice",
      question: "Why did the military government attempt to close or restrict the university after the 1955 coup d'état?",
      options: [
        "Because they wanted to migrate classes to Villa Domínico immediately.",
        "Because they associated its worker-focused origin (UON) with political demagoguery.",
        "Because there were no enrolled students."
      ],
      correctAnswer: 1,
      explanation: "El gobierno de facto consideraba a la UON un símbolo de adoctrinamiento político del peronismo y buscaba asimilarla a escuelas de oficios o cerrarla, despojándola de su estatus universitario."
    }
  ]
};
