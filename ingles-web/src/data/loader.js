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
      { id: 'unit1', title: 'Unit 1: Technology & Specs', icon: '📝', topicsCount: 3, description: 'Vocabulario IT, comparativos y superlativos.' },
      { id: 'unit2', title: 'Unit 2: Gaming & AI Future', icon: '🎮', topicsCount: 3, description: 'Géneros de videojuegos y tiempos perfectos.' },
      { id: 'unit3', title: 'Unit 3: History of UTN FRA', icon: '🏛️', topicsCount: 4, description: 'Orígenes de la UTN FRA, voz pasiva y pasado perfecto.' }
    ];
  }
};
