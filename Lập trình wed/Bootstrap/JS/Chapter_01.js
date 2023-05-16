let scrollContainer = document.querySelector(".new-carousel-content");
    let back = document.querySelector("#back");
    let next = document.querySelector("#next");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        
    });

    next.addEventListener("click", ()=> {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 960;
    })
   
    
    back.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior =  "smooth";
        scrollContainer.scrollLeft -= 960;
    })

    