import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controlers/comment.js";

const router = express.Router();

router.post("/", verifyToken, addComment);
router.delete("/:id/:videoId", verifyToken, deleteComment);
router.get("/:videoId", verifyToken, getComments);

export default router;
