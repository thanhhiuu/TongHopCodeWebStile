const express = require("express");
const router = express.Router(); // Đối tượng router này được sử dụng để định nghĩa các endpoint và xử lý yêu cầu liên quan đến địa chỉ URL cụ thể.

router.get('/', (req, res)=> { // Định nghĩa một route handler cho phương thức HTTP GET và đường dẫn là '/' (nghĩa là đường dẫn gốc). 
                               // Khi một yêu cầu GET được gửi đến đường dẫn '/', route handler này sẽ được thực thi.
    res.json([]); // Khi bạn sử dụng Router(), bạn có thể định nghĩa các endpoint (đường dẫn URL) và các xử lý liên quan đến endpoint đó. 
                  // Endpoint là đường dẫn URL cụ thể mà client gửi yêu cầu tới, ví dụ: "/users", "/products", "/login", v.v.
})

module.exports = router;



// router.get('/', (req, res)=> là một route handler cho phương thức GET và endpoint '/users':