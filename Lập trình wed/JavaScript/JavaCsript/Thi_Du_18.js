// Cách 1: Lấy thông tin qua Document
var listItemNodes = document.querySelectorAll('.box-1 li');
console.log(listItemNodes);
// Cách 2: Lấy thông tin qua đối tượng chứa
var boxNodes = document.querySelector(".box-1");    
console.log(boxNodes);
// Lấy các thẻ li trong boxNodes1
var boxNodes1 = document.querySelectorAll('li');
console.log(boxNodes1);