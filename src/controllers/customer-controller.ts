import CustomerService from "../services/customer-service";
const customerService = new CustomerService();
class CustomerController {
  createCustomer = async (req: any, res: any, next: any) => {
    await customerService.createCustomer(req, res, next);
    res.status(201).json({ message: "Customer created" });
  };
}

export default CustomerController;
