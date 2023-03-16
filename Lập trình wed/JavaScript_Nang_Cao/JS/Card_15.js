// setTimeOut

// const a = prompt("Bạn có chắn chắn chọn hay không ? (y/n)");

// if("n" == a) {
//     setTimeout(function() {
//         console.log("Loo con cak");
//     }, 1000)
// }
// else {
//     clearTimeout();
// }

 console.log("Bat dau nao !");
const sum = (a, b) => {
   
    console.log("Bai toan nay ban bang", a + b);
}; 
 setTimeout(sum, 3000, 3, 2);



/// SetInterval

// const a = prompt("Bạn có chắn chắn chọn hay không ? (y/n)");

// for(; a == "n"; i++) {
//   setInterval(function() {
//     console.log("Loo con cak");
//   }, 1000) 
// }