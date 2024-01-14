import Subscription from "../models/Subscription";

class SubscriptionService {
  createSubscription = async (req: any, res: any, next: any) => {
    try {
      await Subscription.create(req.body);
    } catch (err) {
      return console.error(err);
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
      return console.error(err);
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
      return console.error(err);
    }
  };
  getSubscription = async (req: any, res: any, next: any) => {
    try {
      return Subscription.findAll({
        where: {
          companyId: req.query.companyId,
        },
      });
    } catch (err) {
      return console.error(err);
    }
  };
}

export default SubscriptionService;
