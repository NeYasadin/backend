import Subscription from "../models/Subscription";

class SubscriptionService {
  createSubscription = async (req: any, res: any, next: any) => {
    try {
      await Subscription.create(req.body);
    } catch (err) {
      return console.error(err);
    }
  };
}

export default SubscriptionService;