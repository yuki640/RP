import { hero } from '../element/data.js';
// Importe l'objet "hero" contenant les données principales, y compris l'inventaire.


// =====================
// Gestion de l'Inventaire
// =====================

/**
 * Met à jour l'affichage de l'inventaire dans le DOM.
 */
export function afficherInventaire() {
    const inventaireContainer = document.querySelector('.inventaire');
    if (!inventaireContainer) {
        console.error("Le conteneur .inventaire est introuvable dans le DOM.");
        return;
    }

    // Vide le contenu actuel
    inventaireContainer.innerHTML = '';

    // Parcourt chaque objet dans l'inventaire du héros
    hero.inventaire.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('inventaire-item');

        // Ajoute le contenu HTML pour chaque objet
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.nom}" class="inventaire-image">
            <span>${item.nom}</span>
        `;

        // Ajoute l'élément à la div inventaire
        inventaireContainer.appendChild(itemDiv);
    });

    console.log("Inventaire affiché :", hero.inventaire);
}



/**
 * Ajoute un objet à l'inventaire.
 * @param {object} item - L'objet à ajouter (nom et image nécessaires).
 */
export function ajouterAInventaire(item) {
    hero.inventaire.push(item);
    // Ajoute l'objet fourni en argument au tableau "inventaire" du héros.

    localStorage.setItem('inventaire', JSON.stringify(hero.inventaire));
    // Sauvegarde l'inventaire mis à jour dans le `localStorage` sous forme de chaîne JSON.

    afficherInventaire();
    // Met à jour l'affichage de l'inventaire dans le DOM pour refléter l'ajout.
}

/**
 * Charge l'inventaire du localStorage.
 */
export function chargerInventaire() {
    const savedInventaire = localStorage.getItem('inventaire');
    console.log("Inventaire récupéré :", savedInventaire); // Débogage

    if (savedInventaire) {
        hero.inventaire = JSON.parse(savedInventaire);
        console.log("Inventaire après parsing :", hero.inventaire); // Débogage
        afficherInventaire();
    }
}

