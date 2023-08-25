
const fetchData = (Callback) => {
    setTimeout(() => {
        const data = "Du lieu da duoc tai xuong thanh cong";
        Callback(data);
    }, 2000)

}
const checkData = (date) => {
    console.log("Xuat thanh cong", date);
}
setTimeout(() => {
    console.log("Xin chao 1")
    fetchData(checkData);
}, 0)
setTimeout(() => {
    console.log("Xin chao 2")
    process.nextTick(() => {
        console.log("Đây là con Promise 2")
    })
}, 0)
setTimeout(() => {
    console.log("Xin chao 3")

}, 0)

// promise
// Promise.resolve().then(() => {
//     console.log("Đây là promise 1")
// })
// Promise.resolve().then(() =>  {
//     console.log("Đây là Promise 2")
//     process.nextTick(() => {
//         console.log("Đây là con Promise 2")
//     })
// })

// Promise.resolve().then(() => {
//     console.log("Đây là promise 3")
// })
process.nextTick(() => { console.log("Đây là next 1") })
process.nextTick(() => {
    console.log("Đây là next 2")
    process.nextTick(() => {
        console.log("Đây là con next 2")
    })
})
process.nextTick(() => { console.log("Đây là next 3") })







// Summary
// nextTick được thực thi đầu tiên trong (Promise, setTimeout) sau đó tới promise và kế sẽ là setTimeout
