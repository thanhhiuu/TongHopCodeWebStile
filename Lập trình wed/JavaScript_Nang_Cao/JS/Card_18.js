/// Introduction to Promises
// Problem no 1

/*
let promises = new Promise(function(resolve, reject) {
    alert("Hello");
    resolve("Lo cc");
})

setTimeout(function() {
    console.log("Thi ra may chon cai chet !");
}, 2000)

console.log("Tu lop 1 den lop 5 tao con chua so");
console.log(promises);
*/




// Problem no 2

// let myPromises = new Promise(function(resolve, reject) {
//     const random = Math.floor(Math.random() * 10);
//     document.querySelector(".promises").innerHTML = random;
//     if(random > 5) {
//         resolve("Thanh Cong !")
//     }
//     else {
//         reject("That Bai !")
//     }
// })
// console.log(myPromises);

// myPromises.then((successMessage) => {
//     console.log(successMessage);
// }).catch((errorMessage) => {
//     console.error(errorMessage);
// })




//Promise API

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Bạn thành công");
    }, 3400)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Bạn thành công 1");
    }, 3000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Bạn thành công 2");
    }, 2000) 
})


// p1.then((successMessage) => {
//     console.log(successMessage);
// }).catch((errorMessage) => {
//     console(errorMessage)
// })

// Using API
let API = Promise.all([p1, p2, p3]);
API.then((successMessage) => {
    console.log("Value all" ,successMessage);
})
let API1 = Promise.allSettled([p1, p2, p3]);
API1.then((successMessage) => {
    console.log( "Value allSettled" , successMessage);
})
let API2 = Promise.any([p1, p2, p3]);
API2.then((successMessage) => {
    console.log("Value any" ,successMessage);
})
let API3 = Promise.reject(new Error("Hey pro sai"));
API3.then((successMessage) => {
    console.log("Value reject" ,successMessage);
})
let API4 = Promise.resolve  ([p1, p2, p3]);
API4.then((successMessage) => {
    console.log("Value resolve" ,successMessage);
})
