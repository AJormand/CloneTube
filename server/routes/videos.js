import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getByTag,
  getVideo,
  random,
  search,
  subscribedVideos,
  trend,
  updateVideo,
} from "../controlers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//create video
router.post("/", verifyToken, addVideo);

//update video
router.put("/:id", verifyToken, updateVideo);

//delete video
router.delete("/:id", verifyToken, deleteVideo);

//get video
router.get("/find/:id", getVideo);

//view video
router.put("/view/:id", addView);

//get trend
router.get("/trend", trend);

//get random
router.get("/random", random);

//get subscribed channels videos
router.get("/sub", subscribedVideos);

//get videos by tags
router.get("/tags", getByTag);

//get videos by title
router.get("/search", search);

export default router;
