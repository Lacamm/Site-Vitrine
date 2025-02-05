//Remonter la page de manière fluide
function topPage() {
    let btnFleche = document.getElementById("btnTopPage")

    if (btnFleche) {
        btnFleche.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        })
    } else {
        console.log("Le bouton n'existe pas")
    }
};
