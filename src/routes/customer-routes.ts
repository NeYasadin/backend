import express from "express";
import CustomerController from "../controllers/customer-controller";

const router = express.Router();

router.post("/", (req, res, next) => {
  const customerController = new CustomerController();
  customerController.createCustomer(req, res, next);
});

export default router;
