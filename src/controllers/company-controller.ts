import CompanyService from "../services/company-service";
const companyService = new CompanyService();
class CompanyController {
  createCompany = async (req: any, res: any, next: any) => {
    try {
      await companyService.createCompany(req, res, next);
      res.status(201).json({ message: "Company created" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };
  updateCompany = async (req: any, res: any, next: any) => {
    try {
      await companyService.updateCompany(req, res, next);
      res.status(200).json({ message: "Company updated" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

  deleteCompany = async (req: any, res: any, next: any) => {
    try {
      await companyService.deleteCompany(req, res, next);
      res.status(200).json({ message: "Company deleted" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };
  getCompanies = async (req: any, res: any, next: any) => {
    try {
      const companies = await companyService.getCompanies(req, res, next);
      res.status(200).json({ companies });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };
  getCompanyWithAgents = async (req: any, res: any, next: any) => {
    try {
      const companyWithAgents = await companyService.getCompanyWithAgents(
        req,
        res,
        next
      );
      res.status(200).json({ companyWithAgents });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };
}

export default CompanyController;
