export const studyData = [
  {
    id: "unit1",
    title: "Unit 1: Programming & Languages",
    icon: "💻",
    description: "Metodologías de desarrollo, traductores de código (compiladores/intérpretes) y estructuras gramaticales base (infinitivos, formas -ing, modales y relativas).",
    topics: [
      {
        id: "u1_compilers_interpreters",
        title: "Compilers vs. Interpreters",
        explanation: `
          <h3>¿Cómo se traduce el código?</h3>
          <p>Las computadoras solo entienden <strong>Machine Code</strong> (código máquina - ceros y unos). Como nosotros escribimos en <strong>High-Level Languages</strong> (lenguajes de alto nivel como JS, Python, C++), necesitamos un traductor. Hay dos tipos fundamentales:</p>
          
          <div class="comparison-grid">
            <div class="card compiler-card">
              <h4>Compiler (Compilador)</h4>
              <p>Traduce <strong>todo el código fuente</strong> a la vez antes de ejecutarlo, generando un archivo ejecutable independiente (como un <code>.exe</code> o binario).</p>
              <ul>
                <li><strong>Velocidad:</strong> Ultra rápido en ejecución.</li>
                <li><strong>Errores:</strong> Los reporta todos juntos al final de la compilación. Si hay un error, no compila nada.</li>
                <li><strong>Ejemplos:</strong> C, C++, Go, Rust.</li>
              </ul>
            </div>
            
            <div class="card interpreter-card">
              <h4>Interpreter (Intérprete)</h4>
              <p>Traduce y ejecuta el código <strong>línea por línea</strong> en tiempo de ejecución (runtime). No genera un archivo ejecutable.</p>
              <ul>
                <li><strong>Velocidad:</strong> Más lento, porque traduce mientras ejecuta.</li>
                <li><strong>Errores:</strong> Detiene la ejecución en la primera línea que contenga un error.</li>
                <li><strong>Ejemplos:</strong> JavaScript, Python, Ruby.</li>
              </ul>
            </div>
          </div>
        `,
        gotcha: "¡Ojo en el examen! Un compilador <strong>NO</strong> ejecuta el código, solo lo traduce a código objeto/máquina. El intérprete sí traduce y ejecuta línea a línea en el momento.",
        exercises: [
          {
            id: "u1_comp_1",
            type: "fill-in-the-blank",
            question: "An ___________ translates and executes the source code line by line at runtime.",
            correctAnswer: "interpreter",
            explanation: "El intérprete (<code>interpreter</code>) es la opción correcta porque traduce y ejecuta cada instrucción línea por línea en tiempo real (runtime). <br><br><strong>Ejemplo:</strong> Si ejecutas un script de Python con un error de sintaxis en la línea 5, el intérprete correrá perfectamente las líneas 1 a 4 y se detendrá abruptamente al chocar con la línea 5. Un compilador (<code>compiler</code>), en cambio, fallaría antes de iniciar."
          },
          {
            id: "u1_comp_2",
            type: "multiple-choice",
            question: "Which translator reports all syntax errors at the end of the translation process, refusing to generate executable code if even one error is found?",
            options: ["Compiler", "Interpreter", "Assembler"],
            correctAnswer: 0,
            explanation: "El compilador (<code>Compiler</code>) es el que analiza el código fuente por completo y reporta todos los errores juntos al final. Si encuentra errores, detiene el proceso y no genera el archivo objeto de salida.<br><br><strong>Ejemplo:</strong> Al compilar código en C++ o Java, recibirás una lista completa de errores del compilador y ningún binario hasta que los resuelvas.<br><br><div class='incorrect-breakdown'><strong>¿Por qué no las otras opciones?</strong><ul><li><code>Interpreter</code>: Traduce y ejecuta línea a línea en runtime; se frena inmediatamente en el primer error sin dar un reporte unificado de todo el archivo.</li><li><code>Assembler</code>: Traduce lenguaje ensamblador de bajo nivel a código máquina; no es el que procesa la estructura de sintaxis de alto nivel con un compilado completo de errores del estilo analizado en el booklet.</li></ul></div>"
          },
          {
            id: "u1_comp_3",
            type: "fill-in-the-blank",
            question: "A compiler translates high-level source code into _________ code before execution.",
            correctAnswer: "machine",
            explanation: "El compilador genera código de máquina (<code>machine</code>) u <code>object</code> code para que el CPU pueda procesarlo de manera nativa y ultra veloz sin necesidad de traducción posterior.<br><br><strong>Ejemplo:</strong> El código en C++ <code>int a = 5;</code> se compila a instrucciones directas en binario (ceros y unos) específicas del procesador destino."
          }
        ]
      },
      {
        id: "u1_the_infinitive",
        title: "The Infinitive (With & Without 'To')",
        explanation: `
          <h3>Estructura del Infinitivo</h3>
          <p>En inglés técnico, el infinitivo aparece en dos formatos: con "to" (<em>Full Infinitive</em>) y sin "to" (<em>Bare Infinitive</em>).</p>
          
          <h4>1. Full Infinitive (con "to") - Ej: <code>to run</code>, <code>to compile</code></h4>
          <ul>
            <li><strong>Propósito / Objetivo:</strong> Para expresar <em>para qué</em> se hace algo.
              <br><em>"We use compilers <strong>to speed up</strong> execution."</em> (Usamos compiladores para acelerar la ejecución).
            </li>
            <li><strong>Después de adjetivos:</strong> 
              <br><em>"It is easy <strong>to learn</strong> Python."</em> (Es fácil aprender Python).
            </li>
            <li><strong>Después de ciertos verbos:</strong> (decide, hope, want, need, be able).
              <br><em>"We need <strong>to debug</strong> this module."</em>
            </li>
          </ul>

          <h4>2. Bare Infinitive (sin "to") - Ej: <code>run</code>, <code>compile</code></h4>
          <ul>
            <li><strong>Después de verbos modales:</strong> (can, must, should, will).
              <br><em>"You should <strong>optimize</strong> your database."</em> (NO se dice: "should to optimize").
            </li>
            <li><strong>Después de 'make' (hacer/obligar) y 'let' (permitir):</strong>
              <br><em>"Intinterpreters make code <strong>run</strong> slower."</em> (Los intérpretes hacen que el código corra más lento).
              <br><em>"Let the script <strong>execute</strong> now."</em> (Dejá que el script se ejecute ahora).
            </li>
          </ul>
        `,
        gotcha: "<strong>¡LA TRAMPA MORTAL DE LA UTN!</strong> Nunca traduzcas 'para hacer algo' como 'for + infinitivo' (for to write). Si usás 'for', debés usar obligatoriamente la forma -ing: <code>for writing</code>. Si usás infinitivo, usás 'to': <code>to write</code>. ¡Ambas expresan propósito!",
        exercises: [
          {
            id: "u1_inf_1",
            type: "fill-in-the-blank",
            question: "High-level programming languages allow developers _________ (write) instructions easily.",
            correctAnswer: "to write",
            explanation: "El verbo <code>allow</code> (permitir) es un verbo transitivo que exige la estructura de objeto + infinitivo completo con 'to' (<code>allow someone to do something</code>).<br><br><strong>Ejemplo:</strong> <em>\"This plugin allows the editor <strong>to format</strong> markdown automatically.\"</em> (Este complemento le permite al editor formatear markdown automáticamente)."
          },
          {
            id: "u1_inf_2",
            type: "fill-in-the-blank",
            question: "Compilers make programs _________ (run) much faster than interpreted ones.",
            correctAnswer: "run",
            explanation: "El verbo causativo <code>make</code> (hacer / obligar / causar) exige la estructura de objeto + infinitivo sin 'to' (<code>bare infinitive</code>). Por lo tanto, no se coloca 'to run', sino simplemente <code>run</code>.<br><br><strong>Ejemplo:</strong> <em>\"Dark mode makes batteries <strong>last</strong> longer.\"</em> (El modo oscuro hace que las baterías duren más tiempo)."
          },
          {
            id: "u1_inf_3",
            type: "multiple-choice",
            question: "Identify the grammatically CORRECT sentence expressing purpose:",
            options: [
              "We use HTML for to structure web pages.",
              "We use HTML to structure web pages.",
              "We use HTML for structure web pages."
            ],
            correctAnswer: 1,
            explanation: "La oración correcta es la segunda. En inglés, para expresar propósito u objetivo se utiliza <code>to + infinitive</code> (<code>to structure</code>) o bien <code>for + -ing</code> (<code>for structuring</code>).<br><br><strong>Ejemplo:</strong> <em>\"We use node <strong>to run</strong> javascript on the server\"</em> o <em>\"We use node <strong>for running</strong> javascript...\"</em>.<br><br><div class='incorrect-breakdown'><strong>¿Por qué no las otras opciones?</strong><ul><li><code>for to structure</code>: Es una mezcla incorrecta. Combinar 'for' y 'to' seguidos delante de un verbo es una de las fallas más penalizadas en los exámenes de la UTN.</li><li><code>for structure</code>: Falta el gerundio. Detrás de la preposición 'for', obligatoriamente debe haber un verbo en formato <code>-ing</code> o un sustantivo directo. 'Structure' como verbo requiere '-ing' en este caso.</li></ul></div>"
          }
        ]
      },
      {
        id: "u1_ing_form",
        title: "The -ing Form: Gerund, Participle or Adjective?",
        explanation: `
          <h3>La terminación -ing no es solo 'ando/endo'</h3>
          <p>En textos técnicos, las palabras terminadas en <strong>-ing</strong> cumplen tres funciones gramaticales muy diferentes. ¡Saber distinguirlas es clave para traducir correctamente!</p>
          
          <table class="premium-table">
            <thead>
              <tr>
                <th>Función</th>
                <th>Explicación</th>
                <th>Ejemplo Técnico</th>
                <th>Traducción típica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gerund (Gerundio)</strong></td>
                <td>Funciona como un <strong>sustantivo</strong> (puede ser el sujeto, ir tras una preposición o después de verbos de gusto/preferencia).</td>
                <td><em>"<strong>Programming</strong> is hard."</em><br><em>"Tools for <strong>debugging</strong>."</em></td>
                <td>Sustantivo o Infinitivo en español: <em>"La programación..."</em> / <em>"Herramientas para depurar..."</em></td>
              </tr>
              <tr>
                <td><strong>Present Participle</strong></td>
                <td>Funciona como <strong>verbo continuo</strong> (con el verbo 'to be') o como cláusula activa.</td>
                <td><em>"The server is <strong>listening</strong>."</em></td>
                <td>Gerundio en español: <em>"...está escuchando."</em></td>
              </tr>
              <tr>
                <td><strong>Adjective (Adjetivo)</strong></td>
                <td>Describe o califica a un sustantivo, colocándose delante de él.</td>
                <td><em>"A <strong>programming</strong> language."</em></td>
                <td>Adjetivo o frase descriptiva: <em>"Un lenguaje de programación"</em>.</td>
              </tr>
            </tbody>
          </table>
        `,
        gotcha: "Si la palabra con -ing está al principio de la oración funcionando como el sujeto (ej: <code>Compiling takes time</code>), gramaticalmente es un <strong>Gerund</strong> y se traduce en infinitivo: 'Compilar toma tiempo'.",
        exercises: [
          {
            id: "u1_ing_1",
            type: "multiple-choice",
            question: "In the sentence: 'Translating code into machine language is highly efficient', what is the grammatical function of 'Translating'?",
            options: ["Gerund (Noun)", "Present Participle (Continuous Verb)", "Adjective"],
            correctAnswer: 0,
            explanation: "La palabra <code>Translating</code> es la primera de la oración y actúa directamente como el **sujeto** gramatical (sustantivo). En inglés, cuando un verbo se posiciona como el sujeto, debe llevar obligatoriamente la forma <code>-ing</code> y clasifica como un **Gerund (Gerundio)**.<br><br><strong>Ejemplo:</strong> <em>\"<strong>Debugging</strong> is necessary.\"</em> (Depurar es necesario) o <em>\"<strong>Coding</strong> feels rewarding.\"</em> (Programar se siente gratificante).<br><br><div class='incorrect-breakdown'><strong>¿Por qué no las otras opciones?</strong><ul><li><code>Present Participle</code>: Para ser un participio continuo (verbo de acción progresiva), requeriría estar precedido por alguna forma del verbo 'to be' (am/is/are/was/were). Ejemplo: <em>\"The engine <strong>is translating</strong> code.\"</em> (El motor está traduciendo código).</li><li><code>Adjective</code>: Para ser un adjetivo, tendría que estar colocado inmediatamente antes de un sustantivo para calificarlo. Ejemplo: <em>\"We bought a <strong>translating</strong> software.\"</em> (Compramos un software traductor).</li></ul></div>"
          },
          {
            id: "u1_ing_2",
            type: "multiple-choice",
            question: "In the sentence: 'The team developed a scanning tool for malicious files', what is the function of 'scanning'?",
            options: ["Gerund (Noun)", "Present Participle (Continuous Verb)", "Adjective"],
            correctAnswer: 2,
            explanation: "Aquí <code>scanning</code> califica y describe directamente al sustantivo que viene inmediatamente después, <code>tool</code> (herramienta). De este modo, funciona gramaticalmente como un **Adjective (Adjetivo)**.<br><br><strong>Ejemplo:</strong> <em>\"The <strong>compiling</strong> process failed.\"</em> (El proceso de compilación falló).<br><br><div class='incorrect-breakdown'><strong>¿Por qué no las otras opciones?</strong><ul><li><code>Gerund</code>: No está actuando como sustantivo/sujeto de la oración ni va precedido directamente por una preposición sin calificar a un sustantivo posterior.</li><li><code>Present Participle</code>: No forma parte de un tiempo continuo ni describe una acción activa en progreso ligada a un sujeto a través de 'to be'.</li></ul></div>"
          },
          {
            id: "u1_ing_3",
            type: "multiple-choice",
            question: "In the sentence: 'The engine is processing the requested query', what is the function of 'processing'?",
            options: ["Gerund (Noun)", "Present Participle (Continuous Verb)", "Adjective"],
            correctAnswer: 1,
            explanation: "Aquí <code>processing</code> está precedido por el verbo auxiliar <code>is</code> (forma de 'to be') para expresar una acción en progreso continuo en el presente. Por ende, funciona como un **Present Participle (Participio Presente)**.<br><br><strong>Ejemplo:</strong> <em>\"The databases <strong>are replicating</strong> now.\"</em> (Las bases de datos se están replicando ahora).<br><br><div class='incorrect-breakdown'><strong>¿Por qué no las otras opciones?</strong><ul><li><code>Gerund</code>: Los gerundios representan sustantivos o conceptos abstractos, no verbos conjugados que describen una actividad activa en curso.</li><li><code>Adjective</code>: No está calificando a un sustantivo adyacente (el sustantivo más cercano es 'query' pero está separado por el objeto directo 'the requested').</li></ul></div>"
          }
        ]
      },
      {
        id: "u1_modals",
        title: "Modal Verbs & Rules",
        explanation: `
          <h3>Modales en el Contexto Técnico</h3>
          <p>Los verbos modales modifican el significado del verbo principal para indicar obligación, consejo, posibilidad o prohibición. En inglés de ingeniería, son vitales para manuales y requerimientos:</p>
          
          <ul>
            <li><strong>Obligación Fuerte / Regla Técnico:</strong>
              <br><code>must</code> (debe ser así obligatoriamente por diseño) o <code>have to</code> (obligación externa).
              <br><em>"Users <strong>must</strong> set a strong password."</em>
            </li>
            <li><strong>Falta de necesidad (Opcional):</strong>
              <br><code>don't have to</code> / <code>doesn't have to</code> (No es necesario, podés elegir no hacerlo).
              <br><em>"With modern compilers, you <strong>don't have to</strong> manage memory manually."</em>
            </li>
            <li><strong>Prohibición Estricta:</strong>
              <br><code>mustn't</code> (¡Está prohibido! Si lo hacés, rompes algo o violas seguridad).
              <br><em>"You <strong>mustn't</strong> share your private API keys."</em>
            </li>
            <li><strong>Recomendación / Buenas prácticas:</strong>
              <br><code>should</code> (deberías - consejo de optimización).
              <br><em>"Developers <strong>should</strong> write unit tests."</em>
            </li>
          </ul>
        `,
        gotcha: "<strong>¡ERROR COMÚN DE TRADUCCIÓN!</strong> <code>mustn't</code> significa prohibición ('no debes'). En cambio, <code>don't have to</code> significa opcionalidad/falta de obligación ('no tienes por qué / no hace falta que'). ¡No los confundas, significan cosas opuestas en las especificaciones!",
        exercises: [
          {
            id: "u1_mod_1",
            type: "multiple-choice",
            question: "If an action is optional and not strictly required in a software manual, which modal is correct?",
            options: ["You mustn't configure it.", "You don't have to configure it.", "You should to configure it."],
            correctAnswer: 1,
            explanation: "Para expresar que algo es **opcional** o que **no es obligatorio por falta de necesidad**, se utiliza la estructura <code>don't have to</code> (no tienes por qué / no hace falta).<br><br><strong>Ejemplo:</strong> <em>\"You <strong>don't have to</strong> install Docker to run Vite locally.\"</em> (No hace falta que instales Docker para correr Vite localmente).<br><br><div class='incorrect-breakdown'><strong>¿Por qué no las otras opciones?</strong><ul><li><code>You mustn't configure it</code>: <code>mustn't</code> indica **prohibición estricta**. Significa que *no debes bajo ninguna circunstancia* configurarlo porque romperías algo o causarías un error.</li><li><code>You should to configure it</code>: Es gramaticalmente incorrecta. El modal <code>should</code> exige ir seguido directamente por un infinitivo sin 'to' (bare infinitive). Debería ser <code>You should configure it</code>.</li></ul></div>"
          },
          {
            id: "u1_mod_2",
            type: "multiple-choice",
            question: "To prevent a security breach, the instruction says: 'You _________ upload production credentials to public GitHub repositories.'",
            options: ["don't have to", "mustn't", "should"],
            correctAnswer: 1,
            explanation: "Subir credenciales de producción a repositorios públicos representa una brecha crítica de seguridad y, por ende, está **estrictamente prohibido**. El verbo modal correcto para expresar prohibición absoluta es <code>mustn't</code>.<br><br><strong>Ejemplo:</strong> <em>\"You <strong>mustn't</strong> share production passwords under any circumstances.\"</em> (No debes compartir contraseñas de producción bajo ninguna circunstancia).<br><br><div class='incorrect-breakdown'><strong>¿Por qué no las otras opciones?</strong><ul><li><code>don't have to</code>: Indicaría opcionalidad (<em>\"no tienes por qué hacerlo si no quieres\"</em>), lo cual sería sumamente peligroso para una regla crítica de seguridad informática.</li><li><code>should</code>: Indicaría una recomendación positiva (<em>\"deberías subirlos\"</em>), lo cual es exactamente lo contrario a lo que dicta la seguridad informática básica.</li></ul></div>"
          }
        ]
      },
      {
        id: "u1_revision_capstone",
        title: "🏁 Unit 1: Revision Arena",
        explanation: `
          <h3>Arena de Revisión Final - Unit 1</h3>
          <p>Llegaste al final de la Unidad 1. Este espacio consolida todos los temas que estudiamos en un examen simulado de <strong>10 preguntas de alta exigencia académica</strong>.</p>
          <p>Preparate para poner a prueba tu entendimiento sobre traductores, infinitivos con/sin to, gerundios, adjetivos -ing, cláusulas relativas y verbos modales.</p>
          <div class="formula-box">
            <strong>Consejo del Arquitecto:</strong> Pensá el porqué gramatical de cada opción antes de hacer clic. ¡No vayas al voleo!
          </div>
        `,
        gotcha: "¡Esta arena evalúa trampas comunes! Recordá que las cláusulas relativas que llevan comas (Non-defining) nunca aceptan 'that', y que la combinación 'for + to + verbo' es un pecado capital en inglés.",
        exercises: [
          {
            id: "u1_rev_1",
            type: "fill-in-the-blank",
            question: "We use interpreter tools _________ (run) python scripts quickly at runtime.",
            correctAnswer: "to run",
            explanation: "Usamos el infinitivo con 'to' ('to run') para expresar el propósito de por qué usamos la herramienta ('para correr scripts...')."
          },
          {
            id: "u1_rev_2",
            type: "fill-in-the-blank",
            question: "Let the main database database_instance _________ (synchronize) with the replica.",
            correctAnswer: "synchronize",
            explanation: "El verbo 'let' (permitir/dejar) exige infinitivo sin 'to' (bare infinitive). Por lo tanto, el verbo permanece puro: 'synchronize'."
          },
          {
            id: "u1_rev_3",
            type: "multiple-choice",
            question: "In the sentence: 'Debugging complex code requires highly focused attention', 'Debugging' functions as a:",
            options: ["Gerund (Noun as Subject)", "Present Participle (Continuous Verb)", "Adjective"],
            correctAnswer: 0,
            explanation: "Actúa como el sujeto de la oración al comienzo de la misma, por ende cumple la función de sustantivo (Gerund)."
          },
          {
            id: "u1_rev_4",
            type: "multiple-choice",
            question: "In the sentence: 'The translating program encountered a syntax error at line 42', what is the role of 'translating'?",
            options: ["Gerund", "Present Participle", "Adjective"],
            correctAnswer: 2,
            explanation: "Modifica y describe directamente al sustantivo 'program' (programa traductor), de modo que actúa como un Adjetivo."
          },
          {
            id: "u1_rev_5",
            type: "multiple-choice",
            question: "Choose the correct modal: 'Developers _________ document public APIs. It is a mandatory company standard.'",
            options: ["must", "don't have to", "should"],
            correctAnswer: 0,
            explanation: "Dado que es un estándar mandatorio ('mandatory'), la opción correcta es 'must' (obligación absoluta)."
          },
          {
            id: "u1_rev_6",
            type: "multiple-choice",
            question: "Choose the correct modal: 'You _________ use semicolons in JavaScript, as they are mostly optional, but they represent a clean standard.'",
            options: ["mustn't", "don't have to", "should to"],
            correctAnswer: 1,
            explanation: "Como son opcionales, no hay obligación estricta de usarlos. Expresamos esta falta de necesidad con 'don't have to'."
          },
          {
            id: "u1_rev_7",
            type: "multiple-choice",
            question: "Choose the correct relative pronoun: 'The Rust compiler _________ we used to compile the backend is highly optimized.'",
            options: ["who", "whose", "that"],
            correctAnswer: 2,
            explanation: "Para referirnos a objetos (el compilador de Rust) en cláusulas especificativas (Defining), el pronombre correcto es 'that'."
          },
          {
            id: "u1_rev_8",
            type: "multiple-choice",
            question: "Identify the correct relative pronoun: 'C++, _________ was designed by Bjarne Stroustrup, is a highly performant compiled language.'",
            options: ["that", "which", "who"],
            correctAnswer: 1,
            explanation: "Es una cláusula explicativa (Non-defining, separada por comas). En estas cláusulas NUNCA se usa 'that' para objetos, se usa obligatoriamente 'which'."
          },
          {
            id: "u1_rev_9",
            type: "fill-in-the-blank",
            question: "A ___________ executes the instructions without generating a standalone binary machine file.",
            correctAnswer: "interpreter",
            explanation: "El intérprete (interpreter) lee y ejecuta las instrucciones en tiempo real sin producir un binario compilado independiente."
          },
          {
            id: "u1_rev_10",
            type: "multiple-choice",
            question: "Assembly is considered a ___________ language because it is heavily constrained by and close to the CPU architecture.",
            options: ["high-level", "low-level", "markup"],
            correctAnswer: 1,
            explanation: "Assembly es un lenguaje de bajo nivel (low-level), ya que mapea casi 1 a 1 con las instrucciones de la máquina."
          }
        ]
      }
    ]
  },
  {
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
  },
  {
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
  }
];
