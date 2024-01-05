import Company from "../models/company";

class CompanyService {
  createCompany = async (req: any, res: any, next: any) => {
    try {
      await Company.create(req.body);
    } catch (err) {
      return console.error(err);
    }
  };
}

export default CompanyService;
