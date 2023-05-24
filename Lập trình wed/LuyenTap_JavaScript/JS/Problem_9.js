function clickme(smail) {
    let imgbox = document.querySelector("#imagebox");
    imgbox.src = smail.src;
}
const images = document.querySelectorAll(".product img");

images.forEach((e)=> {
    e.addEventListener("click", ()=> {
        // Xóa class được thêm vào 
        images.forEach((classRemove) => {
            if(classRemove !== e) {
                classRemove.classList.remove("colorimage");
            }
        });
        e.classList.toggle("colorimage")
    })
})