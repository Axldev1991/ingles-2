import { historyData } from './history.js';
import { passiveVoiceData } from './passive_voice.js';
import { readingData } from './reading.js';
import { passiveVoiceLwData } from './passive_voice_lw.js';
import { pastPerfectData } from './past_perfect.js';
import { pastPerfectLwData } from './past_perfect_lw.js';
import { revisionCapstoneData } from './revision_capstone.js';

export const unit3Data = {
  id: "unit3",
  title: "Unit 3: History of UTN FRA",
  icon: "🏛️",
  description: "Orígenes y evolución de la UTN Facultad Regional Avellaneda, junto a herramientas gramaticales avanzadas de reporte (Voz Pasiva y Past Perfect).",
  topics: [
    historyData,
    passiveVoiceData,
    readingData,
    passiveVoiceLwData,
    pastPerfectData,
    pastPerfectLwData,
    revisionCapstoneData
  ]
};
