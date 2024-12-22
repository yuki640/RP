// On importe les données depuis d'autres fichiers JavaScript :
import { heros } from "./personnages.js";
import { scenes } from "./scenes.js";

// Objet 'joueur' qui stocke toutes les informations relatives au joueur actuel :
let joueur = {
  hero: null,
  image: null,
  inventaire: [],
  lieuxVisites: [],
};

// Cette fonction affiche le bloc de choix de personnage afin que le joueur puisse sélectionner son héros.
// Elle récupère la zone "choix-personnage" dans le HTML et crée dynamiquement des boutons et images pour chaque héros disponible.
function afficherChoixHeros() {
  const choixPersonnageDiv = document.getElementById("choix-personnage");
  choixPersonnageDiv.style.display = "block";
  choixPersonnageDiv.innerHTML = `<h2>Choisissez votre héros</h2>`;

  // On parcourt tous les héros disponibles et on crée un bloc (div) pour chacun
  heros.forEach((hero) => {
    const heroDiv = document.createElement("div");
    heroDiv.className = "personnage";

    // On insère l'image, le nom, la description du héros, ainsi qu'un bouton pour le choisir
    heroDiv.innerHTML = `
            <img src="${hero.image}" alt="${hero.nom}">
            <h3>${hero.nom}</h3>
            <p>${hero.description}</p>
            <button onclick="choisirHero('${hero.nom}')">Choisir</button>
        `;

    choixPersonnageDiv.appendChild(heroDiv);
  });

  // On cache la scène au moment du choix du héros, car on est encore en phase de sélection
  document.getElementById("scene").style.display = "none";
}

// Cette fonction est appelée lorsque le joueur clique sur "Choisir" pour un héros donné.
// Elle met à jour l'objet joueur avec le héros choisi, puis affiche une confirmation.
window.choisirHero = function (nomHero) {
  // On trouve le héros choisi grâce à son nom
  joueur.hero = heros.find((hero) => hero.nom === nomHero);
  // On cache la zone de choix de personnage
  document.getElementById("choix-personnage").style.display = "none";
  // On affiche une fenêtre de confirmation pour que le joueur valide son choix
  confirmerChoixHero();
};

// Cette fonction crée une fenêtre de confirmation qui demande si le joueur est sûr de son choix de héros.
function confirmerChoixHero() {
  const overlay = document.getElementById("confirmation-overlay");
  overlay.style.display = "block"; // On affiche un fond transparent gris pour mettre en valeur la confirmation

  const confirmationDiv = document.createElement("div");
  confirmationDiv.className = "confirmation";
  confirmationDiv.innerHTML = `
        <img src="${joueur.hero.image}" alt="${joueur.hero.nom}">
        <h2>Êtes-vous sûr de vouloir choisir ${joueur.hero.nom} ?</h2>
        <button onclick="validerHero()">Confirmer</button>
        <button onclick="annulerConfirmation()">Changer</button>
    `;
  // On ajoute ce bloc de confirmation au corps de la page
  document.body.appendChild(confirmationDiv);
}

// Cette fonction est appelée lorsque le joueur confirme son choix de héros.
// Elle ferme la fenêtre de confirmation, définit l'inventaire du joueur et démarre réellement l'aventure.
window.validerHero = function () {
  const confirmationDiv = document.querySelector(".confirmation");
  if (confirmationDiv) confirmationDiv.remove(); // On retire la fenêtre de confirmation

  const overlay = document.getElementById("confirmation-overlay");
  overlay.style.display = "none"; // On cache le fond sombre

  // Le joueur commence avec l'inventaire de base de son héros
  joueur.inventaire = [...joueur.hero.inventaire];

  // On ajoute le premier lieu visité (par exemple "Château du roi")
  ajouterLieu("Château du roi");

  // On met à jour l'affichage des statistiques du joueur
  afficherStatistiques();

  // On passe à la scène d'id 2 pour commencer l'histoire
  avancerScene(2);
};

// Cette fonction est appelée lorsque le joueur annule la confirmation.
// Elle ferme la fenêtre de confirmation et affiche à nouveau le choix des héros.
window.annulerConfirmation = function () {
  const confirmationDiv = document.querySelector(".confirmation");
  if (confirmationDiv) confirmationDiv.remove();

  const overlay = document.getElementById("confirmation-overlay");
  overlay.style.display = "none";

  afficherChoixHeros();
};

