const fs = require("fs");


fs.readFile(__filename, () => {
    console.log("Đây là I/O Queue")
    setImmediate(() => { console.log("Đây là setImmediate callback 2") })
    process.nextTick(() => { console.log("Đây là process.nextTick callback 2 ") })
    Promise.resolve().then(() => { console.log("Đây là Promise callback 2 ") })
})


process.nextTick(() => { console.log("Đây là process.nextTick callback 1 ") })
Promise.resolve().then(() => { console.log("Đây là Promise callback 1 ") })
setTimeout(() => {
    console.log("setTimeout, setInterval callback")
}, 0)
setImmediate(() => { console.log("Đây là setImmediate callback") })