import { hero } from '../element/data.js';
// Importe l'objet "hero" contenant les données du joueur.

// =====================
// Gestion des Statistiques
// =====================

/**
 * Affiche les statistiques du joueur dans le DOM.
 */
export function afficherStatistiques() {
    const statisticsSection = document.querySelector('.statistics');
    // Sélectionne l'élément HTML contenant la section des statistiques.

    if (!statisticsSection) return;
    // Si la section des statistiques n'existe pas dans le DOM, la fonction quitte pour éviter des erreurs.

    const heroImage = statisticsSection.querySelector('.statistics-image img');
    // Sélectionne l'image du héros dans la section des statistiques.

    heroImage.src = hero.image || '';
    // Met à jour la source de l'image avec celle du héros, ou une chaîne vide si elle n'existe pas.

    heroImage.alt = hero.name ? `Image de ${hero.name}` : '';
    // Met à jour le texte alternatif de l'image avec le nom du héros, ou une chaîne vide si le nom n'est pas défini.

    document.getElementById('vie').textContent = `Vie : ${hero.vie}`;
    // Met à jour l'affichage des points de vie du héros.

    document.getElementById('attaque').textContent = `Attaque : ${hero.attaque}`;
    // Met à jour l'affichage des points d'attaque du héros.

    document.getElementById('defense').textContent = `Défense : ${hero.defense}`;
    // Met à jour l'affichage des points de défense du héros.

    document.getElementById('mana').textContent = `Mana : ${hero.mana}`;
    // Met à jour l'affichage des points de mana du héros.
}

/**
 * Charge les informations du héros depuis le localStorage.
 */
export function chargerHero() {
    const savedHero = localStorage.getItem('hero');
    // Récupère les données du héros enregistrées dans le localStorage.

    if (savedHero) {
        // Si des données sont trouvées :
        const parsedHero = JSON.parse(savedHero);
        // Convertit les données récupérées de JSON en un objet JavaScript.

        Object.assign(hero, parsedHero);
        // Met à jour les propriétés de l'objet "hero" avec celles chargées du localStorage.

        afficherStatistiques();
        // Met à jour l'affichage des statistiques dans le DOM pour refléter les données chargées.
    }
}
