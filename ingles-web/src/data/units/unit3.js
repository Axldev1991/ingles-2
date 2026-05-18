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
      id: "u3_reading_comprehension",
      title: "Reading: History of UTN",
      explanation: `
        <h3>Texto de comprensión: History of UTN</h3>
        <p>Este tema evalúa tu comprensión del texto histórico del booklet sobre la creación y evolución de la UTN:</p>
        <ul>
          <li><strong>1948</strong>: Creación de la UON (Universidad Obrera Nacional) por Ley 13.229 bajo Perón.</li>
          <li><strong>1955</strong>: Inicio de clases en la FRA (Facultad Regional Avellaneda) con el Ing. Braidwood como primer decano.</li>
          <li><strong>1955 (sept)</strong>: Golpe de estado ("Revolución Libertadora") intenta disolver la UON.</li>
          <li><strong>FAGUT</strong>: Federación Argentina de Graduados de la Universidad Tecnológica — luchó por la autonomía.</li>
          <li><strong>1959</strong>: Ley 14.855 renombra la UON como UTN y le otorga autonomía.</li>
          <li><strong>Villa Domínico</strong>: Campus actual de la FRA (Av. Ramón Franco).</li>
        </ul>
      `,
      gotcha: "Las fechas clave para el examen son: <strong>1948</strong> (UON), <strong>1955</strong> (FRA + golpe), <strong>1959</strong> (UTN autónoma). ¡No las confundas!",
      exercises: [
        {
          id: "u3_read_1",
          type: "multiple-choice",
          question: "READING — What was the original name of UTN when it was created in 1948?",
          options: [
            "Universidad Tecnológica Nacional",
            "Universidad Obrera Nacional (UON)",
            "Facultad Regional Avellaneda"
          ],
          correctAnswer: 1,
          explanation: "La UTN fue creada originalmente como UON (Universidad Obrera Nacional) en 1948 para capacitar profesionalmente a la clase trabajadora."
        },
        {
          id: "u3_read_2",
          type: "multiple-choice",
          question: "READING — Why did the military government after the 1955 coup try to close the UON?",
          options: [
            "Because there were financial problems.",
            "Because they associated it with Peronist political propaganda.",
            "Because there were not enough students enrolled."
          ],
          correctAnswer: 1,
          explanation: "El gobierno de facto consideró a la UON un instrumento de propaganda política peronista y buscó disolverla o reducirla a una escuela de oficios."
        },
        {
          id: "u3_read_3",
          type: "fill-in-the-blank",
          question: "READING — The organization formed by graduates that fought for the university's autonomy was called __________.",
          correctAnswer: "FAGUT",
          explanation: "La FAGUT (Federación Argentina de Graduados de la Universidad Tecnológica) nucleó a los graduados que lucharon por mantener el estatus universitario."
        },
        {
          id: "u3_read_4",
          type: "multiple-choice",
          question: "READING — What did Law 14.855 of 1959 achieve?",
          options: [
            "It created the UON for the first time.",
            "It granted the university academic autonomy and renamed it as UTN.",
            "It moved the campus to Villa Domínico."
          ],
          correctAnswer: 1,
          explanation: "La Ley 14.855 de 1959 otorgó la autonomía académica y renombró oficialmente a la UON como Universidad Tecnológica Nacional (UTN)."
        },
        {
          id: "u3_read_5",
          type: "fill-in-the-blank",
          question: "READING — The FRA originally held classes at the Industrial School located on Av. Mitre in the city of __________.",
          correctAnswer: "Avellaneda",
          explanation: "La FRA comenzó sus clases en la Escuela Industrial de Avellaneda, ubicada sobre la Av. Mitre."
        }
      ]
    },
    {
      id: "u3_passive_voice_lw",
      title: "Language Work: Active vs Passive Classification",
      explanation: `
        <h3>Clasificación Activa / Pasiva</h3>
        <p>El booklet incluye ejercicios donde debés identificar si una oración está en voz activa o pasiva, y luego reescribirla en la forma contraria:</p>
        <ul>
          <li><strong>Activa</strong>: El sujeto realiza la acción. <em>'Engineers designed the bridge.'</em></li>
          <li><strong>Pasiva</strong>: El sujeto recibe la acción. <em>'The bridge was designed by engineers.'</em></li>
        </ul>
        <p>Para identificarla, buscá la estructura <code>to be + past participle</code> en la oración. Si la tiene, es pasiva.</p>
      `,
      gotcha: "Para saber si es pasiva, buscá <code>am/is/are/was/were + past participle</code>. Si el sujeto HACE la acción → activa. Si el sujeto RECIBE la acción → pasiva.",
      exercises: [
        {
          id: "u3_class_1",
          type: "multiple-choice",
          question: "CLASSIFY — 'The law was signed by President Perón in 1948.' Is this sentence Active or Passive?",
          options: ["Active", "Passive"],
          correctAnswer: 1,
          explanation: "La estructura 'was signed' (was + past participle) indica voz pasiva. El sujeto 'The law' recibe la acción."
        },
        {
          id: "u3_class_2",
          type: "multiple-choice",
          question: "CLASSIFY — 'Students fought for the university's autonomy.' Is this sentence Active or Passive?",
          options: ["Active", "Passive"],
          correctAnswer: 0,
          explanation: "El sujeto 'Students' realiza la acción directamente ('fought'). No hay estructura 'to be + p.p.', por lo tanto es voz activa."
        },
        {
          id: "u3_class_3",
          type: "multiple-choice",
          question: "CLASSIFY — 'The new campus will be inaugurated next year.' Is this sentence Active or Passive?",
          options: ["Active", "Passive"],
          correctAnswer: 1,
          explanation: "La estructura 'will be inaugurated' (will be + past participle) indica voz pasiva en futuro simple."
        },
        {
          id: "u3_class_4",
          type: "multiple-choice",
          question: "CLASSIFY — 'The FAGUT organized protests against the military intervention.' Is this sentence Active or Passive?",
          options: ["Active", "Passive"],
          correctAnswer: 0,
          explanation: "El sujeto 'The FAGUT' realiza la acción ('organized'). Es voz activa."
        },
        {
          id: "u3_rewrite_1",
          type: "fill-in-the-blank",
          question: "REWRITE — Active: 'The military government dissolved the university board.' → Passive: The university board _____________ by the military government.",
          correctAnswer: "was dissolved",
          explanation: "'dissolved' está en pasado simple activo y 'board' es singular. Pasiva: <code>was dissolved</code>."
        },
        {
          id: "u3_rewrite_2",
          type: "fill-in-the-blank",
          question: "REWRITE — Active: 'The congress approves new education laws every year.' → Passive: New education laws _____________ by the congress every year.",
          correctAnswer: "are approved",
          explanation: "'approves' está en presente simple activo y 'laws' es plural. Pasiva: <code>are approved</code>."
        },
        {
          id: "u3_rewrite_3",
          type: "fill-in-the-blank",
          question: "REWRITE — Active: 'The university will build a new research center.' → Passive: A new research center _____________ by the university.",
          correctAnswer: "will be built",
          explanation: "'will build' está en futuro simple activo. Pasiva: <code>will be built</code>."
        },
        {
          id: "u3_rewrite_4",
          type: "fill-in-the-blank",
          question: "REWRITE — Active: 'Teachers use interactive whiteboards in every classroom.' → Passive: Interactive whiteboards _____________ by teachers in every classroom.",
          correctAnswer: "are used",
          explanation: "'use' está en presente simple activo y 'whiteboards' es plural. Pasiva: <code>are used</code>."
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
      id: "u3_past_perfect_lw",
      title: "Language Work: Past Perfect Practice",
      explanation: `
        <h3>Práctica de Past Perfect del Booklet</h3>
        <p>El booklet incluye ejercicios de secuenciación temporal usando Past Perfect + Past Simple:</p>
        <ul>
          <li>La acción que ocurrió PRIMERO → <strong>Past Perfect</strong> (<code>had + p.p.</code>)</li>
          <li>La acción que ocurrió DESPUÉS → <strong>Past Simple</strong></li>
        </ul>
        <p>Conectores típicos: <em>before, after, by the time, when, already, just</em>.</p>
      `,
      gotcha: "Si una oración empieza con 'Before...' o 'By the time...', la acción ANTERIOR va en Past Perfect y la posterior en Past Simple. <em>'Before the class started, the teacher <strong>had prepared</strong> the materials.'</em>",
      exercises: [
        {
          id: "u3_pp_lw1",
          type: "fill-in-the-blank",
          question: "PAST PERFECT — 'By the time the FRA opened in 1955, the government __________ (already/create) the UON in 1948.'",
          correctAnswer: "had already created",
          explanation: "La creación de la UON (1948) ocurrió ANTES de la apertura de la FRA (1955). Past Perfect: <code>had already created</code>."
        },
        {
          id: "u3_pp_lw2",
          type: "fill-in-the-blank",
          question: "PAST PERFECT — 'When the military coup happened, classes __________ (already/begin) at the FRA.'",
          correctAnswer: "had already begun",
          explanation: "Las clases ya habían comenzado (acción anterior) cuando el golpe ocurrió (acción posterior). Past Perfect: <code>had already begun</code>."
        },
        {
          id: "u3_pp_lw3",
          type: "multiple-choice",
          question: "PAST PERFECT — 'After the students __________ (collect) enough signatures, the congress debated the new law.'",
          options: ["collected", "had collected", "have collected"],
          correctAnswer: 1,
          explanation: "Recolectar firmas ocurrió ANTES de que el congreso debatiera. Después de 'After', la primera acción va en Past Perfect: <code>had collected</code>."
        },
        {
          id: "u3_pp_lw4",
          type: "multiple-choice",
          question: "PAST PERFECT — Choose the correct sentence:",
          options: [
            "The engineer finished the project before the deadline had arrived.",
            "The engineer had finished the project before the deadline arrived.",
            "The engineer had finished the project before the deadline had arrived."
          ],
          correctAnswer: 1,
          explanation: "Terminar el proyecto (acción anterior) → Past Perfect: 'had finished'. La llegada del deadline (acción posterior) → Past Simple: 'arrived'. Solo la acción más antigua lleva Past Perfect."
        },
        {
          id: "u3_pp_lw5",
          type: "fill-in-the-blank",
          question: "PAST PERFECT — 'The programmer __________ (never/work) with Java before she joined the gaming company.'",
          correctAnswer: "had never worked",
          explanation: "No haber trabajado con Java (experiencia anterior) antes de unirse a la empresa (Past Simple 'joined'). Past Perfect: <code>had never worked</code>."
        },
        {
          id: "u3_pp_lw6",
          type: "multiple-choice",
          question: "PAST PERFECT — 'When I arrived at the meeting, the presentation __________ (already/start).'",
          options: ["already started", "had already started", "has already started"],
          correctAnswer: 1,
          explanation: "Mi llegada (Past Simple: 'arrived') fue posterior al inicio de la presentación. Past Perfect: <code>had already started</code>."
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
