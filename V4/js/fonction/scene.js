let sceneActuel = 0;

document.querySelectorAll(".scenes-choix").forEach(element => {
    element.addEventListener("click", function (ChoixScene) {
        
        document.getElementById("start").addEventListener("click", function (commencer) {
            sceneActuel = 1;
            
        });
        if (sceneActuel == 3) {
            // Ajoutez ici le code à exécuter lorsque sceneActuel est égal à 3
        }

    });
});

// téléphone 