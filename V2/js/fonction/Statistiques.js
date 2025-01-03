import { hero } from '../element/data.js';
// =====================
// Gestion des Statistiques
// =====================

/**
 * Affiche les statistiques du joueur dans le DOM.
 */
export function afficherStatistiques() {
    const statisticsSection = document.querySelector('.statistics');
    if (!statisticsSection) return;

    const heroImage = statisticsSection.querySelector('.statistics-image img');
    heroImage.src = hero.image || '';
    heroImage.alt = hero.name ? `Image de ${hero.name}` : '';

    document.getElementById('vie').textContent = `Vie : ${hero.vie}`;
    document.getElementById('attaque').textContent = `Attaque : ${hero.attaque}`;
    document.getElementById('defense').textContent = `Défense : ${hero.defense}`;
    document.getElementById('mana').textContent = `Mana : ${hero.mana}`;
}

/**
 * Charge les informations du héros depuis le localStorage.
 */
export function chargerHero() {
    const savedHero = localStorage.getItem('hero');
    if (savedHero) {
        const parsedHero = JSON.parse(savedHero);
        Object.assign(hero, parsedHero); // Met à jour les propriétés de l'objet hero
        afficherStatistiques();
    }
}