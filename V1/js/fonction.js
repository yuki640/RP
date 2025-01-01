import { heros } from './personnages.js';
import { scenes } from './scenes.js';

// Objet représentant le joueur actuel
let hero = {
    id: null,
    name: "",
    image: null,
    vie: 0,
    attaque: 0,
    defense: 0,
    mana: 0,
    inventaire: [],
    lieuxVisites: [],
};

let currentSceneIndex = 0;

/**
 * Affiche une scène en fonction de l'index donné
 * @param {number} index - Index de la scène
 */
function afficherScene(index) {
    const scene = scenes[index];
    if (!scene) {
        console.error(`Aucune scène trouvée pour l'index ${index}`);
        return;
    }

    // Met à jour le titre, l'image et la description
    document.querySelector('.scenes-titre').textContent = scene.titre;
    const sceneImage = document.querySelector('.scenes-image img');
    sceneImage.src = scene.image;
    sceneImage.alt = `Image de la scène ${scene.titre}`;
    document.querySelector('.scenes-text').textContent = scene.description;

    // Ajoute le lieu de la scène dans l'historique
    const historique = document.querySelector('.historique');
    const lieuDiv = document.createElement('div');
    lieuDiv.textContent = scene.lieux;
    historique.appendChild(lieuDiv);

    // Met à jour les choix
    const sceneChoix = document.querySelector('.scenes-choix');
    sceneChoix.innerHTML = '';
    scene.choices.forEach(choix => {
        const bouton = document.createElement('button');
        bouton.textContent = choix.text;
        bouton.addEventListener('click', () => gererChoix(choix));
        sceneChoix.appendChild(bouton);
    });
}

/**
 * Gère un choix sélectionné par l'utilisateur
 * @param {object} choix - Objet représentant le choix
 */
function gererChoix(choix) {
    if (choix.action === "choisirClasse") {
        window.location.href = "./page/ChoixDuHero.html"; // Redirection
    } else if (choix.nextScene) {
        currentSceneIndex = choix.nextScene - 1;

        // Vérifie si c'est la scène où l'utilisateur devient "Voleur"
        if (scenes[currentSceneIndex].id === 3) {
            assignerVoleur();
        }

        afficherScene(currentSceneIndex);
    }
}

/**
 * Assigne le héros "Voleur" au joueur
 */
function assignerVoleur() {
    const voleur = heros.find(h => h.nom === "Voleur");
    if (voleur) {
        hero.id = voleur.id || null;
        hero.name = voleur.nom;
        hero.image = voleur.image;
        hero.vie = voleur.stats.vie;
        hero.attaque = voleur.stats.attaque;
        hero.defense = voleur.stats.defense;
        hero.mana = voleur.stats.mana;
        hero.inventaire = [...voleur.inventaire];

        afficherStatistiques();
    } else {
        console.error("Le héros 'Voleur' n'a pas été trouvé.");
    }
}

/**
 * Charge les informations du héros choisi depuis le localStorage
 */
function chargerHero() {
    const savedHero = localStorage.getItem('hero');
    if (savedHero) {
        Object.assign(hero, JSON.parse(savedHero));
        afficherStatistiques();
    }
}

/**
 * Affiche les statistiques du joueur
 */
function afficherStatistiques() {
    const statisticsSection = document.querySelector('.statistics');
    const heroImage = statisticsSection.querySelector('.statistics-image img');
    heroImage.src = hero.image || '';
    heroImage.alt = hero.name ? `Image de ${hero.name}` : '';

    document.getElementById('vie').textContent = `Vie : ${hero.vie}`;
    document.getElementById('attaque').textContent = `Attaque : ${hero.attaque}`;
    document.getElementById('defense').textContent = `Défense : ${hero.defense}`;
    document.getElementById('mana').textContent = `Mana : ${hero.mana}`;
}

// Charger le héros au démarrage
chargerHero();

// Lancer la première scène
document.querySelector('.scenes-choix button').addEventListener('click', () => afficherScene(currentSceneIndex));