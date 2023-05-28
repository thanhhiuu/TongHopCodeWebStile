const express = require('express')
const path = require('path')
const multer = require('multer')
const upload = multer({ dest: 'uploads/'});

const app = express()
const port = 3000

app.get('/', (req, res) => { //  req (request) đại diện cho đối tượng yêu cầu, res (response) đại diện cho đối tượng phản hồi
  res.sendFile(path.join(__dirname, "templates/index.html")) // là biến toàn cục và đại diện cho tệp script + sendFile giúp gửi tệp HTML về người dùng
})
// app.post('/', (req, res) => { //  req (request) đại diện cho đối tượng yêu cầu, res (response) đại diện cho đối tượng phản hồi
//   res.sendFile(path.join(__dirname, "templates/index.html")) // là biến toàn cục và đại diện cho tệp script + sendFile giúp gửi tệp HTML về người dùng
// })

app.post('/merge', upload.array('pdfs', 1) , function(req, res, next) {
  console.log(req.files)
  res.send({data: req.files})  // cú pháp của multer upload.array('name của input', số lượng cho phép)
} )
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})