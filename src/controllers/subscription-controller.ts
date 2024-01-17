import SubscriptionService from "../services/subscription-service";

const subscriptionService = new SubscriptionService();

class SubscriptionController {
  createSubscription = async (req: any, res: any, next: any) => {
    try {
      await subscriptionService.createSubscription(req, res, next);
      res.status(201).json({ message: "Subscription created" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };
  updateSubscription = async (req: any, res: any, next: any) => {
    try {
      await subscriptionService.updateSubscription(req, res, next);
      res.status(200).json({ message: "Subscription updated" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

  deleteSubscription = async (req: any, res: any, next: any) => {
    try {
      await subscriptionService.deleteSubscription(req, res, next);
      res.status(200).json({ message: "Subscription deleted" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };
  getSubscription = async (req: any, res: any, next: any) => {
    try {
      const subscription = await subscriptionService.getSubscription(
        req,
        res,
        next
      );
      res.status(200).json({ subscription });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };
}

export default SubscriptionController;
