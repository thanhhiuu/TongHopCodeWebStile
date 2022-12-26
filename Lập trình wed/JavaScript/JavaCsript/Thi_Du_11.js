// CallBack
var Reusar = 0;
var number = [12, 14, 15, 16 ,18, 19];
// Cách 1
number.forEach(myFunction);

function myFunction(value, index, array){
    // console.log(`Gia tri thuc hien hanh: ${value} - chi muc hien hanh: ${index}`);
    // console.log(array);
    Reusar = Reusar + value;
};
console.log(`Gia tri hien hanh: ${Reusar}`);
//Cách 2
var Reusar1 = 0;
number.forEach(function(value, index, array){
    Reusar1 = Reusar1 + value;
});
console.log(`Su dung Foeach cach 2 duoc ket qua : ${Reusar1}`);