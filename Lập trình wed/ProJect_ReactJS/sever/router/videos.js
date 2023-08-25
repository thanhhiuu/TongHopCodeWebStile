import express from "express"
import { addVideo, deleteVideo, getVideo, random, sub, trend, updateVideo, views } from "../controller/video.js";
import verifyToken from "../utils/verifyToken.js"

const router = express.Router();

router.post("/", verifyToken, addVideo);
router.put("/updatevideo/:id", verifyToken, updateVideo);
router.delete("/deletevideo/:id", verifyToken, deleteVideo);
router.get("/getvideo/:id", getVideo);
router.put("/views/:id", views);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub", verifyToken, sub);


export default router;