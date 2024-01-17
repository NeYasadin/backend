import Customer from "../models/customer";

class CustomerService {
  createCustomer = async (req: any, res: any, next: any) => {
    try {
      await Customer.create(req.body);
    } catch (err) {
      throw err;
    }
  };

  updateCustomer = async (req: any, res: any, next: any) => {
    try {
      await Customer.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      throw err;
    }
  };

  deleteCustomer = async (req: any, res: any, next: any) => {
    try {
      await Customer.destroy({
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      throw err;
    }
  };

  authenticateCustomer = async (req: any, res: any, next: any) => {
    try {
      if (req.query.mail == null || req.query.password == null) return null;
      return Customer.findOne({
        where: {
          mail: req.query.mail,
          password: req.query.password,
        },
      });
    } catch (err) {
      throw err;
    }
  };
}

export default CustomerService;
