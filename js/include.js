function loadHTML(id, url){
    fetch(url)
    .then(res => res.text())
    .then(data => { document.getElementById(id).innerHTML = data;});
}
window.onload = function(){
    loadHTML("header", "header.html");
    loadHTML("footer", "footer.html");
};