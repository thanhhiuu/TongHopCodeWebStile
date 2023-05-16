let a = () => {
    return   new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(456);
    }, 2000)
})
}
(async () => {
    let b = await a()
    console.log(`Run No 1: ${b}`)
    let c = await a()
    console.log(`Run No 2: ${c}`)
    let d = await a()
    console.log(`Run No 3: ${d} `)
    let e = await d + c
    console.log(`Kết quả: ${e}`)
})()



/**
 * - IIFE là viết tắt của "Immediately Invoked Function Expression" (biểu thức hàm tức thì được gọi ngay).
 *  Nó là một mẫu thiết kế trong JavaScript cho phép bạn tạo và thực thi một hàm ngay lập tức mà không cần gọi nó từ một chỗ khác.

- IIFE được định nghĩa bằng cách bọc một hàm trong một cặp dấu ngoặc đơn và gọi nó ngay sau đó. 
  Điều này cho phép hàm được thực thi một cách tức thì sau khi nó được định nghĩa. Dưới đây là cú pháp cơ bản của một IIFE:

* Cú pháp: 
// // // // (function() {
// // // //   // Mã của bạn ở đây
// // // // })();
- Trong IIFE, bạn có thể định nghĩa và sử dụng các biến cục bộ mà không ảnh hưởng đến phạm vi biến của các hàm và biến bên ngoài.
  Điều này giúp tránh sự xung đột và ô nhiễm tên biến.

- Một IIFE thường được sử dụng để tạo ra một phạm vi thực thi riêng tư (private scope) trong JavaScript. 
  Bằng cách định nghĩa các biến và hàm bên trong IIFE, bạn có thể tránh việc chúng bị truy cập từ bên ngoài. Điều này giúp giữ gìn sự an toàn và độc lập của mã.
 */