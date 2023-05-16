// var currentPosition = 0;

// function moveSlider(position) {
//   var sliderBar = document.querySelector('.sliderbar');
//   sliderBar.style.transform = 'translateX(' + (-position * 100) + '%)';
  
//   var dots = document.querySelectorAll('.dot');
//   var activeDot = document.querySelector('.dot.active');
//   activeDot.classList.remove('active');
//   dots[position].classList.add('active');
// }

// var dots = document.querySelectorAll('.dot');

// dots.forEach(function(dot, index) {
//   dot.addEventListener('click', function() {
//     currentPosition = index;
//     moveSlider(currentPosition);
//   });
// });


// setInterval(function() {
//   currentPosition++;
//   if (currentPosition >= 4) {
//     currentPosition = 0;
//   }
//   moveSlider(currentPosition);
// }, 5000);


let currentPosition = 0; // Khởi tạo vị trí thứ 0 cho vị trí ban đầu trên thanh trược

function moveBar(position) { // Truyển tham số position để thực hiện chuyển đổi vị trí trược (Lấy vị trí hiện tại)
    const sliderBar = document.querySelector(".sliderbar");
    sliderBar.style.transform = 'translateX(' + (- position * 100) + '%)'; // Dùng transForm để di chuyển đến thanh trược mới

    let bots = document.querySelectorAll('.dot');
    let activeBot = document.querySelector('.dot.active');
    activeBot.classList.remove('active'); // Xóa active trước đó 
    bots[position].classList.add('active'); // Thêm active vào vị trí hiện hành (Vị trí mới)
}

let dots = document.querySelectorAll('.dot');
dots.forEach(function(dot, index) { // Dùng loop để quét qua các class dot sau đó sau khi quét qua 1 class thì tương ứng với 1 event click
    dot.addEventListener("click", function() {
        currentPosition = index; // Cập nhật vị trí được chọn khi click
        moveBar(currentPosition); // Gọi movebar chính là ảnh trên thanh trược và cập nhật vị trí bằng currentPosition
    })
})


setInterval(function() { // Methods setInterval() => Callback có chức năng sau mỗi 5 giây sẽ tăng vị trí lên 1 đơn vị trên thanh trược
    currentPosition++; // Tăng lên 1 trên vị trí thanh trược
    if(currentPosition >=4) { // Điều kiện nếu vị trí lớn hơn hoặc bằng 0 thì vị trí trên thanh trược sẽ quay về 0
        currentPosition = 0; // Quay về vị trí 0 thỏa mảng điều kiện
    }
    moveBar(currentPosition); // Gọi function MoviBar và tham số currentPosition để cập nhật vị trí hình ảnh trên thanh trược tương úng với vị trí sau 5 giây cập nhật
}, 3000)

