export const unit3Data = {
  id: "unit3",
  title: "Unit 3: History of UTN FRA",
  icon: "🏛️",
  description: "Orígenes y evolución de la UTN Facultad Regional Avellaneda, junto a herramientas gramaticales avanzadas de reporte (Voz Pasiva y Past Perfect).",
  topics: [
    {
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
      `,
      gotcha: "¡Atención con las fechas! <strong>1948</strong> es la creación nacional (como UON), <strong>1955</strong> es la creación regional de Avellaneda (FRA) y <strong>1959</strong> es el renacimiento autónomo y cambio oficial de nombre a UTN.",
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
    },
    {
      id: "u3_passive_voice",
      title: "Passive Voice in Technical Reports",
      explanation: `
        <h3>Voz Pasiva: El Estilo Formal de Ingeniería</h3>
        <p>En manuales y reportes de historia o ciencia, no importa <em>quién</em> hace la acción, sino <strong>el objeto que la recibe y la acción en sí</strong>. Para eso usamos la Voz Pasiva.</p>
        
        <div class="formula-box">
          <strong>Fórmula:</strong> Objeto Recibidor + Verbo TO BE (conjugado) + Verbo Principal en Participio Pasado (3ra columna)
        </div>

        <h4>Ejemplos de conversión temporal:</h4>
        <ul>
          <li><strong>Present Simple Passive:</strong>
            <br>Active: <em>"The browser requests the files."</em>
            <br>Passive: <em>"The files <strong>are requested</strong> by the browser."</em>
          </li>
          <li><strong>Past Simple Passive:</strong>
            <br>Active: <em>"Perón signed the UON decree in 1948."</em>
            <br>Passive: <em>"The UON decree <strong>was signed</strong> by Perón in 1948."</em>
          </li>
          <li><strong>Future Simple Passive:</strong>
            <br>Active: <em>"The university will build a new laboratory."</em>
            <br>Passive: <em>"A new laboratory <strong>will be built</strong> by the university."</em>
          </li>
        </ul>
      `,
      gotcha: "Al pasar a pasiva, el verbo <code>to be</code> debe coincidir en número (singular/plural) y en tiempo con la oración activa original. Ej: <code>Active: wrote (past)</code> -> <code>Passive: was written / were written</code>.",
      exercises: [
        {
          id: "u3_pass_1",
          type: "fill-in-the-blank",
          question: "Rewrite in Passive Voice: 'Braidwood founded the regional school in 1955.' -> The regional school ______________ by Braidwood in 1955.",
          correctAnswer: "was founded",
          explanation: "Dado que 'founded' está en Pasado Simple activo y el sujeto receptor 'The regional school' es singular, el pasivo requiere 'was' + participio 'founded'."
        },
        {
          id: "u3_pass_2",
          type: "fill-in-the-blank",
          question: "Rewrite in Passive Voice: 'Vite compiles files into static bundles.' -> Files ______________ into static bundles by Vite.",
          correctAnswer: "are compiled",
          explanation: "'compiles' es presente simple, y 'Files' es plural. La estructura pasiva correspondiente es 'are compiled'."
        }
      ]
    },
    {
      id: "u3_past_perfect",
      title: "Past Perfect Simple",
      explanation: `
        <h3>Past Perfect: El Pasado del Pasado</h3>
        <p>Cuando estamos relatando hechos del pasado (como la historia de la UTN) y queremos referirnos a <strong>una acción que ocurrió ANTES que otra acción también pasada</strong>, usamos el Past Perfect.</p>
        
        <div class="formula-box">
          <strong>Estructura:</strong> <code>had + Past Participle</code> (igual para todas las personas)
        </div>

        <p>Imaginá esta línea de tiempo pasada:</p>
        <ol>
          <li>Acción 1 (Ocurrió primero): Los estudiantes lucharon por la autonomía (Past Perfect).</li>
          <li>Acción 2 (Ocurrió después): El congreso aprobó la ley en 1959 (Past Simple).</li>
        </ol>
        <p><em>"Students <strong>had fought</strong> for autonomy before the congress finally <strong>passed</strong> Law 14.855 in 1959."</em></p>
      `,
      gotcha: "Recordá que el Past Perfect <code>had + p.p.</code> casi siempre va acompañado en el contexto por un Past Simple para marcar la segunda acción cronológica más reciente.",
      exercises: [
        {
          id: "u3_pastp_1",
          type: "multiple-choice",
          question: "Identify the correct sequence: 'By the time the FRA regional committee moved classes to the new Alsina building, the academic board _________ (already approve) the syllabus changes.'",
          options: [
            "has already approved",
            "had already approved",
            "already approved"
          ],
          correctAnswer: 1,
          explanation: "La acción de aprobar el temario ocurrió antes del traslado de clases en el pasado, por lo tanto requiere Past Perfect: 'had already approved'."
        },
        {
          id: "u3_pastp_2",
          type: "multiple-choice",
          question: "Choose the correct sentence representing past sequencing:",
          options: [
            "Before the coup interrupted university life, classes had run smoothly.",
            "Before the coup had interrupted university life, classes run smoothly.",
            "Before the coup interrupt university life, classes had ran smoothly."
          ],
          correctAnswer: 0,
          explanation: "La acción de que las clases corrieran bien es el pasado más antiguo (had run), antes de que el golpe de estado interrumpiera (interrupted - past simple)."
        }
      ]
    },
    {
      id: "u3_revision_capstone",
      title: "🏁 Unit 3: Revision Arena",
      explanation: `
        <h3>Arena de Revisión Final - Unit 3</h3>
        <p>¡Felicitaciones! Llegaste al capstone final de la Unidad 3 sobre la cronología histórica de nuestra querida facultad y el uso formal de Voz Pasiva y Past Perfect en reportes técnicos.</p>
        <p>Te esperan <strong>10 desafíos específicos</strong> para sellar tu entendimiento.</p>
      `,
      gotcha: "En la Voz Pasiva, prestá mucha atención a si el sujeto que recibe la acción es singular o plural para conjugar correctamente el verbo Auxiliar 'to be'.",
      exercises: [
        {
          id: "u3_rev_1",
          type: "multiple-choice",
          question: "The Universidad Obrera Nacional (UON), the foundation of what today is UTN, was created in which year?",
          options: ["1948", "1955", "1959"],
          correctAnswer: 0,
          explanation: "La UON fue creada a nivel nacional el 19 de agosto de 1948 mediante la sanción de la Ley 13.229."
        },
        {
          id: "u3_rev_2",
          type: "fill-in-the-blank",
          question: "Classes at the Facultad Regional Avellaneda (FRA) originally started in 1955 at the Industrial School of __________.",
          correctAnswer: "Avellaneda",
          explanation: "La FRA comenzó sus actividades académicas iniciales en las instalaciones de la emblemática Escuela Industrial de Avellaneda."
        },
        {
          id: "u3_rev_3",
          type: "multiple-choice",
          question: "Which historical figure signed the decree of Ley 13.229 that legally established the UON?",
          options: ["Juan Domingo Perón", "Ing. Braidwood", "Arturo Frondizi"],
          correctAnswer: 0,
          explanation: "El presidente Juan Domingo Perón impulsó y firmó la creación de la Universidad Obrera Nacional."
        },
        {
          id: "u3_rev_4",
          type: "fill-in-the-blank",
          question: "In 1959, the university was renamed as UTN and gained autonomy via Law number __________.",
          correctAnswer: "14.855",
          explanation: "La histórica Ley 14.855 promulgada el 14 de octubre de 1959 consolidó la autonomía universitaria y el nombre UTN."
        },
        {
          id: "u3_rev_5",
          type: "fill-in-the-blank",
          question: "Rewrite in Passive: 'Students use active learning strategies.' -> Active learning strategies _________ (use) by students.",
          correctAnswer: "are used",
          explanation: "Dado que 'strategies' es plural y la oración original está en Presente Simple activo, el pasivo requiere 'are used'."
        },
        {
          id: "u3_rev_6",
          type: "fill-in-the-blank",
          question: "Rewrite in Passive: 'The military coup closed the regional university board in 1955.' -> The regional university board _________ (close) by the military coup in 1955.",
          correctAnswer: "was closed",
          explanation: "'closed' está en pasado simple y 'board' es singular. La forma pasiva correspondiente es 'was closed'."
        },
        {
          id: "u3_rev_7",
          type: "fill-in-the-blank",
          question: "Rewrite in Passive: 'The academic board will inaugurate a new laboratory building next year.' -> A new laboratory building _________ (inaugurate) next year.",
          correctAnswer: "will be inaugurated",
          explanation: "Dado que es una acción en Futuro Simple ('will inaugurate'), su pasiva correspondiente es 'will be' + participio 'inaugurated'."
        },
        {
          id: "u3_rev_8",
          type: "multiple-choice",
          question: "Select the correct structure: 'By the time the FRA acquired the new Alsina building, classes _________ (already start).'",
          options: [
            "had already started",
            "have already started",
            "started"
          ],
          correctAnswer: 0,
          explanation: "El inicio de clases ocurrió antes del traslado/adquisición del edificio (ambos en el pasado). Se utiliza Past Perfect: 'had already started'."
        },
        {
          id: "u3_rev_9",
          type: "multiple-choice",
          question: "Select the correct past sequencing: 'Before Braidwood became the organizer dean of the FRA regional branch, he _________ (help) to coordinate classrooms.'",
          options: ["had helped", "has helped", "helps"],
          correctAnswer: 0,
          explanation: "Su ayuda para coordinar antecede a su asunción oficial como decano en el pasado. Se estructura en Past Perfect: 'had helped'."
        },
        {
          id: "u3_rev_10",
          type: "fill-in-the-blank",
          question: "The current physical campus where UTN FRA holds engineering courses is situated in Villa ___________.",
          correctAnswer: "Domínico",
          explanation: "El campus tecnológico central de la FRA está ubicado en Villa Domínico, Avellaneda (Av. Ramón Franco)."
        }
      ]
    }
  ]
};
