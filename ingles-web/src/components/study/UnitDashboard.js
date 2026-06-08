export function renderUnitDashboard(containerElement, store) {
  const { loadedUnit, activeUnitId, stats } = store.state;
  if (!loadedUnit) return;

  const mastery = stats.masteryScores[activeUnitId] || 0;
  
  let topicCardsHTML = '';
  loadedUnit.topics.forEach((topic, index) => {
    const totalEx = topic.exercises.length;
    const completedInTopic = topic.exercises.filter(ex => stats.completedExercises.includes(ex.id)).length;
    const isCompleted = totalEx > 0 && completedInTopic === totalEx;
    
    let badgeText = '📖 Pendiente';
    let badgeClass = 'badge-pending';
    if (isCompleted) {
      badgeText = '✅ Completado';
      badgeClass = 'badge-completed';
    } else if (completedInTopic > 0) {
      badgeText = `⏳ En curso (${completedInTopic}/${totalEx})`;
      badgeClass = 'badge-in-progress';
    } else {
      badgeText = `📖 Pendiente (${totalEx} ej.)`;
    }
    
    const pct = totalEx > 0 ? Math.round((completedInTopic / totalEx) * 100) : 0;
    
    topicCardsHTML += `
      <article class="topic-dashboard-card ${isCompleted ? 'completed' : ''}" id="topic-card-${index}">
        <div class="topic-card-header">
          <span class="badge ${badgeClass}">${badgeText}</span>
          <h3>${topic.title}</h3>
        </div>
        
        <div class="topic-card-progress">
          <div class="progress-info">
            <span>Progreso de Práctica</span>
            <span>${pct}%</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${pct}%"></div>
          </div>
        </div>
        
        <div class="topic-card-actions">
          <button class="topic-action-btn theory-btn" data-index="${index}" data-mode="theory">
            📖 Teoría
          </button>
          <button class="topic-action-btn practice-btn" data-index="${index}" data-mode="practice">
            ⚡ Práctica
          </button>
        </div>
      </article>
    `;
  });

  containerElement.innerHTML = `
    <section class="unit-dashboard-view">
      <header class="unit-dashboard-header">
        <div class="header-back-action">
          <button class="text-back-btn" id="dashboard-back-home">
            ⬅ Volver a las Unidades
          </button>
        </div>
        
        <div class="unit-header-main">
          <span class="unit-large-icon">${loadedUnit.icon}</span>
          <div class="unit-header-text">
            <h2>${loadedUnit.title}</h2>
            <p>${loadedUnit.description}</p>
          </div>
        </div>
        
        <div class="unit-mastery-banner">
          <div class="mastery-banner-info">
            <span class="banner-title">Dominio de la Unidad</span>
            <span class="banner-value">${mastery}%</span>
          </div>
          <div class="mastery-progress-track">
            <div class="mastery-progress-bar" style="width: ${mastery}%"></div>
          </div>
        </div>
      </header>
      
      <h3 class="dashboard-section-title">Temas para Aprender</h3>
      <div class="topic-cards-grid">
        ${topicCardsHTML}
      </div>
    </section>
  `;

  containerElement.querySelector('#dashboard-back-home').addEventListener('click', () => {
    store.dispatch('SHOW_WELCOME');
  });

  containerElement.querySelectorAll('.topic-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      const mode = e.currentTarget.getAttribute('data-mode');
      store.dispatch('SELECT_TOPIC', index);
      store.dispatch('SET_MODE', mode);
    });
  });
}

export default renderUnitDashboard;
