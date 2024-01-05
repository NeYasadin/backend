import Customer from "../models/customer";

class CustomerService {
  createCustomer = async (req: any, res: any, next: any) => {
    try {
      await Customer.create(req.body);
    } catch (err) {
      return console.error(err);
    }
  };
}

export default CustomerService;
