import Customer from "../models/customer";

class CustomerService {
  createCustomer = async (req: any, res: any, next: any) => {
    try {
      await Customer.create(req.body);
    } catch (err) {
      return console.error(err);
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
      return console.error(err);
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
      return console.error(err);
    }
  };
}

export default CustomerService;
