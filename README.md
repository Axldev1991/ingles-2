# 📖 UTN FRA - Inglés II: Interactive Study Hub

Una plataforma web interactiva, moderna y premium diseñada específicamente para que los estudiantes de la UTN FRA puedan repasar, ejercitar y dominar los temas gramaticales de la materia Inglés II. La aplicación cuenta con explicaciones teóricas exhaustivas, trampas de examen (*gotchas*) y ejercicios desafiantes autoevaluativos con explicaciones didácticas de cada opción.

---

## ⚡ Guía de Inicio Rápido

Seguí estos pasos para levantar la aplicación localmente en tu entorno de desarrollo:

### 1. Clonar el repositorio y navegar a la carpeta de la web
```bash
git clone https://github.com/Axldev1991/ingles-2.git
cd ingles-2/ingles-web
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar el servidor de desarrollo local
```bash
npm run dev
```

### 4. Abrir la aplicación
El servidor levantará la aplicación en un puerto local. Por lo general, podés abrir en tu navegador:
👉 **[http://localhost:5173](http://localhost:5173)** (o el puerto que te indique la consola)

---

## 🛠️ Arquitectura de la Aplicación

La aplicación fue completamente refactorizada utilizando patrones de diseño de software modernos que promueven un acoplamiento débil y una alta cohesión:

| Componente | Rol en la Arquitectura |
| :--- | :--- |
| **Pub-Sub Central Store** | `src/store/appStore.js` centraliza el estado reactivo de toda la app (flujo de datos unidireccional). |
| **Carga Perezosa Asíncrona** | `src/data/loader.js` carga los módulos de datos por unidad dinámicamente mediante `import()`. |
| **Servicio de Persistencia** | `src/services/storage.js` maneja el guardado transparente y seguro de estadísticas en `localStorage`. |
| **Componentes Vanilla Puros** | `/src/components/` contiene elementos desacoplados (`Sidebar.js`, `StudyPanel.js`, `Header.js`) que renderizan la UI según el estado del Store. |

---

## 🌟 Características Clave

*   **Dashboard Interactivo de la Unidad**: Al seleccionar una unidad, visualizás el dominio de la unidad (`mastery meter`) y tarjetas compactas por tema con su estado actual (`Pendiente`, `En curso` o `Completado`).
*   **Modo de Enfoque con Stepper Circular**: Se elimina el scroll horizontal en títulos largos. Una barra de stepper circular minimalista (`①`, `②`, `③`...) permite saltar ágilmente entre temas.
*   **Sección de Teoría Completa**: Cada tema incluye explicaciones detalladas y alertas explícitas de **Gotchas** (trampas típicas que toman los docentes de la UTN FRA).
*   **Práctica Arena de Alta Exigencia**: 10 ejercicios complejos de autoevaluación por unidad (Capstone Arena) que cubren alternativas múltiples y rellenado de espacios en blanco (*fill-in-the-blank*).
*   **Feedback Inteligente y Explicativo**: Al responder, la app te dice de inmediato si está bien o mal, dando la justificación lingüística de por qué esa opción es la correcta y por qué las otras son incorrectas, acompañada de ejemplos reales para fijar el conocimiento.

---

## 📌 Comandos Útiles de Desarrollo

Dentro del directorio `ingles-web`, tenés acceso a los siguientes scripts en `package.json`:

```bash
# Iniciar el servidor local de desarrollo (Vite)
npm run dev

# Generar el bundle de producción optimizado
npm run build

# Previsualizar localmente el build de producción compilado
npm run preview
```

---

*Desarrollado con pasión para potenciar el aprendizaje académico. ¡Éxitos en el examen!*
