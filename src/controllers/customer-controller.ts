import CustomerService from "../services/customer-service";
const customerService = new CustomerService();
class CustomerController {
  createCustomer = async (req: any, res: any, next: any) => {
    try {
      await customerService.createCustomer(req, res, next);
      res.status(201).json({ message: "Customer created" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

  updateCustomer = async (req: any, res: any, next: any) => {
    try {
      await customerService.updateCustomer(req, res, next);
      res.status(200).json({ message: "Customer updated" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

  deleteCustomer = async (req: any, res: any, next: any) => {
    try {
      await customerService.deleteCustomer(req, res, next);
      res.status(200).json({ message: "Customer deleted" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

  authenticateCustomer = async (req: any, res: any, next: any) => {
    try {
      const customer = await customerService.authenticateCustomer(
        req,
        res,
        next
      );
      if (customer == null) {
        res.status(200).json({ customer: null });
        return;
      } else {
        res.status(200).json({ customer: customer });
      }
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };
  getCustomer = async (req: any, res: any, next: any) => {
    try {
      const customer = await customerService.getCustomer(req, res, next);
      res.status(200).json({ customer });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };
}

export default CustomerController;
