var subnav = document.querySelector('.logo h2');
var buy = document.querySelector('.buy a');
console.log(buy);
console.log(subnav);
subnav.classList.add('color1');
setInterval(function(){
    subnav.classList.toggle('color1')
}, 100)
