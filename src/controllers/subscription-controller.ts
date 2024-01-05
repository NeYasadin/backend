import SubscriptionService from "../services/subscription-service";

class SubscriptionController {
  createSubscription = async (req: any, res: any, next: any) => {
    const subscriptionService = new SubscriptionService();
    await subscriptionService.createSubscription(req, res, next);
    res.status(201).json({ message: "Subscription created" });
  };
}

export default SubscriptionController;