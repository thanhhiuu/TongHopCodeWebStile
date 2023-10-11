import express from "express";
import { signIns } from "../services/auth.js";

const router = express.Router();

router.post("/signin", signIns);

router.get("/*", (req, res) => {
  return res.send("Server none");
});

export default router;
