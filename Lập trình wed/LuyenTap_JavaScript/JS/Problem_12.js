let showBTN = document.querySelector(".show-more");
let contentShow = document.querySelector(".container-draggable");
let sheetOverlay = document.querySelector(".sheet-overlay"); 
let contentMousemove = document.querySelector(".content"); 
let draggableIcon = document.querySelector(".draggable-span");

let IsDraggable = false;

showBTN.addEventListener("click", () => {
    contentShow.classList.toggle("show")
    
})
sheetOverlay.addEventListener("click", () => {
    contentShow.classList.remove("show");
})
const draggableStart =() => {
    IsDraggable = true;
}
draggableIcon.addEventListener("mousemove", (e) => {
    if(!IsDraggable ) return;
    contentMousemove.style.height = `${e.pageY}vh`
    console.log(e.pageY)
})

draggableIcon.addEventListener("mousedown", draggableStart)