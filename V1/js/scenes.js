export const scenes = [
  {
    id: 1,
    titre: "Le Début",
    lieux: "Cour du Château",
    description: "Vous avez été invité par le Roi dans son château. Que voulez-vous faire ?",
    image: "./images/hero.webp",
    choices: [
      { text: "Rentrer", nextScene: 2 },
      { text: "Refuser l'invitation et contourner le château", nextScene: 3 },
    ],
  },
  {
    id: 2,
    titre: "Le Choix",
    lieux: "Château",
    description: "Vous êtes dans le château du Roi, il vous demande de choisir entre trois classes.",
    image: "./images/chateau.jpg",
    choices: [
      { text: "Choisir une classe", action: "choisirClasse" },
      { text: "Explorer le château", nextScene: 4 },
    ],
  },
  {
    id: 3,
    titre: "Vagabondage",
    lieux: "Prairie",
    description: "Vous avez contourné le château du Roi et êtes devenu vagabond !",
    image: "./images/foret.webp",
    choices: [
      { text: "Continuer", nextScene: 5 },
    ],
  },
  // Ajouter d'autres scènes...
];
