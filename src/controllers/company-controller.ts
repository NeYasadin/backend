import CompanyService from "../services/company-service";
const companyService = new CompanyService();
class CompanyController {
  createCompany = async (req: any, res: any, next: any) => {
    await companyService.createCompany(req, res, next);
    res.status(201).json({ message: "Company created" });
  };
  updateCompany = async (req: any, res: any, next: any) => {
    await companyService.updateCompany(req, res, next);
    res.status(200).json({ message: "Company updated" });
  };

  deleteCompany = async (req: any, res: any, next: any) => {
    await companyService.deleteCompany(req, res, next);
    res.status(200).json({ message: "Company deleted" });
  };
  getCompany = async (req: any, res: any, next: any) => {
    const compaines = await companyService.getCompany(req, res, next);
    res.status(200).json({ compaines });

  }
  getCompanyWithAgents = async (req: any, res: any, next: any) => {
    const companyWithAgents = await companyService.getCompanyWithAgents(req, res, next);
    res.status(200).json({ companyWithAgents });

  }
}

export default CompanyController;
