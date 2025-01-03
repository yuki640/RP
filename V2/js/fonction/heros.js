import { heros } from '../element/personnages.js';
import { hero } from '../element/data.js';
import { afficherStatistiques } from './Statistiques.js';
import { afficherScene } from './scene.js';
import { ajouterAInventaire } from './Inventaire.js';
import { sauvegarderHistorique } from './Historique.js';


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
export function assignerVoleur() {
    const voleur = heros.find(h => h.nom === "Voleur");
    if (voleur) {
        Object.assign(hero, {
            name: voleur.nom,
            image: voleur.image,
            vie: voleur.stats.vie,
            attaque: voleur.stats.attaque,
            defense: voleur.stats.defense,
        });
        localStorage.setItem('hero', JSON.stringify(hero));
        afficherStatistiques();
    }
}

/**
 * Assigne un héros sélectionné au joueur.
 * @param {object} selectedHero - Héros sélectionné
 */
export function assignerHero(selectedHero) {
    if (selectedHero) {
        Object.assign(hero, {
            name: selectedHero.nom,
            image: selectedHero.image,
            vie: selectedHero.stats.vie,
            attaque: selectedHero.stats.attaque,
            defense: selectedHero.stats.defense,
        });
        localStorage.setItem('hero', JSON.stringify(hero));
        afficherStatistiques();
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
