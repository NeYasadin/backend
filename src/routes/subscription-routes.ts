import express from "express";
import SubscriptionController from "../controllers/subscription-controller";
import { nextTick } from "process";

const router = express.Router();

const subscriptionController = new SubscriptionController();

router.post("/", (req,res,next) => {
    subscriptionController.createSubscription(req,res,next);
});

export default router;