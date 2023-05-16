// Trong Js Prototype được gọi là nguyên mẫu.
// Các Object có thể thừa kế các tính năng của nhau thông qua các nguyên mẫu. Mỗi đối tượng có thuộc tính riêng gọi là nguyên mẫu
// Bản thân của nguyên mẫu cũng là 1 đối tượng nguyên mẫu khác. Nên nguyên mẫu có nguyên mẫu riêng 
// => Điều này tạo ra một thứ gọi là chuỗi nguyên mẫu
// Chuỗi nguyên mẫu kết thức khi một nguyên mẫu có null đối với nguyên mẫu của chính nó
let pesion = {
    name: "Thanh Hieu",
   age: 17
}
console.log(pesion);
// pesion.name => "Thanh Hieu";
// Tuy nhiên nếu bạn truy cập vào một thuộc tính không tồn tại của 1 đối tượng thì Js sẽ tìm đến nguyên mẫu của một đối tượng
// Ví dụ : pesion.toString() => Trả về nguyên mẫu của đối tượng là Object
// Lưu ý rằng khi một hàm là một giá trị thuộc tính của một đối tượng, thì nó được gọi là một phương thức. Do đó, một phương thức là một thuộc tính có giá trị như một hàm.




// Xin lưu ý rằng Object là 1 hàm, không phải là đối tượng đối với Prototype (Nguyên Mẫu)
// Object.prototype cũng là 1 thuộc tính quan trọng được gọi là hàm tạo tham chiếu đến hàm Object



function persion(name) {
    this.name = name;
}
console.log(persion);
console.log(persion.prototype);


// Giống như hàm Object(), hàm Persion() có property là nguyên mẫu tham chiếu đến đối tượng ẩn danh Và đối tượng ẩn danh có thuộc tính hàm tạo tham chiếu đến hàm Persion()

persion.prototype.greet = function() {
    return "Hi, I'm " + this.name + "!";
}



// Ví dụ mới
let p = new persion("Thanh Hieu"); // Liên kết đối tượng p1 với hàm persion()
let greeting = p.greet();
console.log(greeting); // Trả vè Hi, I'm Thanh Hieu !


let p1 = p.toString();
console.log(p1); // Trả về nguyên mẫu Object

// p1.fly(); // Xuất hiện lỗi vì methos fly() không tồn tại trong nguyên mẫu


let p2 = new persion("Van Thinh");
let greeting1 = p2.greet();
console.log(greeting1);

p2.draw = function() {
    return "I can draw";
};
p2.draw();

// p1.draw() Error



// Liên kết mẫu __proto__

console.log(p.__proto__ === persion.prototype); // true
console.log(p.__proto__ === p2.__proto__); // true

// nên sử dụng phương thức getPrôttypeOf để kiểm tra nguyên mẫu
console.log(p.__proto__ === Object.getPrototypeOf(p)); // True


// Hoặc cách này
p.constructor.prototype


console.log(p.greet());


function test(age) {
    this.age = age;
}
test.prototype.greet = function() {

    return "Toi duoc " + this.age + " Nha ";
}
let clu = new test("Muoi hai");
let tesss = clu.greet();
console.log(tesss)




 clu.greet = function() {
    console.log("Xin chao");
}
console.log(clu.greet());



clu.cc = function() {
    console.log("Nhin cc gi");
}
console.log(clu.cc());