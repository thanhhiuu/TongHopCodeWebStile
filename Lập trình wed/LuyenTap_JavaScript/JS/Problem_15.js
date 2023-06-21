const buttonBopBin = document.querySelector(".btn-bopbi");
const messageText = document.querySelector(".message");


buttonBopBin.addEventListener("click", () => {
    let add = Number(messageText.getAttribute('data-count') || 0);
    messageText.setAttribute('data-count', add + 1);
    if(add === 0) {
        messageText.classList.add("active");
    }
    
})

