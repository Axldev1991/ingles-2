export const unitLoader = {
  async loadUnit(unitId) {
    switch (unitId) {
      case 'unit1':
        const u1 = await import('./units/unit1.js');
        return u1.unit1Data;
      case 'unit2':
        const u2 = await import('./units/unit2.js');
        return u2.unit2Data;
      case 'unit3':
        const u3 = await import('./units/unit3.js');
        return u3.unit3Data;
      default:
        throw new Error(`Unknown unit: ${unitId}`);
    }
  },
  
  getUnitsMetadata() {
    return [
      { id: 'unit1', title: 'Unit 1: Technology & Specs', icon: '💻', topicsCount: 7, description: 'Vocabulario clave de IT, lectura sobre lenguajes de programación, e infinitivos con o sin \'to\'.' },
      { id: 'unit2', title: 'Unit 2: Game Development & AI Support', icon: '🎮', topicsCount: 8, description: 'Vocabulario de videojuegos y atención al cliente, tiempos perfectos y voz pasiva.' },
      { id: 'unit3', title: 'Unit 3: History of UTN FRA', icon: '🏛️', topicsCount: 7, description: 'Orígenes y evolución de la UTN FRA, junto a herramientas gramaticales avanzadas de reporte (Voz Pasiva y Past Perfect).' }
    ];
  }
};
