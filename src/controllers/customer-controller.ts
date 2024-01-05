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
}

export default CustomerController;
