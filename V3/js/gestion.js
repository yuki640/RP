// Importation des données
import { hero } from './element/data.js';
import { scenes } from './element/scenes.js';
import { heros } from './element/personnages.js';

// Importation des fonctions principales
import { init } from './home.js';
import { afficherStatistiques, chargerHero } from './fonction/Statistiques.js';
import { getSceneById, afficherScene } from './fonction/scene.js';
import { gererChoix, assignerVoleur, assignerHero, chargerPersonnages } from './fonction/heros.js';
import { mettreAJourHistorique, sauvegarderHistorique, chargerHistorique } from './fonction/Historique.js';
import { afficherInventaire, ajouterAInventaire, chargerInventaire } from './fonction/Inventaire.js';
// Importation des fonctions de sauvegarde
import { sauvegarderPartie, chargerPartie, reinitialiserPartie } from './fonction/sauvegarder.js';


// Initialisation globale
init();

// Liaison des boutons de contrôle
document.getElementById('save-game').addEventListener('click', sauvegarderPartie);
document.getElementById('load-game').addEventListener('click', chargerPartie);
document.getElementById('reset-game').addEventListener('click', reinitialiserPartie);


