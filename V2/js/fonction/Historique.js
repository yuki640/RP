import { hero } from '../element/data.js';

// =====================
// Gestion de l'Historique
// =====================

/**
 * Met à jour l'affichage de l'historique des lieux visités dans le DOM.
 */
export function mettreAJourHistorique() {
    const historiqueWrapper = document.querySelector('.historique-wrapper');
    if (!historiqueWrapper) return; // Vérifie que l'élément existe

    historiqueWrapper.innerHTML = ''; // Vide l'historique pour éviter les doublons

    hero.lieuxVisites.forEach(lieu => {
        const lieuDiv = document.createElement('div');
        lieuDiv.classList.add('historique-item');
        lieuDiv.innerHTML = `
            <img src="${lieu.image}" alt="${lieu.nom}">
            <span>${lieu.nom}</span>
        `;
        historiqueWrapper.appendChild(lieuDiv);
    });
}

/**
 * Sauvegarde l'historique des lieux visités dans le localStorage.
 */
export function sauvegarderHistorique() {
    localStorage.setItem('lieuxVisites', JSON.stringify(hero.lieuxVisites));
}

/**
 * Charge l'historique des lieux visités depuis le localStorage.
 */
export function chargerHistorique() {
    const lieuxVisites = localStorage.getItem('lieuxVisites');
    if (lieuxVisites) {
        hero.lieuxVisites = JSON.parse(lieuxVisites);
        mettreAJourHistorique();
    }
}
