const canvar = document.querySelector('.canvar');
const context = canvar.getContext('2d');

canvar.wight = canvar.offsetWight;
canvar.height = canvar.offsetHeight;




// ----------------Dimo------------------\

const dimoImg = new Image();
dimoImg.src = "../IMG/dino.";

setInterval(() => {

}, 100);

setInterval(() => {
    
}, 200);

let dimo = {
    x: 30,
    y: 145,
    w: 50, 
    h: 55
}
function game() {
    update();
    render();
    requestAnimationFrame(game);
}


function update() {

}

function render() {

}

//------------