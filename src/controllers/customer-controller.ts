import CustomerService from "../services/customer-service";
const customerService = new CustomerService();
class CustomerController {
  createCustomer = async (req: any, res: any, next: any) => {
    await customerService.createCustomer(req, res, next);
    res.status(201).json({ message: "Customer created" });
  };

  updateCustomer = async (req: any, res: any, next: any) => {
    await customerService.updateCustomer(req, res, next);
    res.status(200).json({ message: "Customer updated" });
  };

  deleteCustomer = async (req: any, res: any, next: any) => {
    await customerService.deleteCustomer(req, res, next);
    res.status(200).json({ message: "Customer deleted" });
  };

  authenticateCustomer = async (req: any, res: any, next: any) => {
    const customer = await customerService.authenticateCustomer(req, res, next);
    if (customer == null) {
      res.status(401).json({ customer: null });
      return;
    } else {
      res.status(200).json({ customer: customer });
    }
  };
}

export default CustomerController;
