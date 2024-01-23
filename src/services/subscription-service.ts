import Subscription from "../models/Subscription";

class SubscriptionService {
  createSubscription = async (req: any, res: any, next: any) => {
    try {
      await Subscription.create(req.body);
    } catch (err) {
      throw err;
    }
  };

  updateSubscription = async (req: any, res: any, next: any) => {
    try {
      await Subscription.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      throw err;
    }
  };

  deleteSubscription = async (req: any, res: any, next: any) => {
    try {
      await Subscription.destroy({
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      throw err;
    }
  };
  getSubscription = async (req: any, res: any, next: any) => {
    try {
      const result = await Subscription.findAll({
        where: {
          companyId: req.query.companyId,
        },
      });
      return result;
    } catch (err) {
      throw err;
    }
  };
}

export default SubscriptionService;
