import { heros } from '../element/personnages.js';
// Importe une liste de héros définis dans un fichier externe.

import { hero } from '../element/data.js';
// Importe un objet "hero" depuis un fichier contenant les données principales.

import { afficherStatistiques } from './Statistiques.js';
// Importe une fonction pour afficher les statistiques du héros.

import { afficherScene } from './scene.js';
// Importe une fonction pour afficher une scène dans le jeu.

import { ajouterAInventaire } from './Inventaire.js';
// Importe une fonction pour ajouter des objets à l'inventaire du héros.

import { sauvegarderHistorique } from './Historique.js';
// Importe une fonction pour sauvegarder l'historique des actions du joueur.

import { afficherInventaire } from './Inventaire.js';


// =====================
// Gestion des Choix
// =====================

/**
 * Gère le choix sélectionné par l'utilisateur.
 * @param {object} choix - L'objet représentant le choix de l'utilisateur.
 */
export function gererChoix(choix) {
    if (choix.action === "choisirClasse") {
        sauvegarderHistorique();
        console.log("Navigue vers la page de sélection des héros.");
        localStorage.setItem('currentSceneId', 6);
        window.location.href = "./page/ChoixDuHero.html";
    } else if (choix.nextScene) {
        console.log(`Affiche la scène suivante avec ID : ${choix.nextScene}`);
        afficherScene(choix.nextScene);
    }
    
}

// =====================
// Gestion des Héros
// =====================

/**
 * Assigne le héros "Voleur" au joueur.
 */
export function assignerVoleur() {
    const voleur = heros.find(h => h.nom === "Voleur");
    // Cherche un héros nommé "Voleur" dans la liste des héros.

    if (voleur) {
        // Si un héros correspondant est trouvé :
        Object.assign(hero, {
            name: voleur.nom,
            image: voleur.image,
            vie: voleur.stats.vie,
            attaque: voleur.stats.attaque,
            defense: voleur.stats.defense,
            mana: voleur.stats.mana,
            inventaire: [...voleur.inventaire],
        });
        localStorage.setItem('hero', JSON.stringify(hero));
        // Sauvegarde les données du héros dans le stockage local sous forme de JSON.
        afficherStatistiques();
        // Met à jour l'affichage des statistiques du héros.
        afficherInventaire(); // Affiche l'inventaire immédiatement après la sélection
    }
}

/**
 * Assigne un héros sélectionné au joueur.
 * @param {object} selectedHero - Héros sélectionné.
 */
export function assignerHero(selectedHero) {
    if (selectedHero) {
        Object.assign(hero, {
            name: selectedHero.nom,
            image: selectedHero.image,
            vie: selectedHero.stats.vie,
            attaque: selectedHero.stats.attaque,
            defense: selectedHero.stats.defense,
            mana: selectedHero.stats.mana,
            inventaire: [...selectedHero.inventaire],
        });
        localStorage.setItem('hero', JSON.stringify(hero));
        afficherStatistiques();
        afficherInventaire(); // Affiche l'inventaire immédiatement après la sélection
    }
}


// =====================
// Initialisation des Personnages
// =====================

/**
 * Charge les personnages dans la page ChoixDuHero.html.
 */
export function chargerPersonnages() {
    const characterSelection = document.getElementById('character-selection');
    // Récupère l'élément HTML qui contiendra les cartes des personnages.
    const modal = document.getElementById('modal');
    // Récupère l'élément HTML modal pour d'éventuelles interactions.

    heros.slice(0, 3).forEach((hero, index) => {
        console.log(`Héros n°${index} :`, hero); // Débogage
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
            console.log("Héros sélectionné :", selectedHero); // Débogage
            assignerHero(selectedHero);
            sauvegarderHistorique();
            window.location.href = "../index.html";
        }
    });
    
}
