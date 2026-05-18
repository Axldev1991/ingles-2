const KEY = 'utn_ingles_2_progress';

export const storageService = {
  load(defaultStats) {
    const data = localStorage.getItem(KEY);
    if (!data) return defaultStats;
    try {
      return { ...defaultStats, ...JSON.parse(data) };
    } catch (e) {
      console.error('Error loading state from localStorage:', e);
      return defaultStats;
    }
  },
  save(stats) {
    try {
      localStorage.setItem(KEY, JSON.stringify(stats));
    } catch (e) {
      console.error('Error saving state to localStorage:', e);
    }
  }
};
