import { hero } from '../element/data.js';


// =====================
// Gestion de l'Inventaire
// =====================

/**
 * Met à jour l'affichage de l'inventaire dans le DOM.
 */
export function afficherInventaire() {
    const inventaireContainer = document.querySelector('.inventaire-container');
    if (!inventaireContainer) return; // Vérifie que l'élément existe

    inventaireContainer.innerHTML = ''; // Vide le conteneur pour éviter les doublons

    hero.inventaire.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('inventaire-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.nom}">
            <span>${item.nom}</span>
        `;
        inventaireContainer.appendChild(itemDiv);
    });
}

/**
 * Ajoute un objet à l'inventaire.
 * @param {object} item - L'objet à ajouter (nom et image nécessaires).
 */
export function ajouterAInventaire(item) {
    hero.inventaire.push(item);
    localStorage.setItem('inventaire', JSON.stringify(hero.inventaire));
    afficherInventaire();
}

/**
 * Charge l'inventaire du localStorage.
 */
export function chargerInventaire() {
    const savedInventaire = localStorage.getItem('inventaire');
    if (savedInventaire) {
        hero.inventaire = JSON.parse(savedInventaire);
        afficherInventaire();
    }
}
