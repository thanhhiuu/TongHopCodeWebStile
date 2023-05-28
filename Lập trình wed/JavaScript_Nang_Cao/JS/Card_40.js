const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
    response.send("Hi there");
});
app.get("/about", (req, res) => {
    res.send("<b>Chao anh ban nhe</b>")
})
app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, '../HTML/Card_40.html')) // Cách sử dụng express để tham chiếu đến file HTML
})
app.listen(port, () => {
    console.log(`HTTP ULR for you http://localhost:${port}`);
});


/**
 * Create a simple Express application
First, create a new project directory named express-server.

        ==> mkdir express-server
        
Code language: JavaScript (javascript)
Second, run the npm init --yes command:

        ==> npm init --yes


 Vào link này để đến bài học : https://www.javascripttutorial.net/nodejs-tutorial/simple-express-server/
 */