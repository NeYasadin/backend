import express from "express";
import CommentController from "../controllers/comment-controller";

const router = express.Router();
const commentController = new CommentController();

router.post("/", (req, res, next) => {
  commentController.createComment(req, res, next);
});

router.patch("/:id", (req, res, next) => {
  commentController.updateComment(req, res, next);
});

router.delete("/:id", (req, res, next) => {
  commentController.deleteComment(req, res, next);
});

router.get("/", (req, res, next) => {
  commentController.getComments(req, res, next);
});

export default router;
