    console.log("script.js est bien chargé");
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(){
        const id = this.getAttribute('data-id');
        const nom = this.getAttribute('data-name');
        const prix = parseFloat(this.getAttribute('data-prix'));

        const articlecontainer = this.closest('.img-acceuil');

        const Pointure = articlecontainer.querySelector('select').value;
        const couleur= articlecontainer.querySelector('input[type="text"]').value;

        if(couleur=== ""){
            alert("veiller entrer une couleur avant d'ajouter au panier !");
            return;
        }

        console.log("ajouter au panier : ", nom , " |pointure : ", Pointure, " | couleur : ", couleur);

        alert ("L'article de modèle " + nom + ", de taille "+Pointure+ ", et de couleur " + couleur + " a été ajouté dans votre panier" );


        let panier = JSON.parse(localStorage.getItem('panier')) || [];

        panier.push({id: id, nom: nom, prix: prix, Pointure: Pointure, couleur: couleur, });

        localStorage.setItem('panier', JSON.stringify(panier));
    });
});