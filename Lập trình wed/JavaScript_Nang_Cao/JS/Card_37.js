// Problem No 1
const add = async (text, n) => {
    return new Promise((revolve, reject) => {
        setTimeout(() => {
            revolve(text)
        }, 1000 * n)
    } )
}


(
    async () => {
        let text = await add("Helloo em nha !");
        console.log(text);
        text = await add("Loo concac");
        console.log(text)
    }
)()


// Viết giá trị trung bình của các số trong một mảng bằng cú pháp IIFE bằng js

let sum = (a, b, c) => {
    return a + b + c
}
let r = [3, 3, 3]
console.log(sum(...r));


// Viết hàm JS giải quyết 1 lời hứa sau n giây 
// Hàm lấy n làm tham số, sử dụng IIFE thực hiện các chức năng với giá trị khác nhau của n 
// Dùng ví dụ 1 để trải nghiệm

(
    async () => {
        let text = await add("Helloo em nha !", 2);
        console.log(text);
        text = await add("Lô cc !", 10); // Điều này giúp mình làm chủ được mình muốn xuất hiện đoạn code này ở giấy thức mấy
        console.log(text)
    }
)()





// Viết một công cụ đơn giản tính lãi xuất bằng js
let tinhLaiXuat = (r, t, y) => {
    return (r * t * y) / 100
}
console.log("Gía trị sẽ là : " + tinhLaiXuat(1000, 5, 1))