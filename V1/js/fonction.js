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

// Index actuel de la scène, commence à 0 (première scène du tableau `scenes`)
let currentSceneIndex = 0;

/**
 * Fonction pour afficher une scène en fonction de son index dans le tableau `scenes`
 * @param {number} index - L'index de la scène à afficher
 */
function afficherScene(index) {
    const scene = scenes[index]; // Récupère la scène correspondante

    // Met à jour le titre de la scène
    document.querySelector('.scenes-titre').textContent = scene.titre;

    // Met à jour l'image de la scène
    const sceneImage = document.querySelector('.scenes-imgage img');
    sceneImage.src = scene.image;
    sceneImage.alt = `Image de la scène ${scene.titre}`;

    // Met à jour la description de la scène
    document.querySelector('.scenes-text').textContent = scene.description;

    // Ajoute le lieu de la scène dans l'historique
    const historique = document.querySelector('.Historique');
    const lieuDiv = document.createElement('div');
    lieuDiv.textContent = scene.lieux;
    historique.appendChild(lieuDiv);

    // Met à jour les choix
    const sceneChoix = document.querySelector('.scenes-Choix');
    sceneChoix.innerHTML = ''; // Vide les anciens choix
    scene.choices.forEach(choix => {
        const bouton = document.createElement('button');
        bouton.textContent = choix.text; // Texte du choix
        bouton.addEventListener('click', () => gererChoix(choix)); // Gestionnaire d'événement pour le choix
        sceneChoix.appendChild(bouton);
    });

    // Ajoute une transition visuelle
    const sceneElements = document.querySelectorAll('.scenes-titre, .scenes-text, .scenes-imgage img');
    sceneElements.forEach(el => el.classList.add('hidden')); // Masque les éléments
    setTimeout(() => {
        sceneElements.forEach(el => el.classList.remove('hidden')); // Affiche après une courte transition
    }, 500);
}

/**
 * Fonction pour gérer un choix sélectionné par le joueur
 * @param {object} choix - L'objet représentant le choix du joueur
 */
function gererChoix(choix) {
    if (choix.nextScene) {
        currentSceneIndex = choix.nextScene - 1; // Met à jour l'index pour la prochaine scène

        // Vérifie si c'est la scène 3 pour assigner "Voleur" au joueur
        if (scenes[currentSceneIndex].id === 3) {
            assignerVoleur();
        }

        afficherScene(currentSceneIndex); // Affiche la scène suivante
    } else if (choix.action) {
        if (choix.action === "choisirClasse") {
            window.location.href = "ChoixDuHero.html"; // Redirige vers une autre page
        }
    }
}

/**
 * Fonction pour attribuer le héros "Voleur" au joueur
 */
function assignerVoleur() {
    const Voleur = heros.find(h => h.nom === "Voleur"); // Recherche avec "nom"
    if (Voleur) {
        hero.id = Voleur.id || null; // Assure que l'id est attribué
        hero.name = Voleur.nom; // Utilise "nom" pour le nom du héros
        hero.image = Voleur.image;
        hero.vie = Voleur.stats.vie; // Les stats sont dans un objet "stats"
        hero.attaque = Voleur.stats.attaque;
        hero.defense = Voleur.stats.defense;
        hero.mana = Voleur.stats.mana;
        hero.inventaire = [...Voleur.inventaire];

        // Met à jour l'affichage des statistiques
        afficherStatistiques();
    } else {
        console.error("Le héros 'Voleur' n'a pas été trouvé.");
    }
}



/**
 * Fonction pour afficher les statistiques du joueur
 */
function afficherStatistiques() {
    const statisticsSection = document.querySelector('.statistics');

    // Met à jour l'image du héros
    const heroImage = statisticsSection.querySelector('.statistics-image img');
    heroImage.src = hero.image; // Source de l'image
    heroImage.alt = `Image de ${hero.name}`; // Texte alternatif

    // Met à jour les statistiques
    document.getElementById('vie').textContent = `Vie : ${hero.vie}`;
    document.getElementById('attaque').textContent = `Attaque : ${hero.attaque}`;
    document.getElementById('defense').textContent = `Défense : ${hero.defense}`;
    document.getElementById('mana').textContent = `Mana : ${hero.mana}`;
}


// Affiche la première scène au démarrage
document.querySelector('.scenes-Choix button').addEventListener('click', () => afficherScene(currentSceneIndex));
