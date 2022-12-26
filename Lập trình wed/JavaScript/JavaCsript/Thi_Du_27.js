var h1innerHTML = document.querySelector('.sub-title');
h1innerHTML.innerHTML = "HTML" ; // Thêm text bằng innerHTML
console.log(h1innerHTML);
var h1Element = document.querySelector('h1');// Lấy thông tin của thẻ h1 ra
h1Element.classList.add('title'); // Thêm class title vào thẻ h1
var premote = document.querySelector('p'); // Lấy thông tin của thẻ P ra
premote.classList.remove('sub-title'); '// Xóa class sub-title'
premote.classList.add('content'); // Thêm class content 