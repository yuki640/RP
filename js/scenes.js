export const scenes = [
    {
        id: 1,
        titre: "Choix du héros",
        lieux: "chateuax du roi",
        description: "Choisissez un héros parmi les trois proposés."
    },
    {
        id: 2,
        titre: "La forêt sombre",
        lieux: "forêt sombre",
        image: "./images/foret.webp",
        description: "Vous entrez dans une forêt dense et mystérieuse, où les ombres dansent autour de vous.",
        options: [
            { texte: "Continuer d'avancer", suivant: 3 },
            { texte: "Explorer les alentours", suivant: 4 }
        ]
    },
    {
        id: 3,
        titre: "La grotte mystérieuse",
        lieux: "grotte de la forêt sombre",
        image: "./images/grotte.webp",
        description: "Vous découvrez une grotte dont l'entrée est gardée par une créature massive.",
        options: [
            { texte: "Entrer dans la grotte", suivant: null }
        ]
    },
    {
        id: 4,
        titre: "La forêt sombre",
        image: "./images/foret.webp",
        description: "Vous trouvez une clairière lumineuse où vous pouvez vous reposer en toute sécurité.",
        options: [
            { texte: "Continuer", suivant: 3 },
            { texte: "Se reposer", suivant: null }
        ]
    }
];
