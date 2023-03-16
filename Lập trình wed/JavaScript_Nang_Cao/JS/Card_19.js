// Async / Await trong Javascript
async function Wearther() {
    let vietnamWearther = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nhiet do Viet nam la 38 deg");
        }, 2000)
    })
    let binhThuanWearther = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nhiet do Binh thuan la 10 deg");
        }, 4000)
    })
    console.log("Dang du bao thoi tiet");
    console.log("Dang tai du lieu thoi tien Viet Nam");
    let vietnamW = await vietnamWearther;
    console.log("Thoi tiet viet nam: " + vietnamW);

    console.log("Dang tai du lieu thoi tien Binh Thuan");
    let binhThuanW = await binhThuanWearther;
    console.log("Thoi tiet viet nam: " + binhThuanW);
}

let a = Wearther();
console.log(a);
a.then((value) => {
    console.log(value);
})


// async / await trong JavaScript là một tính năng mới của ES2017,
//     giúp cho việc xử lý các tác vụ bất đồng bộ trở nên dễ dàng hơn và sinh động hơn.

// async được sử dụng để khai báo 1 hàm bất đồng bộ(asynchronous function). 
// Khi gọi hàm đó, nó sẽ luôn trả về một promise, ngay cả khi không sử dụng từ khóa return.

async function count() {
    return 42;
}
count().then(x => console.log(x)); // 42



// await được sử dụng để chờ đợi một promise được giải quyết hoặc bị từ chối. 
// Nếu promise được giải quyết, await sẽ trả về giá trị được resolve.

// Nếu promise bị từ chối, await sẽ ném ra một exception.
//  Từ khóa await chỉ có thể được sử dụng bên trong một async function.


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function hello() {
    console.log('Start');
    await delay(1000);
    console.log('End');
}

hello();



