const Buttons = document.querySelectorAll("[data-carousel-button]");

Buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offer = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slide]")


        const active = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(active) + offer

        if(newIndex < 0) newIndex = slides.children.length = -1;
        if(newIndex >= slides.children.length) newIndex = 0;


        slides.children[newIndex].dataset.active = true;
        delete active.dataset.active
    })
})