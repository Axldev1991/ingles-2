export function renderWelcomeScreen(containerElement, store) {
  containerElement.innerHTML = `
    <article class="welcome-screen">
      <span style="font-size: 4rem;" role="img" aria-label="Graduation Cap">🎓</span>
      <h2>¡Te damos la bienvenida al UTN Inglés II Study Hub!</h2>
      <p>Diseñamos este panel interactivo para ayudarte a triturar el examen técnico. 
      Podés estudiar la teoría de cada unidad directamente del booklet extraído, hacer ejercicios con corrección inteligente y hacer un seguimiento real de tu dominio de la materia.</p>
      
      <div style="display: flex; gap: 16px; margin-top: 10px;">
        <button class="start-btn" id="start-btn">Comenzar a Estudiar</button>
      </div>
    </article>
  `;
  
  containerElement.querySelector('#start-btn').addEventListener('click', () => {
    const units = store.state.unitsMetadata;
    if (units.length > 0) {
      store.dispatch('SELECT_UNIT', units[0].id);
    }
  });
}
