// For loop
/**
 * For(Khoi tao; Dieu kien; Trinh vong lap) {
 *  // Code
 * }
 */


// problem no 1
/*
for(let i = 1; i < 10; i++) {
    console.log(i++);
}
// Problem No 2

let i = 1;
for(;i < 10; i += 2) {
    console.log(i);
}
*/

// Problem No 3
// For in loop

// let objectElement = {
//     Hieu: 100,
//     Thinh: 200,
//     Hau: 300
// }
// for(let vt in objectElement) {
//     console.log(vt + " " + objectElement[vt]);
// }

// Problem No 4
// let deconation = {
//     color: "Blue"
// };

// let elementA = Object.create(deconation);
// elementA.border = 10;

// for (let vt in elementA) {
//     console.log(vt + " " + elementA[vt]);
// }
// program to validate the email address

// function resolveAfter2Seconds() {

//     console.log("starting slow promise")
  
//     return new Promise(resolve => {
  
//       setTimeout(function() {
  
//         resolve("slow")
  
//         console.log("slow promise is done")
  
//       }, 2000)
  
//     })
  
//   }
  
  
//   function resolveAfter1Second() {
  
//     console.log("starting fast promise")
  
//     return new Promise(resolve => {
  
//       setTimeout(function() {
  
//         resolve("fast")
  
//         console.log("fast promise is done")
  
//       }, 1000)
  
//     })
  
//   }
  
  
//   async function sequentialStart() {
  
//     console.log('==SEQUENTIAL START==')
  
//     const slow = await resolveAfter2Seconds()
  
//     console.log(slow)
  
//     const fast = await resolveAfter1Second()
  
//     console.log(fast)
  
//   }
  
  
//   async function concurrentStart() {
  
//     console.log('==CONCURRENT START with await==');
  
//     const slow = resolveAfter2Seconds()
  
//     const fast = resolveAfter1Second()
  
//     console.log(await slow)
  
//     console.log(await fast)
  
//   }
  
  
//   function concurrentPromise() {
  
//     console.log('==CONCURRENT START with Promise.all==')
  
//     return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) => {
  
//       console.log(messages[0])
  
//       console.log(messages[1])
  
//   })
// }
  
  
//   async function parallel() {
  
//     console.log('==PARALLEL with await Promise.all==')
  
//     await Promise.all([
  
//         (async()=>console.log(await resolveAfter2Seconds()))(),
  
//         (async()=>console.log(await resolveAfter1Second()))()
  
//     ])
  
//   }
  
  
//   sequentialStart()
  
//   setTimeout(concurrentStart, 4000)
  
//   setTimeout(concurrentPromise, 7000)
  
//   setTimeout(parallel, 10000)
  
  