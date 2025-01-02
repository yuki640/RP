// =====================
// Initialisation
// =====================

// Importation des données des héros et des scènes
import { heros } from './personnages.js';
import { scenes } from './scenes.js';

// Initialisation des propriétés du héros
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

// =====================
// Fonctions Utilitaires
// =====================

/**
 * Recherche une scène par ID.
 * @param {number} id - L'ID unique de la scène.
 * @returns {object|null} - Retourne l'objet scène correspondant ou null si non trouvé.
 */
function getSceneById(id) {
    return scenes.find(scene => scene.id === id);
}

// =====================
// Gestion de l'Inventaire
// =====================

/**
 * Met à jour l'affichage de l'inventaire dans le DOM.
 */
function afficherInventaire() {
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
function ajouterAInventaire(item) {
    hero.inventaire.push(item);
    localStorage.setItem('inventaire', JSON.stringify(hero.inventaire));
    afficherInventaire();
}

/**
 * Charge l'inventaire du localStorage.
 */
function chargerInventaire() {
    const savedInventaire = localStorage.getItem('inventaire');
    if (savedInventaire) {
        hero.inventaire = JSON.parse(savedInventaire);
        afficherInventaire();
    }
}

// =====================
// Gestion de l'Historique
// =====================

/**
 * Met à jour l'affichage de l'historique des lieux visités dans le DOM.
 */
function mettreAJourHistorique() {
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
function sauvegarderHistorique() {
    localStorage.setItem('lieuxVisites', JSON.stringify(hero.lieuxVisites));
}

/**
 * Charge l'historique des lieux visités depuis le localStorage.
 */
function chargerHistorique() {
    const lieuxVisites = localStorage.getItem('lieuxVisites');
    if (lieuxVisites) {
        hero.lieuxVisites = JSON.parse(lieuxVisites);
        mettreAJourHistorique();
    }
}

// =====================
// Affichage des Scènes
// =====================

/**
 * Affiche une scène en fonction de son ID.
 * @param {number} sceneId - L'ID unique de la scène.
 */
function afficherScene(sceneId) {
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
        assignerVoleur();
        alert("Vous avez refusé l'invitation du Roi. Il vous a désigné comme Voleur !");
    }

    // Sauvegarde de l'ID de la scène actuelle
    localStorage.setItem('currentSceneId', sceneId);
}

// =====================
// Gestion des Choix
// =====================

/**
 * Gère le choix sélectionné par l'utilisateur.
 * @param {object} choix - L'objet représentant le choix de l'utilisateur.
 */
function gererChoix(choix) {
    if (choix.action === "choisirClasse") {
        sauvegarderHistorique();
        localStorage.setItem('currentSceneId', 6);
        window.location.href = "./page/ChoixDuHero.html";
    } else if (choix.action === "ajouterPotion") {
        ajouterAInventaire({ nom: "Potion", image: "./images/potion.webp" });
        alert("Une potion a été ajoutée à votre inventaire !");
    } else if (choix.nextScene) {
        afficherScene(choix.nextScene);
    }
}

// =====================
// Gestion des Héros
// =====================

/**
 * Assigne le héros "Voleur" au joueur.
 */
function assignerVoleur() {
    const voleur = heros.find(h => h.nom === "Voleur");
    if (voleur) {
        hero = { ...hero, ...voleur.stats, name: voleur.nom, image: voleur.image };
        localStorage.setItem('hero', JSON.stringify(hero));
        afficherStatistiques();
    }
}

/**
 * Assigne un héros sélectionné au joueur.
 * @param {object} selectedHero - Héros sélectionné
 */
function assignerHero(selectedHero) {
    if (selectedHero) {
        hero = { ...hero, ...selectedHero.stats, name: selectedHero.nom, image: selectedHero.image };
        localStorage.setItem('hero', JSON.stringify(hero));
        afficherStatistiques();
    }
}

// =====================
// Gestion des Statistiques
// =====================

/**
 * Affiche les statistiques du joueur dans le DOM.
 */
function afficherStatistiques() {
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
function chargerHero() {
    const savedHero = localStorage.getItem('hero');
    if (savedHero) {
        hero = JSON.parse(savedHero);
        afficherStatistiques();
    }
}

// =====================
// Initialisation des Personnages
// =====================

/**
 * Charge les personnages dans la page ChoixDuHero.html.
 */
function chargerPersonnages() {
    const characterSelection = document.getElementById('character-selection');
    const modal = document.getElementById('modal');

    heros.slice(0, 3).forEach((hero, index) => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        card.innerHTML = `
            <img src="${hero.image}" alt="${hero.nom}">
            <h2>${hero.nom}</h2>
            <button data-index="${index}">Sélectionner</button>
        `;
        characterSelection.appendChild(card);
    });

    characterSelection.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const index = event.target.getAttribute('data-index');
            const selectedHero = heros[index];
            assignerHero(selectedHero);
            sauvegarderHistorique();
            window.location.href = "../index.html";
        }
    });
}

// =====================
// Initialisation de l'Application
// =====================

/**
 * Initialise l'application en fonction de la page actuelle.
 */
function init() {
    const currentSceneId = parseInt(localStorage.getItem('currentSceneId'), 10) || 1;
    chargerHero();
    chargerHistorique();
    chargerInventaire();

    if (window.location.pathname.includes("ChoixDuHero.html")) {
        chargerPersonnages();
    } else if (window.location.pathname.includes("index.html")) {
        afficherScene(currentSceneId);
    }

    // Navigation dans l'historique
    document.querySelector('.historique-arrow.left').addEventListener('click', () => {
        const historiqueWrapper = document.querySelector('.historique-wrapper');
        historiqueWrapper.scrollBy({ left: -200, behavior: 'smooth' });
    });

    document.querySelector('.historique-arrow.right').addEventListener('click', () => {
        const historiqueWrapper = document.querySelector('.historique-wrapper');
        historiqueWrapper.scrollBy({ left: 200, behavior: 'smooth' });
    });
}

// Lance l'application
init();
