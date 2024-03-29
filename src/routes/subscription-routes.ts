import express from "express";
import SubscriptionController from "../controllers/subscription-controller";

const router = express.Router();

const subscriptionController = new SubscriptionController();

router.post("/", (req,res,next) => {
    subscriptionController.createSubscription(req,res,next);
});
router.patch("/:id", (req,res,next) => {
    subscriptionController.updateSubscription(req, res, next);
});
router.delete("/:id", (req,res,next) => {
    subscriptionController.deleteSubscription(req,res,next);
});
router.get("/", (req,res,next) => {
    subscriptionController.getSubscription(req,res,next);
});

export default router;
