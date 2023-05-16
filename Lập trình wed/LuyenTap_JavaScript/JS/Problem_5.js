const imgBig = document.querySelector('.container-imgBig .imgBig img');
const imgSmaill = document.querySelectorAll('.container-imgSmaill .imgSmail .imgSmail-content img');

imgSmaill.forEach(function(event, x) {
    event.addEventListener("click", function() {
        imgBig.src = event.src;
    } );
    
})