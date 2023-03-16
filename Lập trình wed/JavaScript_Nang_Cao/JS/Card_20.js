// Problem No 1
const loadscript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(src + " done");
        }
        script.onerror = () => {
            reject(new Error("can't"))
        }
        document.head.append(script);
    })
}

let a = async () => {
    console.log(new Date().getMilliseconds());
    let b = await loadscript("https://chat.openai.com/chat");
    console.log(b);
    console.log(new Date().getMilliseconds());
}
a();


// Problem No 2 
let x = loadscript("https://chat.openai.com/chat");

x.then((successsMessage) => {
    console.log(successsMessage);
}).catch((errorMessage) => {
    console.log(errorMessage);
})
