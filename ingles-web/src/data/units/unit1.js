export const unit1Data = {
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
        },
        {
          id: "u1_vocab_1",
          type: "multiple-choice",
          question: "VOCABULARY — Match: 'A diagram representing the successive logical steps in a program.' Which term matches this definition?",
          options: ["source code", "flowchart", "debugging"],
          correctAnswer: 1,
          explanation: "Un <code>flowchart</code> (diagrama de flujo) es una representación gráfica de los pasos lógicos sucesivos de un programa. Es la primera herramienta visual que un programador usa antes de escribir código."
        },
        {
          id: "u1_vocab_2",
          type: "multiple-choice",
          question: "VOCABULARY — Match: 'Program instructions written in a particular computer language.' Which term matches?",
          options: ["machine code", "source code", "compiler"],
          correctAnswer: 1,
          explanation: "<code>Source code</code> (código fuente) son las instrucciones escritas por el programador en un lenguaje particular (Python, C++, etc.) antes de ser traducidas a código máquina."
        },
        {
          id: "u1_vocab_3",
          type: "multiple-choice",
          question: "VOCABULARY — Match: 'The techniques of detecting and correcting errors (or bugs) which may occur in programs.'",
          options: ["compiling", "flowcharting", "debugging"],
          correctAnswer: 2,
          explanation: "<code>Debugging</code> (depuración) es el proceso de detectar y corregir errores o bugs en los programas informáticos."
        },
        {
          id: "u1_vocab_4",
          type: "multiple-choice",
          question: "VOCABULARY — Match: 'The basic instructions understood by computers; it consists of 1s and 0s (binary code).'",
          options: ["machine code", "source code", "flowchart"],
          correctAnswer: 0,
          explanation: "<code>Machine code</code> (código máquina) consiste en instrucciones binarias (1s y 0s) que el procesador entiende directamente sin necesidad de traducción."
        }
      ]
    },
    {
      id: "u1_reading_comprehension",
      title: "Reading: Computer Languages",
      explanation: `
        <h3>Texto de comprensión: Computer Languages</h3>
        <p>Este tema evalúa tu comprensión del texto <em>"Computer Languages"</em> del booklet. Repasá los conceptos clave:</p>
        <ul>
          <li>Las computadoras solo entienden <strong>machine code</strong> (código binario de 1s y 0s).</li>
          <li><strong>Assembly languages</strong> usan abreviaturas (ADD, SUB, MPY) y son traducidas por un <strong>assembler</strong>.</li>
          <li>Los <strong>high-level languages</strong> (FORTRAN, COBOL, BASIC, PASCAL, C, C++, Java) son más cercanos al inglés.</li>
          <li>Un <strong>compiler</strong> traduce todo el código fuente a objeto de una sola vez; un <strong>interpreter</strong> traduce línea por línea.</li>
          <li><strong>Markup languages</strong> (HTML, XML, VoiceXML) no son lenguajes de programación, sino de formato y enlace de documentos.</li>
        </ul>
      `,
      gotcha: "No confundas <strong>programming languages</strong> (que ejecutan lógica: C++, Java, Python) con <strong>markup languages</strong> (que formatean documentos: HTML, XML). ¡El booklet hace esta distinción explícitamente!",
      exercises: [
        {
          id: "u1_read_1",
          type: "multiple-choice",
          question: "READING — Do computers understand human languages? Why / Why not?",
          options: [
            "Yes, modern computers understand spoken English natively.",
            "No, they can only understand machine code (binary: 1s and 0s).",
            "Yes, but only if using a high-level language."
          ],
          correctAnswer: 1,
          explanation: "Según el texto: <em>'Unfortunately for us, computers can't understand spoken English or any other natural language. The only language they can understand directly is machine code.'</em>"
        },
        {
          id: "u1_read_2",
          type: "multiple-choice",
          question: "READING — What is the function of an assembler?",
          options: [
            "It translates high-level languages into machine code.",
            "It translates assembly language programs into machine code.",
            "It interprets source code line by line at runtime."
          ],
          correctAnswer: 1,
          explanation: "Según el texto: <em>'The program is then translated into machine code by a piece of software called an assembler.'</em> El assembler trabaja específicamente con lenguajes assembly (de bajo nivel)."
        },
        {
          id: "u1_read_3",
          type: "multiple-choice",
          question: "READING — Why did software developers design high-level languages?",
          options: [
            "To make programs easier to write and overcome intercommunication problems between different computers.",
            "To replace machine code entirely and eliminate the need for compilers.",
            "To make programs run faster than assembly language."
          ],
          correctAnswer: 0,
          explanation: "Según el texto: <em>'To make the programs easier to write, and to overcome the problem of intercommunication between different types of computer, software developers designed high-level languages.'</em>"
        },
        {
          id: "u1_read_4",
          type: "fill-in-the-blank",
          question: "READING — Which language is used to teach the fundamentals of programming in universities? (one word)",
          correctAnswer: "PASCAL",
          explanation: "Según el texto: <em>'PASCAL was created in 1971. It is used in universities to teach the fundamentals of programming.'</em>"
        },
        {
          id: "u1_read_5",
          type: "multiple-choice",
          question: "READING — What is the difference between a compiler and an interpreter?",
          options: [
            "A compiler translates line by line; an interpreter translates all at once.",
            "A compiler converts the entire program into machine code in one go; an interpreter translates line by line as the program is running.",
            "Both do exactly the same thing but at different speeds."
          ],
          correctAnswer: 1,
          explanation: "Según el texto: <em>'A compiler translates the source code into object code - that is, it converts the entire program into machine code in one go. On the other hand, an interpreter translates the source code line by line as the program is running.'</em>"
        },
        {
          id: "u1_read_6",
          type: "multiple-choice",
          question: "READING — Why are HTML and VoiceXML called markup languages?",
          options: [
            "Because they execute logical instructions like programming languages.",
            "Because they use markup tags to format and link text files, not to execute logic.",
            "Because they were created after programming languages."
          ],
          correctAnswer: 1,
          explanation: "Según el texto: <em>'Markup languages use instructions, known as markup tags, to format and link text files.'</em> No ejecutan lógica de programación."
        },
        {
          id: "u1_read_c1",
          type: "fill-in-the-blank",
          question: "READING — Complete: '__________ allows us to create our own tags to describe our data better.'",
          correctAnswer: "XML",
          explanation: "Según el texto: <em>'XML, which stands for EXtensible Markup Language... XML enables us to define our own tags.'</em>"
        },
        {
          id: "u1_read_c2",
          type: "fill-in-the-blank",
          question: "READING — Complete: 'IBM developed __________ in the 1950s. It was the first high-level language in data processing.'",
          correctAnswer: "FORTRAN",
          explanation: "Según el texto: <em>'FORTRAN was developed by IBM in 1954 and is still used for scientific and engineering applications.'</em>"
        },
        {
          id: "u1_read_c3",
          type: "fill-in-the-blank",
          question: "READING — Complete: '__________ applets are small programs that run automatically on web pages and let you watch animated characters, play games, etc.'",
          correctAnswer: "Java",
          explanation: "Según el texto: <em>'Java was designed by Sun in 1995 to run on the Web. Java applets provide animation and interactive features on web pages.'</em>"
        },
        {
          id: "u1_read_c4",
          type: "fill-in-the-blank",
          question: "READING — Complete: 'This language is widely used in the business community. For example, ADD VAT to NET-PRICE could be used in a __________ program.'",
          correctAnswer: "COBOL",
          explanation: "Según el texto: <em>'COBOL (Common Business Oriented Language) was developed in 1959 and is mainly used for business applications.'</em> La sintaxis legible tipo inglés comercial es su sello distintivo."
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
        },
        {
          id: "u1_inf_lw1",
          type: "fill-in-the-blank",
          question: "LANGUAGE WORK — Make a sentence: 'expensive / set up a data-processing area' → It's expensive _________ set up a data-processing area.",
          correctAnswer: "to",
          explanation: "Después de adjetivos como 'expensive', usamos el infinitivo con 'to': <em>'It's expensive <strong>to</strong> set up a data-processing area.'</em>"
        },
        {
          id: "u1_inf_lw2",
          type: "fill-in-the-blank",
          question: "LANGUAGE WORK — Make a sentence: 'advisable / test the programs under different conditions' → It's advisable _________ test the programs under different conditions.",
          correctAnswer: "to",
          explanation: "Después de adjetivos como 'advisable', usamos el infinitivo con 'to': <em>'It's advisable <strong>to</strong> test the programs under different conditions.'</em>"
        },
        {
          id: "u1_inf_lw3",
          type: "fill-in-the-blank",
          question: "LANGUAGE WORK — Make a sentence: 'unusual / write a program that works correctly the first time' → It's unusual _________ write a program that works correctly the first time it's tested.",
          correctAnswer: "to",
          explanation: "Después del adjetivo 'unusual', se usa infinitivo con 'to': <em>'It's unusual <strong>to</strong> write a program that works correctly the first time.'</em>"
        },
        {
          id: "u1_wb_1",
          type: "fill-in-the-blank",
          question: "WORD BUILDING — '__________________ is the process of writing a program using a computer language.'",
          correctAnswer: "Programming",
          explanation: "De la familia de palabras program/programmers/programming/programmable, <code>Programming</code> (sustantivo/gerundio) describe el proceso de escribir un programa."
        },
        {
          id: "u1_wb_2",
          type: "fill-in-the-blank",
          question: "WORD BUILDING — 'A computer __________________ is a set of instructions that tells the computer how to do a specific task.'",
          correctAnswer: "program",
          explanation: "Un <code>program</code> (sustantivo) es un conjunto de instrucciones que le dice a la computadora cómo realizar una tarea específica."
        },
        {
          id: "u1_wb_3",
          type: "fill-in-the-blank",
          question: "WORD BUILDING — 'Most computer __________________ make a plan of the program before they write it.'",
          correctAnswer: "programmers",
          explanation: "<code>Programmers</code> (sustantivo plural) son las personas que crean los programas. Planifican antes de escribir código."
        },
        {
          id: "u1_wb_4",
          type: "fill-in-the-blank",
          question: "WORD BUILDING — 'Programs written in a high-level language require __________________ — that is, translation into machine code.'",
          correctAnswer: "compilation",
          explanation: "De la familia compile/compiler/compilation, <code>compilation</code> (sustantivo) es el proceso de traducir código fuente a código máquina."
        },
        {
          id: "u1_wb_5",
          type: "fill-in-the-blank",
          question: "WORD BUILDING — 'A source program is converted into machine code by software called a __________________.'",
          correctAnswer: "compiler",
          explanation: "Un <code>compiler</code> (sustantivo) es el software que convierte el código fuente a código máquina."
        },
        {
          id: "u1_wb_6",
          type: "fill-in-the-blank",
          question: "WORD BUILDING — 'Any error or malfunction of a computer program is known as a __________________.'",
          correctAnswer: "bug",
          explanation: "Un <code>bug</code> (sustantivo) es cualquier error o mal funcionamiento en un programa de computadora."
        },
        {
          id: "u1_wb_7",
          type: "fill-in-the-blank",
          question: "WORD BUILDING — 'The process of going through the code to identify the cause of errors and fixing them is called __________________.'",
          correctAnswer: "debugging",
          explanation: "<code>Debugging</code> (sustantivo/gerundio) es el proceso de recorrer el código para identificar y corregir errores."
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
        },
        {
          id: "u1_ing_lw1",
          type: "multiple-choice",
          question: "LANGUAGE WORK -ing — 'PCs generate graphics by performing mathematical calculations on data.' The -ing form 'performing' is:",
          options: ["Gerund (g)", "Present Participle (pp)", "Adjective (a)"],
          correctAnswer: 0,
          explanation: "'Performing' viene después de la preposición 'by', por lo tanto funciona como un <strong>gerundio</strong> (sustantivo verbal). Después de preposiciones, siempre usamos -ing como gerundio."
        },
        {
          id: "u1_ing_lw2",
          type: "multiple-choice",
          question: "LANGUAGE WORK -ing — 'Businesspeople use graphics to make information more interesting visually.' The -ing form 'interesting' is:",
          options: ["Gerund (g)", "Present Participle (pp)", "Adjective (a)"],
          correctAnswer: 2,
          explanation: "'Interesting' describe y califica al sustantivo 'information', por ende funciona como un <strong>adjetivo</strong>."
        },
        {
          id: "u1_ing_lw3",
          type: "multiple-choice",
          question: "LANGUAGE WORK -ing — 'She is designing a logo for the company.' The -ing form 'designing' is:",
          options: ["Gerund (g)", "Present Participle (pp)", "Adjective (a)"],
          correctAnswer: 1,
          explanation: "'Designing' está precedido por 'is' (verbo to be) formando el Present Continuous: 'is designing'. Funciona como <strong>present participle</strong>."
        },
        {
          id: "u1_ing_lw4",
          type: "multiple-choice",
          question: "LANGUAGE WORK -ing — 'If you need to make a presentation, I suggest using PowerPoint.' The -ing form 'using' is:",
          options: ["Gerund (g)", "Present Participle (pp)", "Adjective (a)"],
          correctAnswer: 0,
          explanation: "El verbo 'suggest' siempre va seguido de gerundio (-ing). 'Using' actúa como el objeto (sustantivo) del verbo suggest, por ende es un <strong>gerundio</strong>."
        },
        {
          id: "u1_ing_lw5",
          type: "multiple-choice",
          question: "LANGUAGE WORK -ing — 'The Internet is a network linking other networks.' The -ing form 'linking' is:",
          options: ["Gerund (g)", "Present Participle (pp)", "Adjective (a)"],
          correctAnswer: 1,
          explanation: "'Linking' funciona como una <strong>reduced relative clause</strong> (= 'a network <em>which links</em> other networks'). Es un <strong>present participle</strong> que describe una acción activa del sustantivo."
        },
        {
          id: "u1_ing_fix1",
          type: "fill-in-the-blank",
          question: "FIX THE MISTAKE — 'Computer animation is the process of create objects which move across the screen.' The correct form is: the process of _________ objects.",
          correctAnswer: "creating",
          explanation: "Después de la preposición 'of' se requiere obligatoriamente gerundio (-ing): <code>the process of creating</code>."
        },
        {
          id: "u1_ing_fix2",
          type: "fill-in-the-blank",
          question: "FIX THE MISTAKE — 'You can open the colour palette by click on the corresponding icon.' The correct form is: by _________ on the icon.",
          correctAnswer: "clicking",
          explanation: "Después de la preposición 'by' se requiere gerundio (-ing): <code>by clicking</code>."
        },
        {
          id: "u1_ing_fix3",
          type: "fill-in-the-blank",
          question: "FIX THE MISTAKE — 'CAD programs are very fast at to perform drawing functions.' The correct form is: fast at _________ drawing functions.",
          correctAnswer: "performing",
          explanation: "Después de la preposición 'at' se requiere gerundio (-ing), NO 'to + infinitive': <code>fast at performing</code>."
        },
        {
          id: "u1_ing_choice1",
          type: "multiple-choice",
          question: "CHOOSE — 'We use high-level languages because machine code is too difficult ________, understand and debug.'",
          options: ["read", "reading", "to read"],
          correctAnswer: 2,
          explanation: "Después del adjetivo 'difficult' usamos infinitivo con 'to': <code>too difficult to read</code>."
        },
        {
          id: "u1_ing_choice2",
          type: "multiple-choice",
          question: "CHOOSE — 'I went on the course ____________ how to be a better programmer.'",
          options: ["learn", "to learn", "for to learn"],
          correctAnswer: 1,
          explanation: "Para expresar propósito usamos infinitivo con 'to': <code>to learn</code>. La opción 'for to learn' es SIEMPRE incorrecta en inglés."
        },
        {
          id: "u1_ing_choice3",
          type: "multiple-choice",
          question: "CHOOSE — 'I'm not interested in ____________ that computer language.'",
          options: ["learn", "learning", "to learn"],
          correctAnswer: 1,
          explanation: "Después de la preposición 'in' se requiere gerundio: <code>interested in learning</code>."
        },
        {
          id: "u1_ing_choice4",
          type: "multiple-choice",
          question: "CHOOSE — 'He refuses ____________ the project with me.'",
          options: ["do", "doing", "to do"],
          correctAnswer: 2,
          explanation: "El verbo 'refuse' siempre va seguido de infinitivo con 'to': <code>refuses to do</code>."
        },
        {
          id: "u1_ing_choice5",
          type: "multiple-choice",
          question: "CHOOSE — 'The engineers warned the employees not ___________ the cables.'",
          options: ["touch", "touching", "to touch"],
          correctAnswer: 2,
          explanation: "El verbo 'warn' + objeto + infinitivo: <code>warned them not to touch</code>."
        },
        {
          id: "u1_ing_choice6",
          type: "multiple-choice",
          question: "CHOOSE — 'They may not _____________ to the conference.'",
          options: ["come", "coming", "to come"],
          correctAnswer: 0,
          explanation: "Después de verbos modales (may, can, must, should, will) usamos bare infinitive (sin 'to'): <code>may not come</code>."
        },
        {
          id: "u1_ing_choice7",
          type: "multiple-choice",
          question: "CHOOSE — '______________ in the IT industry is usually well paid.'",
          options: ["Work", "Working", "To work"],
          correctAnswer: 1,
          explanation: "Cuando un verbo funciona como sujeto de la oración, usamos gerundio (-ing): <code>Working in the IT industry...</code>"
        },
        {
          id: "u1_ing_choice8",
          type: "multiple-choice",
          question: "CHOOSE — 'Spyware can make your PC _____________ more slowly.'",
          options: ["perform", "performing", "to perform"],
          correctAnswer: 0,
          explanation: "El verbo causativo 'make' + objeto + bare infinitive (sin 'to'): <code>make your PC perform</code>."
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
        },
        {
          id: "u1_mod_lw1",
          type: "fill-in-the-blank",
          question: "MODAL VERBS — 'We __________ have a picnic tomorrow, but it depends on the weather.' (possibility)",
          correctAnswer: "might",
          explanation: "Para expresar posibilidad usamos <code>might</code>: algo que quizás pase, pero depende de las circunstancias."
        },
        {
          id: "u1_mod_lw2",
          type: "fill-in-the-blank",
          question: "MODAL VERBS — 'You ___________ wear a suit to the interview.' (Advice)",
          correctAnswer: "should",
          explanation: "Para dar un consejo o recomendación usamos <code>should</code>: deberías usar traje para la entrevista."
        },
        {
          id: "u1_mod_lw3",
          type: "multiple-choice",
          question: "MODAL VERBS — 'Mary, you ______________ come to your aunt's birthday next Saturday night.' (Lack of necessity)",
          options: ["must", "don't have to", "mustn't"],
          correctAnswer: 1,
          explanation: "Falta de necesidad = <code>don't have to</code>. No es obligatorio que Mary vaya, puede elegir."
        },
        {
          id: "u1_mod_lw4",
          type: "fill-in-the-blank",
          question: "MODAL VERBS — 'You __________ smoke here!' (Prohibition)",
          correctAnswer: "mustn't",
          explanation: "Para expresar prohibición estricta usamos <code>mustn't</code>: está terminantemente prohibido fumar aquí."
        },
        {
          id: "u1_mod_lw5",
          type: "fill-in-the-blank",
          question: "MODAL VERBS — '__________ I go to the toilet, please?' (request/ask for permission)",
          correctAnswer: "Can",
          explanation: "Para pedir permiso de manera informal usamos <code>Can</code>: ¿Puedo ir al baño?"
        },
        {
          id: "u1_mod_lw6",
          type: "fill-in-the-blank",
          question: "MODAL VERBS — 'Lisa __________ tidy her room before she goes out!' (personal obligation)",
          correctAnswer: "must",
          explanation: "Para expresar obligación personal fuerte usamos <code>must</code>: Lisa debe ordenar su habitación."
        },
        {
          id: "u1_mod_lw7",
          type: "multiple-choice",
          question: "MODAL VERBS — 'In Britain you __________ drive on the left.' (external obligation)",
          options: ["must", "have to", "should"],
          correctAnswer: 1,
          explanation: "Para expresar una obligación impuesta externamente (ley, regla) usamos <code>have to</code>. En Gran Bretaña, la ley te obliga a conducir por la izquierda."
        }
      ]
    },
    {
      id: "u1_relative_clauses",
      title: "Relative Clauses (who, which, where)",
      explanation: `
        <h3>Cláusulas Relativas</h3>
        <p>Las cláusulas relativas agregan información sobre un sustantivo usando pronombres relativos:</p>
        <ul>
          <li><strong>who</strong> (o that): para personas. <em>'Natasha is the person <strong>who</strong> sets the passwords.'</em></li>
          <li><strong>which</strong> (o that): para cosas. <em>'The hardware <strong>which</strong> we have in our offices is delicate.'</em></li>
          <li><strong>where</strong>: para lugares. <em>'The dining room <strong>where</strong> all our staff eat.'</em></li>
        </ul>
        <h4>Defining vs Non-defining</h4>
        <ul>
          <li><strong>Defining</strong>: información esencial, SIN comas. Se puede usar 'that'.</li>
          <li><strong>Non-defining</strong>: información extra, CON comas. NO se puede usar 'that'.</li>
        </ul>
      `,
      gotcha: "En cláusulas <strong>non-defining</strong> (con comas), NUNCA uses 'that'. Usá 'who' para personas y 'which' para cosas. <em>'Python, <strong>which</strong> is versatile, is popular.'</em> (NO: 'Python, that is versatile...')",
      exercises: [
        {
          id: "u1_rel_1",
          type: "fill-in-the-blank",
          question: "RELATIVE CLAUSES — 'Do you know the man ________ lives next door?'",
          correctAnswer: "who",
          explanation: "Se refiere a una persona ('the man'), por lo tanto usamos <code>who</code>."
        },
        {
          id: "u1_rel_2",
          type: "fill-in-the-blank",
          question: "RELATIVE CLAUSES — 'That's the gallery __________ had the Leonardo Da Vinci exhibition.'",
          correctAnswer: "which",
          explanation: "Se refiere a un lugar como cosa ('the gallery'), por lo tanto usamos <code>which</code> (o 'that')."
        },
        {
          id: "u1_rel_3",
          type: "fill-in-the-blank",
          question: "RELATIVE CLAUSES — 'Are those the people _______ are selling their house?'",
          correctAnswer: "who",
          explanation: "Se refiere a personas ('the people'), por lo tanto usamos <code>who</code>."
        },
        {
          id: "u1_rel_4",
          type: "fill-in-the-blank",
          question: "RELATIVE CLAUSES — 'Is that the bus __________ goes to the airport?'",
          correctAnswer: "which",
          explanation: "Se refiere a una cosa ('the bus'), por lo tanto usamos <code>which</code> (o 'that')."
        },
        {
          id: "u1_rel_5",
          type: "fill-in-the-blank",
          question: "RELATIVE CLAUSES — 'We walked past the school ___________ their children go.'",
          correctAnswer: "where",
          explanation: "Se refiere a un lugar ('the school') y la cláusula ya tiene sujeto ('their children'), por lo tanto usamos <code>where</code>."
        },
        {
          id: "u1_rel_6",
          type: "fill-in-the-blank",
          question: "RELATIVE CLAUSES — 'She's the woman _______ everyone is talking about.'",
          correctAnswer: "who",
          explanation: "Se refiere a una persona ('the woman'), usamos <code>who</code>."
        },
        {
          id: "u1_rel_7",
          type: "fill-in-the-blank",
          question: "RELATIVE CLAUSES — 'I took my laptop back to the shop ___________ I bought it.'",
          correctAnswer: "where",
          explanation: "Se refiere a un lugar ('the shop') y la cláusula ya tiene sujeto ('I'), usamos <code>where</code>."
        },
        {
          id: "u1_rel_8",
          type: "fill-in-the-blank",
          question: "RELATIVE CLAUSES — 'Antwerp is the city _________ I lived as a child.'",
          correctAnswer: "where",
          explanation: "Se refiere a un lugar ('the city') con sujeto existente ('I'), usamos <code>where</code>."
        },
        {
          id: "u1_rel_9",
          type: "fill-in-the-blank",
          question: "RELATIVE CLAUSES — 'Is there someone _________ can speak Arabic in your class?'",
          correctAnswer: "who",
          explanation: "Se refiere a una persona ('someone'), usamos <code>who</code>."
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
};
