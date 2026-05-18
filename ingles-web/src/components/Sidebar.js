export function renderSidebar(containerElement, store) {
  if (!containerElement) return;
  containerElement.innerHTML = '';
  
  const { unitsMetadata, activeUnitId, stats } = store.state;
  
  unitsMetadata.forEach(unit => {
    const li = document.createElement('li');
    const mastery = stats.masteryScores[unit.id] || 0;
    const isActive = activeUnitId === unit.id;
    
    li.innerHTML = `
      <button class="unit-btn ${isActive ? 'active' : ''}" id="btn-${unit.id}">
        <span class="unit-icon">${unit.icon}</span>
        <div class="unit-info">
          <h3>${unit.title}</h3>
          <p>${unit.topicsCount} temas • Dominio: ${mastery}%</p>
          <div class="progress-container">
            <div class="progress-bar" style="width: ${mastery}%"></div>
          </div>
        </div>
      </button>
    `;
    
    li.querySelector('button').addEventListener('click', () => {
      // Toggle SELECT_UNIT or bring back to welcome screen if clicking active? 
      // Clicking already active is fine to keep, or just re-select it
      store.dispatch('SELECT_UNIT', unit.id);
    });
    
    containerElement.appendChild(li);
  });
}

export default renderSidebar;
