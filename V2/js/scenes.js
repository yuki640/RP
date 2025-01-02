


export const scenes = [
  // SCÈNE 1
  {
    id: 1,
    titre: "Le Début",
    lieux: "ville du roi",
    description: "Bienvenue dans BlueVenture, un jeu d'aventure à choix multiples.",
    image: "./images/hero.webp",
    choices: [
      { text: "Commencer", nextScene: 1.5 },
    ],
  },

  // SCÈNE 1.5
  {
    id: 1.5,
    titre: "Le Début",
    lieux: "Cour du Château",
    description: "Vous avez été invité par le Roi dans son château. Que voulez-vous faire ?",
    image: "./images/hero.webp",
    choices: [
      { text: "Rentrer", nextScene: 2 },
      { text: "Refuser l'invitation et contourner le château", nextScene: 3 },
    ],
  },

  // SCÈNE 2
  {
    id: 2,
    titre: "Le Choix",
    lieux: "Château",
    description: "Vous êtes dans le château du Roi, il vous demande de choisir entre trois classes.",
    image: "./images/roi.webp",
    choices: [
      // Action “choisirClasse” → ensuite tu gères la redirection vers l'id 6 (par exemple)
      { text: "Choisir une classe", action: "choisirClasse" },
      { text: "Explorer le château", nextScene: 4 },
    ],
  },

  // SCÈNE 3
  {
    id: 3,
    titre: "Bannissement",
    lieux: "Prairie",
    description: "Vous avez contourné le château du Roi. Furieux, il vous a banni et vous êtes devenu Voleur !",
    image: "./images/foret.webp",
    choices: [
      { text: "Continuer", nextScene: 5 },
    ],
  },

  // SCÈNE 4
  {
    id: 4,
    titre: "Exploration",
    lieux: "Salle du Trône",
    description: "Vous explorez le château et arrivez de nouveau dans la salle du trône.",
    image: "./images/salle-trone.webp",
    choices: [
      { text: "repondre au roi", nextScene: 5.5 },
    ],
  },

  // SCÈNE 5
  {
    id: 5,
    titre: "Rencontre",
    lieux: "Forêt",
    description: "Vous rencontrez un étranger dans la forêt.",
    image: "./images/foret.webp",
    choices: [
      { text: "Parler à l'étranger", nextScene: 8 },
      { text: "Continuer votre chemin", nextScene: 9 },
    ],
  },

  // SCÈNE 5.5
  {
    id: 5.5,
    titre: "Le Choix",
    lieux: "Château",
    description: "le Roi vous demande de choisir entre trois classes.",
    image: "./images/salle-trone.webp",
    choices: [
      { text: "Choisir une classe", action: "choisirClasse" },
    ],
  },

  // SCÈNE 6
  {
    id: 6,
    titre: "Début de l'aventure",
    description: "Vous prenez place sur le trône et ressentez une énergie étrange…",
    image: "/V1/images/good.jpg",
    lieux: "Salle du Trône",
    choices: [
      { text: "Explorer", nextScene: 7 },
      { text: "Retourner au village", nextScene: 1 }
    ],
  },

  // SCÈNE 7
  {
    id: 7,
    titre: "Sortie du Château",
    lieux: "Cour Extérieure",
    description: "En sortant du château, vous découvrez un champ de ruines. Un panneau indique une mission urgente : récupérer l'amulette magique perdue dans les souterrains.",
    image: "./images/cour-chateau.webp",
    choices: [
      {
        text: "Accepter la mission de l'amulette",
        nextScene: 10
      },
      {
        text: "Ignorer la mission et continuer la route",
        nextScene: 11
      }
    ],
  },

  // SCÈNE 8
  {
    id: 8,
    titre: "Conversation Mystérieuse",
    lieux: "Forêt",
    description: "L'étranger vous propose un marché : débusquer des créatures hostiles en échange d'une bourse d'or. Cela pourrait être dangereux, mais promet de belles récompenses.",
    image: "./images/etranger.webp",
    choices: [
      {
        text: "Accepter la chasse aux créatures",
        nextScene: 12
      },
      {
        text: "Refuser et chercher un autre chemin",
        nextScene: 9
      }
    ],
  },

  // SCÈNE 9
  {
    id: 9,
    titre: "Route Solitaire",
    lieux: "Sentier Forestier",
    description: "Vous poursuivez votre chemin sans vous arrêter davantage. L’ambiance se fait pesante, et le silence annonce peut-être de futurs dangers.",
    image: "./images/foret-sombre.webp",
    choices: [
      {
        text: "Continuer à marcher",
        nextScene: 13
      }
    ],
  },

  // SCÈNE 10 (MISSION DE L’AMULETTE)
  {
    id: 10,
    titre: "Souterrains du Château",
    lieux: "Souterrains",
    description: "Vous descendez dans des couloirs sombres et humides pour retrouver l’amulette. L’endroit regorge de pièges et de monstres.",
    image: "./images/souterrains.webp",
    choices: [
      {
        text: "Combattre les monstres et avancer",
        nextScene: 14
      },
      {
        text: "Rebrousser chemin",
        nextScene: 7
      }
    ],
  },

  // SCÈNE 11 (ROUTE IGNORÉE)
  {
    id: 11,
    titre: "La Route Déserte",
    lieux: "Vieil Échafaud",
    description: "Vous décidez d’ignorer la mission et d’emprunter une route peu fréquentée. Vous ressentez néanmoins un malaise, comme si vous aviez laissé derrière vous une opportunité cruciale.",
    image: "./images/route-deserte.webp",
    choices: [
      {
        text: "Continuer malgré le doute",
        nextScene: 13
      }
    ],
  },

  // SCÈNE 12 (CHASSE AUX CRÉATURES)
  {
    id: 12,
    titre: "Chasse aux Créatures",
    lieux: "Clairière Inquiétante",
    description: "Vous avancez dans une clairière où rôdent des créatures hostiles. Un combat s'engage aussitôt !",
    image: "./images/creatures.webp",
    choices: [
      {
        text: "Engager le combat",
        nextScene: 15
      },
      {
        text: "Tenter de fuir",
        nextScene: 9
      }
    ],
  },

  // SCÈNE 13 (CONTINUER À MARCHER)
  {
    id: 13,
    titre: "La Longue Route",
    lieux: "Chemin Rural",
    description: "Vous cheminez longtemps sur une route de terre battue. Le paysage vous semble monotone, mais une silhouette surgit au loin. Peut-être un marchand de passage ?",
    image: "./images/route-longue.webp",
    choices: [
      {
        text: "Approcher la silhouette",
        nextScene: 16
      },
      {
        text: "Ignorer et avancer",
        nextScene: 17
      }
    ],
  },

  // SCÈNE 14 (COMBATTRE LES MONSTRES DANS LES SOUTERRAINS)
  {
    id: 14,
    titre: "Combat Souterrain",
    lieux: "Salle Sombre",
    description: "Des monstres surgissent de l’obscurité. Les combats sont rudes, mais vous êtes déterminé à trouver l'amulette. Vous apercevez un coffre, sans doute protégé par ces créatures.",
    image: "./images/combat-souterrain.webp",
    choices: [
      {
        text: "Vaincre les monstres et ouvrir le coffre",
        nextScene: 18
      },
      {
        text: "Tenter de contourner le combat",
        nextScene: 19
      }
    ],
  },

  // SCÈNE 15 (COMBAT CLAIRIÈRE)
  {
    id: 15,
    titre: "Affrontement Brutal",
    lieux: "Clairière Inquiétante",
    description: "Les créatures bondissent, griffes et crocs à l’air. Vous brandissez votre arme pour vous défendre.",
    image: "./images/combats-creatures.webp",
    choices: [
      {
        text: "Lutter jusqu'au bout",
        nextScene: 20
      },
      {
        text: "Abandonner le combat",
        nextScene: 9
      }
    ],
  },

  // SCÈNE 16 (MARCHAND)
  {
    id: 16,
    titre: "Rencontre Surprenante",
    lieux: "Bord de Route",
    description: "La silhouette se révèle être un marchand itinérant, proposant divers objets. Il ne parle pas beaucoup mais vous offre un choix d’items à acheter.",
    image: "./images/marchand.webp",
    choices: [
      {
        text: "Acheter un objet de soin",
        action: "acheterObjetSoins",
      },
      {
        text: "Acheter un parchemin de puissance",
        action: "acheterParcheminPuissance",
      },
      {
        text: "Continuer la route",
        nextScene: 17
      }
    ],
  },

  // SCÈNE 17 (IGNORER LE MARCHAND)
  {
    id: 17,
    titre: "Vers l'Inconnu",
    lieux: "Fin de la Route",
    description: "Vous laissez la silhouette derrière vous et poursuivez votre voyage, déterminé à découvrir ce qui se cache au-delà.",
    image: "./images/inconnu.webp",
    choices: [
      {
        text: "Continuer",
        nextScene: 21
      }
    ],
  },

  // SCÈNE 18 (OUVERTURE DU COFFRE)
  {
    id: 18,
    titre: "Le Coffre Poussiéreux",
    lieux: "Salle Sombre",
    description: "Après avoir vaincu les monstres, vous ouvrez le vieux coffre. À l’intérieur, l'amulette magique brille d’une lueur bleutée, entourée de quelques pièces et d’un parchemin.",
    image: "./images/coffre.webp",
    choices: [
      {
        text: "Prendre l'amulette et les trésors",
        action: "ramasserAmulette",
      },
      {
        text: "Ignorer l'amulette et partir",
        nextScene: 19
      }
    ],
  },

  // SCÈNE 19 (CONTOURNER LE COMBAT)
  {
    id: 19,
    titre: "Fuite Tactique",
    lieux: "Couloir Obscur",
    description: "Vous décidez de contourner les créatures. Vous avancez prudemment dans un couloir annexe, espérant trouver un passage secret.",
    image: "./images/couloir.webp",
    choices: [
      {
        text: "Chercher un passage secret",
        action: "trouverPassageSecret"
      },
      {
        text: "Revenir sur vos pas",
        nextScene: 10
      }
    ],
  },

  // SCÈNE 20 (COMBAT CLAIRIÈRE SUITE)
  {
    id: 20,
    titre: "Victoire Éreintante",
    lieux: "Clairière",
    description: "Vous triomphez des créatures, malgré les égratignures et la fatigue. Vous récupérez sur elles un étrange pendentif et quelques pièces d’or.",
    image: "./images/victoire.webp",
    choices: [
      {
        text: "Prendre le pendentif",
        action: "ramasserPendentif"
      },
      {
        text: "Quitter la clairière",
        nextScene: 13
      }
    ],
  },

  // SCÈNE 21 (NOUVELLE ROUTE)
  {
    id: 21,
    titre: "Nouveaux Horizons",
    lieux: "Plaine Vaste",
    description: "Le chemin vous mène vers une immense plaine, annonçant de nouvelles quêtes et de nouvelles aventures. Le vent vous murmure que l'histoire ne fait que commencer…",
    image: "./images/plaine-vaste.webp",
    choices: [
      {
        text: "Continuer l’aventure",
        action: "aventureSuite"
      }
    ],
  },
];
