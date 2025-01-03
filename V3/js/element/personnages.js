export const heros = [
  {
    nom: "Guerrier",
    description: "Fort et courageux, spécialisé dans les combats rapprochés.",
    image: "/V2/images/guerrier.webp",
    stats: {
      vie: 150,
      attaque: 20,
      defense: 15,
      mana: 0,
    },
    inventaire: [
      { nom: "Épée", image: "/V2/images/Epee.webp" },
      { nom: "Armure", image: "/V2/images/armure.webp" },
    ],
  },
  {
    nom: "Mage",
    description: "Maître des arcanes, utilise la magie pour infliger des dégâts.",
    image: "/V2/images/mage.webp",
    stats: {
      vie: 100,
      attaque: 15,
      defense: 5,
      mana: 50,
    },
    inventaire: [
      { nom: "Bâton", image: "/V2/images/baton.webp" },
      { nom: "Robe de mage", image: "/V2/images/robe.webp" },
    ],
},
  {
    nom: "Archer",
    description: "Rapide et précis, inflige des dégâts à distance.",
    image: "/V2/images/archer.webp",
    stats: {
      vie: 120,
      attaque: 18,
      defense: 0,
      mana: 10,
    },
    inventaire: [
      { nom: "Arc", image: "/V2/images/arc.webp" },
      { nom: "Flèches", image: "/V2/images/fleche.webp" },
    ],
  },
  {
    nom: "Voleur",
    description: "Furtif et agile, spécialisé dans les attaques surprises.",
    image: "/V2/images/voleur.webp",
    stats: {
      vie: 100,
      attaque: 30,
      defense: 10,
      mana: 0,
    },
    inventaire: [
      { nom: "Dague", image: "/V2/images/Dague.webp" },
      { nom: "Potion de poison", image: "/V2/images/poison.webp" },
    ],
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
