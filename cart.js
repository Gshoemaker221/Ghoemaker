document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("panier")) || [];
    let cartItemsContainer = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");
    let hiddenInput = document.createElement("input");
    
    hiddenInput.type = "hidden";
    hiddenInput.name = "cart-data";
    hiddenInput.id = "cart-data";

    document.querySelector("form").appendChild(hiddenInput);

        if (cart.length === 0 ){
            cartItemsContainer.innerHTML = "<p>Votre Panier est vide</p>";
            return;
        }

    let total = 0 ;
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${item.nom}</strong><br>
        couleur: ${item.couleur},<br> 
        Pointure: ${item.Pointure}<br>
        Prix: ${item.prix} FCFA <br>
        <button 
            class="remove-item"
            data-index="${index}">
            ❌
        </button>`;
        cartItemsContainer.appendChild(li);
        total += item.prix;
    });


    document.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", function(event){
            event.preventDefault();
        let index = parseInt(event.target.getAttribute("data-index"));

        let panier =JSON.parse(localStorage.getItem('panier')) || [];

        if (index >= 0 && index < panier.length){

            panier.splice(index, 1);
            localStorage.setItem("panier", JSON.stringify(panier));
            location.reload();
            }
    });
});


    totalPriceElement.textContent = total;

    document.getElementById("clear-cart").addEventListener("click", function () {
        localStorage.removeItem("panier");
        location.reload();
    });

    document.getElementById("checkout").addEventListener("click", function(){
        let cart = JSON.parse(localStorage.getItem("panier")) || [];
        if (cart.length === 0 ){
            alert("Votre Panier est vide");
            return;
        }
        // fetch("traitement.php", {
        //     method: "POST",
        //     headers: {"content-type": "application/JSON"},
        //     body: JSON.stringify(cart)
        // })
        then(response => response.json())
        .then(data => {
            if (data.success){
                alert("Commande passée avec succès");
            localStorage.removeItem("panier")
            location.reload();
            }
            else{
                alert("Une erreur est survenue !")
            }
        })
        .catch(error => console.error("Erreur:", error));

    });
});