import { Router } from "express";
import ComplaintController from "../controllers/complaint-controller";

const router = Router();

const complaintController = new ComplaintController();

router.post("/", (req, res, next) => {
  complaintController.createComplaint(req, res, next);
});

router.patch("/increase-me-too/:id", (req, res, next) => {
  complaintController.increaseMeToo(req, res, next);
});

router.patch("/solutionrating/:id", (req, res, next) => {
  complaintController.updateSolutionRating(req, res, next);
});

router.patch("/increase-misleading/:id", (req, res, next) => {
  complaintController.increaseMisleading(req, res, next);
});

router.patch("/:id", (req, res, next) => {
  complaintController.updateComplaint(req, res, next);
});

router.delete("/:id", (req, res, next) => {
  complaintController.deleteComplaint(req, res, next);
});

router.get("/count-by-sector", (req, res, next) => {
  complaintController.getComplaintCountBySector(req, res, next);
});

router.get("/me-too-customer", (req, res, next) => {
  complaintController.getMeTooCustomers(req, res, next);
});

router.get("/", (req, res, next) => {
  complaintController.getComplaints(req, res, next);
});

router.get("/highest-pri-level", (req, res, next) => {
  complaintController.getHighestPriorityLevel(req, res, next);
});

export default router;
