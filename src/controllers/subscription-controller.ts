import SubscriptionService from "../services/subscription-service";

const subscriptionService = new SubscriptionService();

class SubscriptionController {
  createSubscription = async (req: any, res: any, next: any) => {  
    await subscriptionService.createSubscription(req, res, next);
    res.status(201).json({ message: "Subscription created" });
  };
  updateSubscription = async (req: any, res: any, next: any) => {
    await subscriptionService.updateSubscription(req, res, next);
    res.status(200).json({ message: "Subscription updated" });
  };

  deleteSubscription = async (req: any, res: any, next: any) => {
    await subscriptionService.deleteSubscription(req, res, next);
    res.status(200).json({ message: "Subscription deleted" });
  };

}

export default SubscriptionController;