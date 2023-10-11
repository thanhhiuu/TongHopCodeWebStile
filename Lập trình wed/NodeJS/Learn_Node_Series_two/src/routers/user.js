import express from "express";
// import { getAllUsers, addUser } from "../controllers/users.js";

const router = express.Router();

// router.get("/", getAllUsers);
// router.post("/addUser", addUser);

router.get("/delete", (req, res) => {
  res.send("Xoá 1 User");
});

router.get("/*", (req, res) => {
  return res.send("Server none");
});

export default router;
