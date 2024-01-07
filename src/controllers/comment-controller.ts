import CommentService from "../services/comment-service";

const commentService = new CommentService();

class CommentController {
  createComment = async (req: any, res: any, next: any) => {
    try {
      await commentService.createComment(req, res, next);
      res.status(201).json({ message: "Comment created" });
    } catch (err) {
      res.status(400).json({ message: "Error creating comment" });
    }
  };

  updateComment = async (req: any, res: any, next: any) => {
    try {
      await commentService.updateComment(req, res, next);
      res.status(200).json({ message: "Comment updated" });
    } catch (err) {
      res.status(400).json({ message: "Error updating comment" });
    }
  };

  deleteComment = async (req: any, res: any, next: any) => {
    try {
      await commentService.deleteComment(req, res, next);
      res.status(200).json({ message: "Comment deleted" });
    } catch (err) {
      res.status(400).json({ message: "Error deleting comment" });
    }
  };

  getComments = async (req: any, res: any, next: any) => {
    try {
      const comments = await commentService.getComments(req, res, next);
      res.status(200).json({ comments });
    } catch (err) {
      res.status(400).json({ message: "Error getting comments" });
    }
  };
}

export default CommentController;
