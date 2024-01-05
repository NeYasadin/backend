import express from "express";
import CompanyController from "../controllers/company-controller";

const router = express.Router();

const companyController = new CompanyController();

router.post("/", (req, res, next) => {
  companyController.createCompany(req, res, next);
});

router.patch("/:id", (req, res, next) => {
  companyController.updateCompany(req, res, next);
});

router.delete("/:id", (req, res, next) => {
  companyController.deleteCompany(req, res, next);
});

export default router;