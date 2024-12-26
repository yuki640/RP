export const scenes = [
  {
    id: 1,
    titre: "La Debut",
    lieux: "Chauteaux",
    description: "Vous avez été inviter par le Rois dans sont Chauteaux. Que voulez-vous faire ?",
    image: "./images/foret.jpg",
    choices: [
      { text: "Rentrer", nextScene: 2 },
      { text: "refuser l'invitation est contourner le chateaux", nextScene: 3 },
    ],
  },
];