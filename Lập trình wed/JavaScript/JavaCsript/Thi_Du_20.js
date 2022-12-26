headingNodes = document.querySelector('.heading');
console.log(headingNodes);
// // Lấy thông tin 
// console.log(headingNodes.innerText);
// console.log(headingNodes.textContent);
// // Thay thế thông tin
// headingNodes.innerText = 'New hedding';
// headingNodes.textContent = 'New diing ';

// headingNodes.innerHTML = "TEXT DECOR"; //Thêm text node
// headingNodes.innerHTML = "<h1> Changher </h1>"; // Thêm thẻ con
// console.log(headingNodes.innerHTML); // Lấy nội dung của HTML
// Thay đổi nội dụng của html
var resetHTML = document.querySelector('h1');
console.log(resetHTML);
resetHTML.innerHTML = 'New Comment ';
// Thao tác thẻ với outerHTML
resetHTML.outerHTML = '<span style ="color:red;">Heading new</span>'