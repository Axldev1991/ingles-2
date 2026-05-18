export function renderHeader(store) {
  const streakElement = document.getElementById('streak-value');
  const masteryElement = document.getElementById('mastery-value');
  
  if (streakElement) {
    streakElement.textContent = store.state.stats.streak;
  }
  
  if (masteryElement) {
    const scores = Object.values(store.state.stats.masteryScores);
    const avgMastery = scores.length > 0 
      ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) 
      : 0;
    masteryElement.textContent = `${avgMastery}%`;
  }
}
export default renderHeader;
