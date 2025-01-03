// =====================
// Initialisation
// =====================

// Importation des données des héros et des scènes
import { hero } from './element/data.js';
// Importe les données principales du héros.

import { chargerPersonnages } from './fonction/heros.js';
// Importe la fonction pour charger les personnages dans la page dédiée.

import { afficherScene } from './fonction/scene.js';
// Importe la fonction pour afficher une scène en fonction de son ID.

import { chargerInventaire } from './fonction/Inventaire.js';
// Importe la fonction pour charger l'inventaire du héros.

import { chargerHistorique } from './fonction/Historique.js';
// Importe la fonction pour charger l'historique des lieux visités.

import { chargerHero } from './fonction/Statistiques.js';
// Importe la fonction pour charger les informations du héros.

import { afficherInventaire } from './fonction/Inventaire.js';
// Importe la fonction pour afficher l'inventaire du héros.

// =====================
// Initialisation de l'Application
// =====================

/**
 * Initialise l'application en fonction de la page actuelle.
 */
export function init() {
    const currentSceneId = parseInt(localStorage.getItem('currentSceneId'), 10) || 1;
    // Récupère l'ID de la scène actuelle depuis le localStorage.
    // Si aucune donnée n'est trouvée, initialise à 1 (première scène).

    chargerHero();
    // Charge les données du héros depuis le localStorage et met à jour les statistiques dans le DOM.

    chargerHistorique();
    // Charge l'historique des lieux visités depuis le localStorage et met à jour l'affichage.

    chargerInventaire();
    // Charge l'inventaire du héros depuis le localStorage et met à jour l'affichage.

    afficherInventaire(); // Mise à jour de l'inventaire au chargement de la page

    if (window.location.pathname.includes("ChoixDuHero.html")) {
        // Si l'utilisateur est sur la page de choix du héros :
        chargerPersonnages();
        // Charge et affiche les personnages disponibles.
    } else if (window.location.pathname.includes("index.html")) {
        // Si l'utilisateur est sur la page principale :
        afficherScene(currentSceneId);
        // Affiche la scène correspondant à l'ID actuel.
    }

    // Navigation dans l'historique
    document.querySelector('.historique-arrow.left').addEventListener('click', () => {
        // Ajoute un événement pour naviguer vers la gauche dans l'historique.
        const historiqueWrapper = document.querySelector('.historique-wrapper');
        // Sélectionne l'élément contenant l'historique.

        historiqueWrapper.scrollBy({ left: -200, behavior: 'smooth' });
        // Fait défiler l'historique vers la gauche de 200 pixels avec un effet fluide.
    });

    document.querySelector('.historique-arrow.right').addEventListener('click', () => {
        // Ajoute un événement pour naviguer vers la droite dans l'historique.
        const historiqueWrapper = document.querySelector('.historique-wrapper');
        // Sélectionne l'élément contenant l'historique.

        historiqueWrapper.scrollBy({ left: 200, behavior: 'smooth' });
        // Fait défiler l'historique vers la droite de 200 pixels avec un effet fluide.
    });
}
