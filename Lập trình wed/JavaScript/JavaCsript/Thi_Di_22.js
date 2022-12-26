function render(HTML) {
    var ulElement = document.querySelector('ul');
    ulElement.innerHTML = HTML;
}
 
render(
    `
    <li>Khóa CSS</li>
    <li>Khóa RUBY</li>
    <li>Khóa HTML</li>
    `
)