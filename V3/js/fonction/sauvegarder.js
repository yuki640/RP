// Importation des modules nécessaires
import { getSceneById, afficherScene } from './scene.js';
import { afficherStatistiques } from './Statistiques.js';
import { afficherInventaire } from './Inventaire.js';
import { mettreAJourHistorique } from './Historique.js';

// Sauvegarder la partie
export function sauvegarderPartie() {
    const gameState = {
        scene: getCurrentScene(), // Peut être un ID décimal comme 1.5
        stats: getHeroStats(),
        inventaire: getInventaire(),
        historique: getHistorique(),
    };

    localStorage.setItem('blueVentureSave', JSON.stringify(gameState));
    alert('Partie sauvegardée avec succès !');
    console.log('Données sauvegardées :', gameState);
}

export function chargerPartie() {
    const savedGame = localStorage.getItem('blueVentureSave');

    if (savedGame) {
        console.log('Données sauvegardées trouvées :', savedGame);
        const gameState = JSON.parse(savedGame);

        if (typeof gameState.scene === 'number') {
            loadScene(gameState.scene); // Gère les IDs décimaux
        } else {
            console.error(`L'ID de la scène "${gameState.scene}" est invalide.`);
            loadScene(1); // Charge la scène par défaut
        }

        setHeroStats(gameState.stats);
        setInventaire(gameState.inventaire);
        setHistorique(gameState.historique);
        alert('Partie chargée avec succès !');
    } else {
        console.warn('Aucune sauvegarde trouvée.');
        alert('Aucune sauvegarde trouvée.');
    }
}



// Réinitialiser la partie
export function reinitialiserPartie() {
    localStorage.removeItem('blueVentureSave');
    alert('Sauvegarde supprimée ! Réinitialisation en cours...');
    setTimeout(() => location.reload(), 500); // Recharge après un léger délai
}

// Fonction pour récupérer la scène actuelle
function getCurrentScene() {
    const currentSceneElement = document.querySelector('.scenes-titre');
    return currentSceneElement ? currentSceneElement.textContent : 'scene1';
}

// Fonction pour récupérer les statistiques du héros
function getHeroStats() {
    return {
        vie: document.getElementById('vie')?.textContent.replace('Vie : ', '') || '0',
        attaque: document.getElementById('attaque')?.textContent.replace('Attaque : ', '') || '0',
        defense: document.getElementById('defense')?.textContent.replace('Défense : ', '') || '0',
        mana: document.getElementById('mana')?.textContent.replace('Mana : ', '') || '0',
    };
}

// Fonction pour récupérer l'inventaire
function getInventaire() {
    const inventaireItems = Array.from(document.querySelectorAll('.inventaire-item'));
    return inventaireItems.map(item => item.textContent);
}

// Fonction pour récupérer l'historique
function getHistorique() {
    return Array.from(document.querySelectorAll('.historique-wrapper .historique-item'))
                .map(item => item.textContent);
}

// Charger une scène spécifique
export function loadScene(sceneId) {
    const scene = getSceneById(sceneId);
    if (scene) {
        afficherScene(sceneId);
    } else {
        console.warn(`La scène "${sceneId}" est introuvable. Chargement de la scène par défaut.`);
        const defaultScene = getSceneById(1); // Par défaut, charge la scène avec ID = 1
        if (defaultScene) {
            afficherScene(1);
        } else {
            console.error("Aucune scène par défaut n'est définie ou trouvée.");
        }
    }
}




// Mettre à jour les statistiques du héros
export function setHeroStats(stats) {
    document.getElementById('vie').textContent = `Vie : ${stats.vie}`;
    document.getElementById('attaque').textContent = `Attaque : ${stats.attaque}`;
    document.getElementById('defense').textContent = `Défense : ${stats.defense}`;
    document.getElementById('mana').textContent = `Mana : ${stats.mana}`;
    afficherStatistiques();
}

// Mettre à jour l'inventaire
export function setInventaire(inventaire) {
    const inventaireContainer = document.querySelector('.inventaire');
    inventaireContainer.innerHTML = ''; // Vide l'inventaire actuel
    inventaire.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('inventaire-item');
        div.textContent = item;
        inventaireContainer.appendChild(div);
    });
    afficherInventaire();
}

// Mettre à jour l'historique
export function setHistorique(historique) {
    const historiqueWrapper = document.querySelector('.historique-wrapper');
    historiqueWrapper.innerHTML = ''; // Vide l'historique actuel
    historique.forEach(event => {
        const div = document.createElement('div');
        div.classList.add('historique-item');
        div.textContent = event;
        historiqueWrapper.appendChild(div);
    });
    mettreAJourHistorique();
}
