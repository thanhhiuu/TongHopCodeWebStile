/**
 * Introduction to array
 */
let practise = [12, 13, 14, 15, false, "I love you"];
console.log(practise[0]);
console.log(practise[1]);
console.log(practise[2]);
console.log(practise[3]);
console.log(practise[4]);
console.log(practise[5]);
console.log(practise[6]);
practise[6] = 45; // Add a new data to the array
console.log(practise);

// Problem NO 1
let chapter = [12, 14, 15, 17, 1000];
console.log(chapter);
// chapter.forEach(element => {
//     console.log(element);
//     console.log(typeof element);
// });

for(i = 0; i < chapter.length ; i++) {
    console.log(chapter[i]);
    console.log(chapter[i] + " " + typeof chapter)
}   

// Methods Concat => Noi chuoi  
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
const arr3 = arr1.concat(arr2);
console.log(arr3);




/* -----------------------------Phuong thuc trong Javascript--------------------------------- */

let num = [1, 2, 3, 4, 5, 6];
let a = num.toString(); // toString() => Chuyen doi Array thanh kieu Strings
console.log(a)

let b = num.join('_'); // Join() => Noi cac phan tu lai voi nhau
console.log(b, typeof b);


let c = num.pop(); // Phương thức pop() loại bỏ phần tử cuối cùng khỏi một mảng và trả về phần tử đó. Phương thức này thay đổi độ dài của mảng.
console.log(c);
num.pop();
console.log(num);

let d = num.push(7); //     Push thêm vào phần tử cuối
console.log(d, num);


let e = num.shift(); // Phương thức shift() loại bỏ phần tử đầu tiên khỏi một mảng và trả về phần tử đã loại bỏ đó. Phương thức này thay đổi độ dài của mảng.
console.log(e, num);

let f = num.unshift(3, 4); // Phương thức unshift() thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng. 
console.log(f, num);

let compare = (a, b) => { 
       return a - b;   // Sap xep theo thu tu tang dan
    // return b - a // Sap xep theo thu tu giam dan
}
let count = [1, 4, 5, 2, 6, 3];
let g = count.sort(); // Phuong thuc sort() giup sap xep cac phan tu 


console.log(g);

let newNumber = [12, 34, 32, 54, 53, 24, 14];
let newArray = num.concat(newNumber, count); // phương thức Array concat() của JavaScript để hợp nhất hai hoặc nhiều mảng thành một mảng duy nhất.
let newArray1 = [].concat(newNumber, num, count);
let newArray2 = newArray1.unshift(555, 888);
console.log(newArray, newArray1, newArray2);

delete newNumber[0]; // Phuong thuc delete giup xoa phan tu trong mang
newNumber.reverse(); //
console.log(newNumber); // Phuong thuc reverse() Đảo ngược thứ tự các phần tử trong mảng


let newSplice = [123, 234, 345, 456, 567];
newSplice.splice(2, 2, 111, 222, 333); // Loại Array trong JavaScript cung cấp một phương thức splice() rất mạnh mẽ cho phép bạn chèn các phần tử mới vào giữa một mảng. 
                                       // Tuy nhiên, bạn cũng có thể sử dụng phương pháp này để xóa và thay thế các phần tử hiện có.
console.log(newSplice); // Syntax "Ten Bien.splice("Bat dau tu dau", "Bo may phan tu", "Them vao phan tu")";

let newSlice = newSplice.slice(2); // Syntax bat dau tu phan tu thu 2 va tra ve gia tri con lai
let newSlice1 = newSplice.slice(2, 5); // Bat dau va ket thuc => Syntax bat dau tu 2 va ket thu o 5 (khong lay phan tu ket thuc)
console.log(newSlice, newSlice1);  
// Đối tượng Array.prototype cung cấp phương thức slice() cho phép bạn trích xuất các phần tử tập hợp con của một mảng và thêm chúng vào mảng mới. 
//Trong hướng dẫn này, chúng tôi sẽ chỉ cho bạn cách sử dụng thực tế của phương thức mảng slice() trong JavaScript.






// Problem No 1 
let arr = [1, 4, 8, 12, 15, 18];
let q;
 do {
    q = prompt("Bạn hay nhập số hợp lệ");
    q = Number.parseInt(q);
    arr.push(q);
 }while(q != 0)
 console.log(arr);



// Problem No 2
let arrr = [1, 2, 3, 4, 5];
let filterArray = arrr.filter((x) => {
    return x <= 4;
})
console.log(filterArray);




// Problem No 3

let arr4 = [100, 200, 300];
let arrMap = arr4.reduce((e1, e2) => {
    return e1 + e2;
});
console.log(arrMap);



// Problem No 4

let arr5 = [1, 7, 3, 4, 5, 6];
let arrrMap = arr5.map((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
    return value + index + array;
}) 
console.log(arrrMap);