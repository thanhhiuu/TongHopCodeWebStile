// Su dung vong lap trong mang 
let num = [1, 3, 5, 6, 7, 9];
// For loop
// for(let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

// forEach loop
num.forEach((Element) => {
    console.log(Element + Element);
}); 

// Array From => Bien chuoi thanh mang

let arrayFrom = "Thanh Hieu";
let arr = Array.from(arrayFrom);
console.log(arr);


// For in loop
for(let j in num) {
    console.log(j); // Đếm giá trị trong mảng
    console.log(num[j]); // In phần tử trong mảng
} 

// For of loop
for(let item of num) {
    console.log(item); // Đọc từng phần tử trong mản ra
    console.log(num);
}

// Map, Filter & Reduce in JavaScript 
// Array Map methods in Js => Syntax Map(value, index, array)
let abc = [12, 15, 17, 19];
let cba = abc.map((value) => {
    console.log(value);
    return value + 1;
})
console.log(cba);

// Array Filter methods in Js
// Phương thức filter() tạo một bản sao nông của một phần của một mảng nhất định, được lọc xuống chỉ các phần tử từ mảng đã cho vượt qua bài kiểm tra được thực hiện bởi hàm được cung cấp.
let abc1 = [0, 3, 5, 7, 9, 10];
let a2 = abc1.filter((a)=> {
    return a < 10;
})
console.log(a2);

// Array reduce methods in Js
// Phương thức reduce() thực thi hàm gọi lại "reducer" do người dùng cung cấp trên từng phần tử của mảng, theo thứ tự, 
// chuyển vào giá trị trả về từ phép tính trên phần tử trước đó. Kết quả cuối cùng của việc chạy bộ giảm tốc trên tất cả các phần tử của mảng là một giá trị duy nhất.

let reduceArray = [1, 2, 3, 4, 5, 6];
let arrReduce = reduceArray.reduce((h1, h2) => {
    return h1 + h2;
})
console.log(arrReduce);

// Function
const arrReduce1 = (h3, h4) => {
    return h3 + h4;
}
let newReduce = reduceArray.reduce(arrReduce1);
console.log(newReduce);