import CompanyAgentController from "../controllers/company-agent-controller";
import express from "express";

const router = express.Router();
const companyAgentController = new CompanyAgentController();

router.post("/", (req, res, next) => {
  companyAgentController.createCompanyAgent(req, res, next);
});

router.patch("/:id", (req, res, next) => {
  companyAgentController.updateCompanyAgent(req, res, next);
});

router.delete("/:id", (req, res, next) => {
  companyAgentController.deleteCompanyAgent(req, res, next);
});

router.get("/company", (req, res, next) => {
  companyAgentController.getCompanyByAgentId(req, res, next);
});

router.get("/authenticate", (req, res, next) => {
  companyAgentController.authenticateCompanyAgent(req, res, next);
});

router.get("/:id", (req, res, next) => {
  companyAgentController.getCompanyAgent(req, res, next);
});

export default router;
