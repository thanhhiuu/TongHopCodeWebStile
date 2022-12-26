var decor = ['JAVA', 'HTML', 'RUBY', 'CSS']

function render(decor){
    var ulElement = document.querySelector('ul');
    var liter = "";
    decor.forEach(function(items) {
        liter += `<li> ${items} </li>`;
    });
    ulElement.innerHTML = liter;
}
// render(liter);