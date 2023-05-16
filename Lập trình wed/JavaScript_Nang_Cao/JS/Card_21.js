let fetchAPI = fetch('https://jsonplaceholder.typicode.com/todos/1');
// Then đầu tiên giúp lấy dữ liệu từ HTTP bằng json
fetchAPI.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data); // Then thứ hai để in dữ liệu được lấy từ then thứ nhất ra
}).catch((err) => {
    console.error(err);
})


// Problem No 1
// Hacker
let a =  [
    "Đang tìm kiếm thông tin....",
    "Xác định vị trí...",
    "Lưu thông tin",
    "Lưu vị trí",
    "Tạo mã độc",
    "Truy vào facebook...",
    "Gán mã với tên mã HHTTAS",
    "Vui lòng đợi........."
]
const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(true);
        }, seconds * 2000);

    })   
}

const showHack = async (message) => {
    await sleep(2);
    console.log(message);
    let show = document.querySelector(".showHack");
    show.innerHTML = message;
    saveData();
}
(async() => {
    for(let j = 0; j < a.length; j++) {
        await showHack(a[j]);
    saveData();

    }
})()
let show = document.querySelector(".showData");
const saveData = () => {
    localStorage.setItem("data", show.innerHTML);
}
const showData = () => {
    show.innerHTML = localStorage.getItem("data");
}
showData();