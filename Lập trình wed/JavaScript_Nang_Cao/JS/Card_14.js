// // Problem No 1
// let user = prompt("Bạn Chọn Kéo, Búa Hay Bao");
// let cpuI = Math.floor(Math.random() * 3);
// let cpu = ["Keo", "Bua", "Bao"][cpuI];

// const match = (user, cpu) => {
//     if(user === cpu) {
//         return "Bạn đã huề";
//     }
//     else if(user === "Bua" & cpu === "Keo") {
//         return "user";
//     }
//     else if(user === "Keo" & cpu === "Bua") {
//         return "cpu";
//     }
//     else if(user === "Bao" & cpu === "Bua") {
//         return "user";
//     }
//     else if(user === "Bua" & cpu === "Bao") {
//         return "cpu";
//     }
//     else if(user === "Keo" & cpu === "Bao") {
//         return "user";
//     }
//     else if(user === "Bao" & cpu === "Keo") {
//         return "user";
//     }
// }
// let resutl = match(user, cpu);
// document.write(`CPU: ${cpu} <br> USER: ${user} <br> The Win is: ${resutl}`);









const jokes = [
    "1. Tại sao kỹ sư cầu đường lại thường uống nhiều nước? Vì họ thích xây cầu sông đấy!",
    "2. Nếu con vịt ngồi trên một chân thì chân còn lại là gì? Đó là chân của nó!",
    "3. Hai người bạn đang đi trên một chiếc xe buýt và một người hỏi: \"Tại sao chúng ta lại đi trên chiếc xe buýt này?\". Người còn lại trả lời: \"Để đến đích\".",
    "4. Một đầu bếp đang nấu ăn cho một nhóm khách hàng. Một người trong số đó hỏi anh ta: \"Bạn đã thử món ăn của mình chưa?\". Đầu bếp trả lời: \"Tất nhiên rồi, tôi đã thử nó trước khi đưa nó lên bàn\".",
    "5. Tại sao hai con chim yêu nhau lại ngồi trên cây? Bởi vì đó là nơi yên tĩnh để họ \"chirp\" với nhau.",
    "6. Tại sao hộp đen được gọi là hộp đen khi nó thực sự là màu cam? Bởi vì nó được thiết kế để chịu được mọi sự cố.",
    "7. Một người đàn ông đến tiệm cắt tóc và yêu cầu kiểu tóc \"bằng cả trời\". Sau khi cắt xong, anh ta nhìn vào gương và nói: \"Tôi không thích nó\". Nhân viên tiệm tóc hỏi: \"Tại sao vậy?\". Người đàn ông trả lời: \"Tôi thấy không khí tóc của tôi bây giờ rất lạnh\".",
    "8. Tại sao chú chim cánh cụt không bao giờ trừng mắt? Vì đó là cách chúng nhìn thế giới!",
    "9. Một cô gái hỏi chàng trai của mình: \"Anh ấy có thích tôi không?\". Chàng trai trả lời: \"Tôi không biết. Tôi không thể đọc được suy nghĩ của mình\".",
    "10. Tại sao chú gấu trúc thích ngủ? Bởi vì nó làm cho nó cảm thấy thật thoải mái trong giấc ngủ!",
    "11. Tại sao trái đất lại tròn? Vì nếu nó vuông thì sẽ bị góc cạnh.",
    "12. Tại sao cà rốt lại tốt cho mắt? Vì nó giúp mắt nhìn xa.",
    "13. Một chú chim cánh cụt đến gặp nhà hàng và hỏi: 'Bạn có thực đơn chay không?' Nhà hàng trả lời: 'Có, nhưng nó có hơi ngắn.'",
    "14. Tôi đã thử uống thuốc tiên để trở thành người nhỏ bé. Tôi nghĩ tôi đã uống quá nhiều, vì tôi bây giờ đang ngồi trong một lọ thuốc.",
    "15. Tại sao không nên để kẹo cao su trong tủ lạnh? Vì nó sẽ bị cứng và không thể nhai được.",
    "16. Một chú chó bước vào một quán rượu và hỏi: 'Tôi có thể có một cốc rượu không?' Bartender trả lời: 'Tôi xin lỗi, nhưng chú chó không được phép uống rượu ở đây.' Chú chó rằng: 'Nhưng tôi chỉ muốn một cốc rượu để giải khát thôi.'",
    "17. Tại sao con voi luôn mang theo một chiếc đồng hồ lớn? Vì nó không thể nhìn được vào đồng hồ nhỏ.",
    "18. Một người đàn ông đến gặp bác sĩ và nói: 'Tôi cảm thấy tôi không thể sống mà không được phẫu thuật.' Bác sĩ trả lời: 'Tôi đã làm phẫu thuật cho nhiều người nhưng tôi chưa bao giờ làm phẫu thuật cho một người sống.'",
    "19. Tại sao tên của các siêu anh hùng đều có chữ 'man' ở cuối tên? Vì họ là siêu nhân.",
    "20 Một người đàn ông đi vào một quán bar và yêu cầu một ly nước trái cây. Bartender trả lời: 'Tôi xin lỗi, nhưng chúng tôi không có nước trái cây.' Người đàn ông đáp: 'Vậy tôi sẽ uống một ly nước trái bò thay vì vậy.'"
  ];

  
// let radum = setInterval(function() {
//     document.querySelector(".chuyendoi").innerText = jokes[Math.floor(Math.random() * jokes.length - 1)];
//     // let joke = jokes[value];
// }, 3000)

// let index = setInterval(function() {
//     let value = Math.floor(Math.random() * jokes.length - 1);
//     let joke = jokes[value];
//     console.log(joke);
// }, 3000)