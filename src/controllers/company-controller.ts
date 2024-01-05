import CompanyService from "../services/company-service";
const companyService = new CompanyService();
class CompanyController {
  createCompany = async (req: any, res: any, next: any) => {
    await companyService.createCompany(req, res, next);
    res.status(201).json({ message: "Company created" });
  };
}

export default CompanyController;
