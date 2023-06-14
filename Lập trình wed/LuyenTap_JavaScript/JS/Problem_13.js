const openButton = document.querySelectorAll('[data-modal-target]');
const closeButton = document.querySelectorAll('[data-close-button]');
const overPlay = document.querySelector('.overplay');


openButton.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})
closeButton.forEach( button => {
    button.addEventListener("click", () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    })
})


const openModal = (modal) => {
    if(modal == null) return;
    modal.classList.add("active");
    overPlay.classList.add("active");
}
const closeModal = (modal) => {
    if(modal == null) return;
    modal.classList.remove("active");
    overPlay.classList.remove("active");
}