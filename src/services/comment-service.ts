import { Sequelize, QueryTypes } from "sequelize";
import sequelize from "../db/sequelize";
import Comment from "../models/comment";

class CommentService {
  async createComment(req: any, res: any, next: any) {
    try {
      await Comment.create(req.body);
    } catch (err) {
      throw err;
    }
  }

  async updateComment(req: any, res: any, next: any) {
    try {
      await Comment.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      throw err;
    }
  }

  async deleteComment(req: any, res: any, next: any) {
    try {
      await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      throw err;
    }
  }

  async getComments(req: any, res: any, next: any) {
    try {
      const customerId = req.body.customerId;
      const comments = await sequelize.query(
        `
        SELECT comm.* FROM customers AS cu, comments AS comm, complaints AS comp
        WHERE comm.complaintId = comp.id AND comp.customerId = ${customerId};
      `,
        { type: QueryTypes.SELECT }
      );
      return comments;
    } catch (err) {
      throw err;
    }
  }
}

export default CommentService;
