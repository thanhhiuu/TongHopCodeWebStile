const fs = require("node:fs/promises");


//// ---------------Cách 1--------------------
// fs.readFile("name.txt", "utf-8") 
// .then((data )=> console.log(data))
// .catch((error) => console.log(error))

//// ---------------Cách 2-------------------

async function readFile() {
    try {
        const data = await fs.readFile("name.txt", "utf-8")
        console.log(data)
    } 
    catch (error) {
        console.log(error)
    }
}



// fs promise module là một phiên bản được bao bọc xung quanh fs module gốc, nhưng thay vì sử dụng callbacks, nó sử dụng Promises để xử lý kết quả.
// Promises là một cơ chế trong JavaScript cho phép xử lý bất đồng bộ (asynchronous) một cách dễ dàng hơn.