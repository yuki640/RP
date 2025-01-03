// =====================
// Initialisation
// =====================

// Importation des données des héros et des scènes
import { hero } from './element/data.js';
import { chargerPersonnages  } from './fonction/heros.js';
import { afficherScene  } from './fonction/scene.js';
import { chargerInventaire } from './fonction/Inventaire.js';
import { chargerHistorique } from './fonction/Historique.js';
import { chargerHero } from './fonction/Statistiques.js';

// Initialisation des propriétés du héros


// =====================
// Initialisation de l'Application
// =====================

/**
 * Initialise l'application en fonction de la page actuelle.
 */
export function init() {
    const currentSceneId = parseInt(localStorage.getItem('currentSceneId'), 10) || 1;
    chargerHero();
    chargerHistorique();
    chargerInventaire();

    if (window.location.pathname.includes("ChoixDuHero.html")) {
        chargerPersonnages();
    } else if (window.location.pathname.includes("index.html")) {
        afficherScene(currentSceneId);
    }

    // Navigation dans l'historique
    document.querySelector('.historique-arrow.left').addEventListener('click', () => {
        const historiqueWrapper = document.querySelector('.historique-wrapper');
        historiqueWrapper.scrollBy({ left: -200, behavior: 'smooth' });
    });

    document.querySelector('.historique-arrow.right').addEventListener('click', () => {
        const historiqueWrapper = document.querySelector('.historique-wrapper');
        historiqueWrapper.scrollBy({ left: 200, behavior: 'smooth' });
    });
}
