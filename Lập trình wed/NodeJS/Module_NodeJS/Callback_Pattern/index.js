// Callback pattern là một cách tiếp cận bất đồng bộ (async programming) thông qua sử dụng hàm gọi lại
// Khi có 1 tác vụ bất đồng bộ được sử dụng thay vì đọi kết quả trả về thì node js sẽ thực thi các tác vụ khác cho đến khi hoàn thành 
// và nó sẽ gọi lại hàm đã được chỉ định (callback function)

function fetchData(callback) { // 1 hàm bất đồng bộ
    // Giả định rằng đây là một tác vụ bất đồng bộ
    setTimeout(function() { // Ta sẽ đợi 2 giây để thực thì tải data
      const data = 'Dữ liệu đã được tải xuống';
      callback(data); // Sau khi qua 2 giây thì callback được gọi lại và trả về 
    }, 2000);
  }
  
  function processData(data) { // sau khi dữ liệu được trả về fetchData thì nó được truyền vào 
    console.log('Đã nhận được dữ liệu:', data);
  }
  
  fetchData(processData) 
  console.log('Thực thi các tác vụ khác...');
  
  