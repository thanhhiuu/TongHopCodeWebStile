let coookie = setInterval(function() {
    alert("Chao");
}, 3000)
coookie()
let dung = document.querySelector(".action");
dung.addEventListener("click", dung);
function dung() {
    clearInterval(coookie);
}