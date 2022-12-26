var boxElement = document.querySelector('.box');
var boxElement1 = document.querySelector('h1');
console.log(boxElement);
// console.log(boxElement.classList);
// console.log(boxElement.classList[0]);
// console.log(boxElement.classList.length);
// console.log(boxElement.classList.value);

// Thêm class red và blue và thuộc tính
boxElement.classList.add('greed');
boxElement1.classList.add('font');
// Kiểm tra class đó có tồn tại trong element hay không
// console.log(boxElement.classList.contains('greed'));
// // Xóa class
// boxElement.classList.remove('greed');


// Sự dụng hàm setTimeout để kiểm thấy rõ hơn việc xóa class
// setTimeout(function(){
//     boxElement.classList.remove('greed');
// }, 1000);

// Phương thức toggle => Có thì gỡ bỏ, không có thì thêm vào
setInterval(function(){
        boxElement.classList.toggle('greed');
}, 100)