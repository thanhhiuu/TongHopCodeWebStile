const mongoose = require("mongoose"); // const mongoose = require("mongoose") là để import thư viện Mongoose.

const mongoUrl = "mongodb://127.0.0.1:27017/"; // là URL kết nối đến cơ sở dữ liệu MongoDB trên máy localhost và cổng 27017.

const connectMongoose = async () => { //  sử dụng cú pháp async/await để kết nối đến cơ sở dữ liệu MongoDB.
    try {
        await mongoose.connect(mongoUrl); //  được sử dụng để thực hiện kết nối đến MongoDB.
        console.log("Kết nối thành công");
    } catch (error) {
        console.error("Lỗi kết nối đến cơ sở dữ liệu:", error);
    }
};

module.exports = connectMongoose;
