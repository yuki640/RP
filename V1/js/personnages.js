export const heros = [
  {
    nom: "Guerrier",
    description: "Fort et courageux, spécialisé dans les combats rapprochés.",
    image: "/V1/images/guerrier.webp",
    stats: {
      vie: 150,
      attaque: 20,
      defense: 15,
      mana: 0,
    },
    inventaire: ["Épée", "Bouclier"],
  },
  {
    nom: "Mage",
    description: "Maître des arcanes, utilise la magie pour infliger des dégâts.",
    image: "/V1/images/mage.webp",
    stats: {
      vie: 100,
      attaque: 15,
      defense: 5,
      mana: 50,
    },
    inventaire: ["Bâton magique", "Parchemin de feu"],
},
  {
    nom: "Archer",
    description: "Rapide et précis, inflige des dégâts à distance.",
    image: "/V1/images/archer.webp",
    stats: {
      vie: 120,
      attaque: 18,
      defense: 0,
      mana: 10,
    },
    inventaire: ["Arc", "Flèches"],
  },
  {
    nom: "Voleur",
    description: "Furtif et agile, spécialisé dans les attaques surprises.",
    image: "/V1/images/voleur.webp",
    stats: {
      vie: 100,
      attaque: 30,
      defense: 10,
      mana: 0,
    },
    inventaire: ["Dague", "Potion de poison"],
  }
];


const ennemis = [
  {
    nom: "Gobelin",
    description:
      "Petite créature verte et sournoise, armée d'un couteau rouillé.",
    image: "./images/gobelin.jpg",
    stats: {
      vie: 50,
      attaque: 10,
    },
    recompence:[],
  },
  {
    nom: "Squelette",
    description: "Ancien guerrier revenu à la vie, armé d'une épée rouillée.",
    image: "./images/squelette.jpg",
    stats: {
      vie: 80,
      attaque: 15,
    },
    recompence:[],
  },
  {
    nom: "Orc",
    description: "Créature massive et brutale, armée d'une hache énorme.",
    image: "./images/orc.jpg",
    stats: {
      vie: 100,
      attaque: 20,
    },
    recompence:[],
  },
];
