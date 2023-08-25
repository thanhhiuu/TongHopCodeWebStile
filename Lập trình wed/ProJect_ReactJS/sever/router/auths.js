import express from "express"
import { signin, signup } from "../controller/auth.js";


const router = express.Router();

// Tạo 1 người dùng User
// Định tuyến cho việc người dùng đăng ký
router.post("/signup", signup)

// Tạo nơi đăng nhap
router.post("/signin", signin)

// Tạo GOOGLE Auth


export default router;



// npm install bcryptjs => mã hóa password