import CompanyAgentController from "../controllers/company-agent-controller";
import express from "express";

const router = express.Router();
const companyAgentController = new CompanyAgentController();

router.post("/", (req, res, next) => {
  companyAgentController.createCompanyAgent(req, res, next);
});

export default router;