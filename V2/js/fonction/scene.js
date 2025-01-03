import { hero } from '../element/data.js';
import { scenes } from '../element/scenes.js';
import { mettreAJourHistorique, sauvegarderHistorique } from './Historique.js';
import { gererChoix } from './heros.js';

/**
 * Recherche une scène par ID.
 */
export function getSceneById(id) {
    return scenes.find(scene => scene.id === id);
}

/**
 * Affiche une scène en fonction de son ID.
 */
export function afficherScene(sceneId) {
    const scene = getSceneById(sceneId);
    if (!scene) {
        alert(`Erreur : La scène avec l'ID ${sceneId} n'existe pas.`);
        return;
    }

    // Mise à jour des éléments de la scène
    document.querySelector('.scenes-titre').textContent = scene.titre;
    const sceneImage = document.querySelector('.scenes-image img');
    sceneImage.src = scene.image;
    sceneImage.alt = `Image de la scène ${scene.titre}`;
    document.querySelector('.scenes-text').textContent = scene.description;

    // Ajout dans l'historique si non déjà visité
    if (!hero.lieuxVisites.some(lieu => lieu.nom === scene.lieux)) {
        hero.lieuxVisites.push({ nom: scene.lieux, image: scene.image });
        mettreAJourHistorique();
        sauvegarderHistorique();
    }

    // Mise à jour des choix de la scène
    const sceneChoix = document.querySelector('.scenes-choix');
    sceneChoix.innerHTML = '';
    scene.choices.forEach(choix => {
        const bouton = document.createElement('button');
        bouton.textContent = choix.text;
        bouton.addEventListener('click', () => gererChoix(choix));
        sceneChoix.appendChild(bouton);
    });

    // Gestion spéciale pour la scène ID 3
    if (sceneId === 3) {
        alert("Vous avez refusé l'invitation du Roi. Il vous a désigné comme Voleur !");
    }

    // Sauvegarde de l'ID de la scène actuelle
    localStorage.setItem('currentSceneId', sceneId);
}
