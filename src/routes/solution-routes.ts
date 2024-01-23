import express from "express";
import SolutionController from "../controllers/solution-controller";

const router = express.Router();

const solutionController = new SolutionController();

router.post("/", (req,res,next) => {
    solutionController.createSolution(req,res,next);
});
router.patch("/:id", (req,res,next) => {
    solutionController.updateSolution(req, res, next);
});
router.delete("/:id", (req,res,next) => {
    solutionController.deleteSolution(req,res,next);
});
router.get("/solution-with-complaint", (req,res,next) => {
    solutionController.getSolutionWithComplaint(req,res,next);
});
router.get("/", (req,res,next) => {
    solutionController.getSolution(req,res,next);
});

export default router;