let fetchAPI = fetch('https://jsonplaceholder.typicode.com/todos/1');
// Then đầu tiên giúp lấy dữ liệu từ HTTP bằng json
fetchAPI.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data); // Then thứ hai để in dữ liệu được lấy từ then thứ nhất ra
}).catch((err) => {
    console.error(err);
})