function getlocalisation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    }
    else{
        alert("la géolocalisation n'est pas supportée par le navigateur.")
    }
}
function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let googlemaplink = 'https://www.google.com/maps?q=${lat},${lon}';
    alert("coordonnées: "+googlemaplink);

    document.getElementById("adresse").value = googlemaplink;
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("❌ La localisation est insponible !!!");
            break;
        case error.TIMEOUT:
            alert("⌛ La requête a expiré.")
            break;
        default:
            alert("Erreur inconnue");
    }
}