// Cette fonction affiche les statistiques du héros choisi dans la zone prévue (#statistiques).
function afficherStatistiques() {
  const { stats } = joueur.hero;

  document.getElementById("statistiques").innerHTML = `
        <img src="${joueur.hero.image}" alt="${joueur.hero.nom}">
        <h2>${joueur.hero.nom}</h2>
        <div id="stat-vie">Vie : ${stats.vie}</div>
        <div id="stat-attaque">Attaque : ${stats.attaque}</div>
        <div id="stat-endurance">Endurance : ${stats.endurance}</div>
        <div id="stat-mana">Mana : ${stats.mana}</div>
    `;
}

// Cette fonction permet de passer d'une scène à une autre.
// Chaque scène possède un id, un titre, une description et des options menant à d'autres scènes.
window.avancerScene = function (idScene) {
  if (idScene === null) {
    console.log("Fin de l'histoire ou aucune scène suivante.");
    return;
  }

  const sceneActuelle = scenes.find((scene) => scene.id === idScene);
  if (!sceneActuelle) {
    console.error("Scène introuvable pour l'ID :", idScene);
    return;
  }

  // On affiche la scène courante dans la zone #scene
  const sceneDiv = document.getElementById("scene");
  sceneDiv.style.display = "block";
  sceneDiv.innerHTML = `
        <img src="${sceneActuelle.image}" alt="${sceneActuelle.titre}">
        <h2>${sceneActuelle.titre}</h2>
        <p>${sceneActuelle.description}</p>
        <div id="scene-options"></div>
    `;

  // Pour chaque option de la scène, on crée un bouton permettant d'avancer vers la scène suivante
  const optionsDiv = document.getElementById("scene-options");
  sceneActuelle.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.texte;
    button.addEventListener("click", () => avancerScene(option.suivant));
    optionsDiv.appendChild(button);
  });

  // On ajoute le lieu (ou les lieux) de la scène aux lieux déjà visités par le joueur
  ajouterLieu(sceneActuelle.lieux);

  // On ajoute le titre de la scène à l'historique pour garder une trace du cheminement
const historiqueDiv = document.getElementById("contenu-historique");

// Vérifier si le dernier élément a le même titre
if (!historiqueDiv.firstChild || historiqueDiv.firstChild.textContent !== sceneActuelle.titre) {
  historiqueDiv.innerHTML = `<p>${sceneActuelle.titre}</p>` + historiqueDiv.innerHTML;
}
};

// Le bouton "voir-inventaire" affiche une popup avec la liste des objets que le joueur possède.
document.getElementById("voir-inventaire").addEventListener("click", () => {
  const inventaireDiv = document.getElementById("popup");
  inventaireDiv.style.display = "block";
  inventaireDiv.innerHTML = `
        <h3>Inventaire</h3>
        <ul>
            ${joueur.inventaire.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <button onclick="fermerPopup()">Fermer</button>
    `;
});

// Le bouton "voir-carte" affiche une popup avec la liste des lieux visités (sous forme de carte).
document.getElementById("voir-carte").addEventListener("click", () => {
  const carteDiv = document.getElementById("popup");
  carteDiv.style.display = "block";
  carteDiv.innerHTML = `
        <h3>Carte</h3>
        <div class="map">
            ${joueur.lieuxVisites
              .map((lieu) => `<div class="map-lieu">${lieu}</div>`)
              .join("")}
        </div>
        <button onclick="fermerPopup()">Fermer</button>
    `;
});

// Ferme la fenêtre popup (que ce soit la carte ou l'inventaire)
window.fermerPopup = function () {
  const popupDiv = document.getElementById("popup");
  popupDiv.style.display = "none";
};

// Ajoute un objet à l'inventaire du joueur s'il ne s'y trouve pas déjà
function ajouterObjet(objet) {
  if (!joueur.inventaire.includes(objet)) {
    joueur.inventaire.push(objet);
  }
}

// Ajoute un lieu à la liste des lieux visités par le joueur, s'il n'est pas déjà présent
function ajouterLieu(lieu) {
  // On vérifie d'abord que le lieu n'existe pas déjà dans la liste
  if (!joueur.lieuxVisites.includes(lieu)) {
    joueur.lieuxVisites.push(lieu);
  }
}

// Bouton pour démarrer l'aventure, cachant l'écran d'accueil et montrant le choix des héros
document.getElementById("demarrer").addEventListener("click", function () {
  document.getElementById("accueil").style.display = "none";
  afficherChoixHeros();
});
