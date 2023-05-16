// Bạn phải tạo 1 danh sách việc cần làm có khả năng lưu trữ việc cần làm trong bộ nhớ cục bộ (Cũng nên có tùy chọn tạo, xóa và truy cập chúng)
let submit = document.querySelector("#submit");
let todo = document.querySelector(".todo");
submit.addEventListener("click", (e)=> {
    e.preventDefault();
    let titlec = title.value;
    let descc = desc.value;
    localStorage.setItem("save", JSON.stringify([titlec, descc]));
    console.log(e);

    todo.innerHTML = `
    <h1> ${titlec}</h1>
    <h1> ${descc}</h1>
    `;
    title.value = "";
    desc.value = "";
});
let deleteBTN = document.querySelector("#delete");
deleteBTN.addEventListener("click", (e)=> {
    e.preventDefault();
    localStorage.removeItem("save");
    todo.innerHTML = "";
})