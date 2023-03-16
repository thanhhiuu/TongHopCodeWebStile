let click = document.querySelector(".btn-success");
let span = document.querySelector(".text-center span");
let body = document.querySelector("body");
let reset = document.querySelector(".reset");




click.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
    let random = Math.floor(Math.random()*16777215).toString(16)
    body.style.backgroundColor = "#" + random;
    span.innerHTML = "#" + random;
}
reset.addEventListener("click", resetBackgroundColor);
function resetBackgroundColor() {
    body.style.background = "none";
}