document.addEventListener("DOMContentLoaded", function(){ 
    const form = document.getElementById("commande-form");

    if(!form){
        console.error("Formulaire non trouvé !");
        return;
    }
    
    form.addEventListener("submit", function(e){ e.preventDefault();

    const prenom = document.getElementById("Prenom").value.trim();
    const nom = document.getElementById("Nom").value.trim();
    const adresse = document.getElementById("adresse").value.trim();
    const telephone = document.getElementById("Numero").value.trim();
    const panier = JSON.parse(localStorage.getItem('panier')) || [];

    if (panier.length === 0) {
        alert("Votre panier est vide !");
        return;
    }

    if (!prenom || !nom || !adresse || !telephone) {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    let message = "*Commande Gshoemaker :*%0A%0A";
    let total = 0;

    panier.forEach((article, i) => {
        message += `*${i + 1}. ${article.nom}*%0A`;
        message += `- Pointure : ${article.Pointure}%0A`;
        message += `- Couleur : ${article.couleur}%0A`;
        message += `- Prix : ${article.prix} FCFA%0A%0A`;
        total += article.prix;
    });

    message += `*Quantité : ${panier.length} article(s)*%0A`;
    message += `*Total : ${total} FCFA*%0A%0A`;
    message += `Prénom : ${prenom}%0ANom : ${nom}%0AAdresse : ${adresse}%0ATéléphone : ${telephone}%0A`;
    message += `%0AJe souhaite passer cette commande.`;

    const numeroWhatsApp = "221763011634";
    const lienWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${message}`;

    window.open(lienWhatsApp, "_blank");
    });
});