let bon = document.querySelector("#bon");
let bon2 = document.querySelector("#bon2");
let text = document.querySelector("#text");



bon.addEventListener("click", function(){
    let numero = Math.floor(Math.random() * 10)
    
    text.textContent = "generando codigo"
    setTimeout(function() {
    text.textContent = "listo"
    }, 2000);
    setTimeout(function() {
    text.textContent = numero
    }, 3000);
})