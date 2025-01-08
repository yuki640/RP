import { hero } from '../element/data.js';
// Importe l'objet "hero" contenant les données du héros.

import { scenes } from '../element/scenes.js';
// Importe une liste de scènes définies dans un fichier externe.

import { mettreAJourHistorique, sauvegarderHistorique } from './Historique.js';
// Importe des fonctions pour gérer l'historique des lieux visités.

import { gererChoix } from './heros.js';
// Importe une fonction pour gérer les choix effectués par le joueur.

import { assignerVoleur } from './heros.js';
// Importe une fonction pour assigner la classe "Voleur" au héros.

/**
 * Recherche une scène par ID.
 * @param {number} id - L'ID de la scène à rechercher.
 * @returns {object} La scène correspondante ou undefined si elle n'existe pas.
 */
export function getSceneById(sceneId) {
    const scene = scenes.find(scene => scene.id === sceneId);
    if (!scene) {
        console.warn(`La scène avec l'ID "${sceneId}" n'existe pas.`);
    }
    return scene;
}



/**
 * Affiche une scène en fonction de son ID.
 * @param {number} sceneId - L'ID de la scène à afficher.
 */
export function afficherScene(sceneId) {
    const scene = getSceneById(sceneId);
    // Récupère la scène correspondante à l'ID fourni.

    if (!scene) {
        // Si la scène n'est pas trouvée, affiche un message d'erreur.
        alert(`Erreur : La scène avec l'ID ${sceneId} n'existe pas.`);
        return;
    }

    // Mise à jour des éléments de la scène
    document.querySelector('.scenes-titre').textContent = scene.titre;
    // Met à jour le titre de la scène affiché dans le DOM.

    const sceneImage = document.querySelector('.scenes-image img');
    // Sélectionne l'élément image de la scène.

    sceneImage.src = scene.image;
    // Met à jour la source de l'image avec celle de la scène.

    sceneImage.alt = `Image de la scène ${scene.titre}`;
    // Met à jour le texte alternatif de l'image pour l'accessibilité.

    document.querySelector('.scenes-text').textContent = scene.description;
    // Met à jour le texte de description de la scène.

    // Ajout dans l'historique si non déjà visité
    if (!hero.lieuxVisites.some(lieu => lieu.nom === scene.lieux)) {
        // Vérifie si le lieu de la scène n'est pas déjà dans l'historique.

        hero.lieuxVisites.push({ nom: scene.lieux, image: scene.image });
        // Ajoute le lieu de la scène au tableau "lieuxVisites" du héros.

        mettreAJourHistorique();
        // Met à jour l'affichage de l'historique dans le DOM.

        sauvegarderHistorique();
        // Sauvegarde l'historique dans le localStorage.
    }

    // Mise à jour des choix de la scène
    const sceneChoix = document.querySelector('.scenes-choix');
    // Sélectionne le conteneur pour afficher les choix disponibles.

    sceneChoix.innerHTML = '';
    // Vide le conteneur pour éviter d'afficher des choix obsolètes.

    scene.choices.forEach(choix => {
        // Parcourt les choix disponibles pour la scène.
        const bouton = document.createElement('button');
        // Crée un bouton pour chaque choix.

        bouton.textContent = choix.text;
        // Définit le texte du bouton correspondant à l'option.

        bouton.addEventListener('click', () => gererChoix(choix));
        // Ajoute un gestionnaire d'événement qui gère l'action associée au choix.

        sceneChoix.appendChild(bouton);
        // Ajoute le bouton au conteneur des choix.
    });

    // Gestion spéciale pour la scène ID 3
    if (sceneId === 3) {
        // Vérifie si la scène actuelle a l'ID 3.
        assignerVoleur();
        // Assigne la classe "Voleur" au héros.

        alert("Vous avez refusé l'invitation du Roi. Il vous a désigné comme Voleur !");
        // Affiche un message pour informer le joueur de la conséquence.
    }

    // Sauvegarde de l'ID de la scène actuelle
    localStorage.setItem('currentSceneId', sceneId);
    // Stocke l'ID de la scène actuelle dans le localStorage pour une reprise ultérieure.
}
