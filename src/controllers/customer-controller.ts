import CustomerService from "../services/customer-service";

class CustomerController {
  createCustomer = async (req: any, res: any, next: any) => {
    const customerService = new CustomerService();
    await customerService.createCustomer(req, res, next);
    res.status(201).json({ message: "Customer created" });
  };
}

export default CustomerController;
