// Hoisting in Javascript
// Hoisting là một tính năng trong JavaScript cho phép khai báo biến và hàm được di chuyển lên trên phạm vi hiện tại trước khi mã chạy.
// Điều này có nghĩa là bạn có thể sử dụng một biến hoặc gọi một hàm trước khi chúng được khai báo trong mã.

// Khi JavaScript thực thi mã, trình thông dịch sẽ tạo ra hai pha cho mỗi phạm vi: compile (biên dịch) và execution (thực thi). 
// Trong quá trình biên dịch, JavaScript tìm và khai báo các biến và hàm trong phạm vi, nhưng chưa gán giá trị cho biến và thực thi mã. 
// Do đó, trong giai đoạn biên dịch, các khai báo biến và hàm sẽ được di chuyển lên đầu phạm vi.



console.log(a); // sẽ chạy được nếu khai báo biến bằng var nhưng lại là kiểu Undefined => Không được thực thiếu nếu gọi ra trước khi khai báo
green(); // Riêng về Function() "Hàm" Có thể gọi hàm trước khi tạo hàm
// const green = () =>  {
//     console.log("Helloo, i'll die !!!");
// } ===> Nếu sử dụng const thì cũng như let hàm const không được gọi trước khi khởi tạo
function green() {
    console.log("Hello, i'll Die !!!")
}

// let a = 1000; // Nếu là let thì sẽ là biến cục bộ và không thực thi được trong phạm vi này
// var a; // undefined\
var a = 1000; // Khi sử dụng var tính năng của hoisting sẽ được thực thi 
console.log(a) // 1000





/// Hosting Function

let c = 20, d = 30;

let result = add(c, d);
console.log(result); // 50;

function add(c, d) {
    return c + d
}



// Function Expression
let x = 20, y = 30;

let result1 = add(x, y);
console.log(result); // Lỗi add không được xác định 

let add = function(c, d) { // Biến add chỉ được gán cho một hàm ẩn danh trong giai đoạn thực thi của bối cảnh thực thi toàn cục.
    return c + d
}
// Let không được gọi trước khi khởi tạo



// Arrow Function

let u  = 20,i  = 10;

let rest1 = add(u, i);
console.log(rest1); // // Lỗi add không được xác định 

let add = (u, i) => {
    return u + i
}
// Tương tự như các biểu thức hàm, các hàm mũi tên không được nâng lên.



// Bản tóm tắt

// Nâng JavaScript xảy ra trong giai đoạn tạo ngữ cảnh thực thi để di chuyển các khai báo biến và hàm lên đầu tập lệnh.

// Công cụ JavaScript kéo các biến được khai báo bằng từ khóa let, nhưng nó không khởi tạo chúng dưới dạng các biến được khai báo bằng từ khóa var.

// Công cụ JavaScript không nâng các biểu thức hàm và hàm mũi tên.