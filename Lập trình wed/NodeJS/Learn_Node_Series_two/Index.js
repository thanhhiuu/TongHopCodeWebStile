import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./src/routers/user.js";
import authRouter from "./src/routers/auth.js";

import mongoose from "mongoose";
// import { createRoles } from "./src/services/Role.js";
dotenv.config();

const app = express();

const connectServer = () => {
  mongoose
    .connect(process.env.MONGO_DB)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};

app.use(
  cors({
    origin: process.env.CLIENT_URL,

    /**
     * * 𝗖𝗵𝗼 𝗽𝗵é𝗽 𝗰á𝗰 𝗽𝗵ươ𝗻𝗴 𝘁𝗵ứ𝗰 được sử dụng trong URL
     */
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

/**
 * ! CHO PHÉP SỬ ĐỌC ĐƯỢC DỮ LIỆU JSON
 */
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Có lỗi chú ý nhé !";

  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(9900, () => {
  connectServer();
  console.log("Server is running on port http://localhost:9900");
});
