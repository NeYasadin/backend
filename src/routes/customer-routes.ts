import express from "express";
import CustomerController from "../controllers/customer-controller";

const router = express.Router();

const customerController = new CustomerController();

router.post("/", (req, res, next) => {
  customerController.createCustomer(req, res, next);
});

router.patch("/:id", (req, res, next) => {
  customerController.updateCustomer(req, res, next);
});

router.delete("/:id", (req, res, next) => {
  customerController.deleteCustomer(req, res, next);
});

router.get("/authenticate", (req, res, next) => {
  customerController.authenticateCustomer(req, res, next);
});

router.get("/:id", (req, res, next) => {
  customerController.getCustomer(req, res, next);
});

export default router;
