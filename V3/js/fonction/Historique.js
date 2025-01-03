import { hero } from '../element/data.js';
// Importe l'objet "hero" contenant les données principales du héros, y compris les lieux visités.


// =====================
// Gestion de l'Historique
// =====================

/**
 * Met à jour l'affichage de l'historique des lieux visités dans le DOM.
 */
export function mettreAJourHistorique() {
    const historiqueWrapper = document.querySelector('.historique-wrapper');
    // Sélectionne l'élément HTML qui contiendra l'affichage de l'historique des lieux.

    if (!historiqueWrapper) return;
    // Vérifie que l'élément existe. Si non, quitte la fonction pour éviter des erreurs.

    historiqueWrapper.innerHTML = '';
    // Vide le contenu existant pour éviter d'afficher plusieurs fois les mêmes lieux.

    hero.lieuxVisites.forEach(lieu => {
        // Parcourt chaque lieu visité enregistré dans le tableau "lieuxVisites" du héros.
        const lieuDiv = document.createElement('div');
        // Crée un nouvel élément "div" pour représenter un lieu visité.

        lieuDiv.classList.add('historique-item');
        // Ajoute une classe CSS pour permettre de styliser cet élément.

        lieuDiv.innerHTML = `
            <img src="${lieu.image}" alt="${lieu.nom}">
            <!-- Affiche une image représentant le lieu -->
            <span>${lieu.nom}</span>
            <!-- Affiche le nom du lieu -->
        `;
        historiqueWrapper.appendChild(lieuDiv);
        // Ajoute l'élément créé au conteneur d'historique dans le DOM.
    });
}

/**
 * Sauvegarde l'historique des lieux visités dans le localStorage.
 */
export function sauvegarderHistorique() {
    localStorage.setItem('lieuxVisites', JSON.stringify(hero.lieuxVisites));
    // Convertit le tableau "lieuxVisites" en chaîne JSON et le stocke dans le localStorage
    // sous la clé "lieuxVisites".
}

/**
 * Charge l'historique des lieux visités depuis le localStorage.
 */
export function chargerHistorique() {
    const lieuxVisites = localStorage.getItem('lieuxVisites');
    // Récupère les données enregistrées dans le localStorage sous la clé "lieuxVisites".

    if (lieuxVisites) {
        // Si des données existent :
        hero.lieuxVisites = JSON.parse(lieuxVisites);
        // Convertit la chaîne JSON en un tableau et met à jour "hero.lieuxVisites".
        mettreAJourHistorique();
        // Met à jour l'affichage de l'historique dans le DOM pour refléter les données chargées.
    }
}
