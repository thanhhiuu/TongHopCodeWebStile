// Destructuring - Phép gán hủy cấu trúc
// Cách 1:
let arr = [1, 2, 3, 4, 5, 6, 7];

let [a, , b, , ...rest] = arr

/**
 * 
Đoạn mã trên sử dụng một tính năng của JavaScript gọi là "destructuring assignment" để gán giá trị của một mảng cho các biến riêng lẻ.

Trước tiên, mảng arr chứa các phần tử [1, 2, 3, 4, 5, 6, 7]. 
Sau đó, chúng ta sử dụng cú pháp destructuring assignment để gán giá trị của các phần tử này cho các biến riêng lẻ.

Dòng code let [a, , b, , ...rest] = arr có ý nghĩa như sau:

a sẽ nhận giá trị của phần tử đầu tiên của mảng arr, tức là 1.
Phần tử thứ hai của mảng arr được bỏ qua bằng cách sử dụng dấu phẩy. Điều này có nghĩa là giá trị của phần tử này sẽ không được gán cho bất kỳ biến nào.
b sẽ nhận giá trị của phần tử thứ ba của mảng arr, tức là 3.
Phần tử thứ tư của mảng arr cũng được bỏ qua.
...rest sẽ nhận tất cả các phần tử còn lại của mảng arr sau phần tử thứ tư. Trong trường hợp này, rest sẽ là một mảng chứa các phần tử [5, 6, 7].
 */

console.log(a, b, rest) // In ra màn hình là 1 3 array(5, 6, 7) Vì 1 khoảng trống trên sẽ tương đương với 1 kết quả trong arr

 // Cách 2:
 let {e, f} = {e: 1 , f: 3}; // Gán trực tiếp
 console.log(e, f)





 // Spread Operator
 let arr1 = [11, 22, 33, 44];
 let obj1 = {...arr1};
 console.log(obj1); // {0: 11, 1: 22, 2: 33, 3: 44}

 // Thi triển với Function
 function sum(s1, s2, s3) {
    return s1 + s2 + s3
 };
 console.log(sum(...arr1)); // => 66




 let obj2 = {
    name: "ThanhHieu",
    age: 21,
    Adess: "Binh Thuan"
 }
 console.log({...obj2, name: "Quynh Nhu"}) // Thay đổi đên đối tượng trong Object (Trường hợp này bị ghi đè vì ...obj2 được ghi đâu hàng)
//  console.log({ name: "Quynh Nhu", ...obj2}) // Sẽ không được ghi đè và in ra object trước do obj2 ghi sau cùng



/// Phá hủy (Destructuring) Đối tượng lồng nhau
let employ = {
    id: 1000,
    name: {
        firtName: 'Hieu',
        lastName: 'Nguyen'
    }
};
let {
    name: {
        firtName,
        lastName
    }
} = employ

console.log(firtName + " " + lastName);
