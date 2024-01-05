import Company from "../models/company";

class CompanyService {
  createCompany = async (req: any, res: any, next: any) => {
    try {
      await Company.create(req.body);
    } catch (err) {
      return console.error(err);
    }
  };
  updateCompany = async (req: any, res: any, next: any) => {
    try {
      await Company.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      return console.error(err);
    }
  };

  deleteCompany = async (req: any, res: any, next: any) => {
    try {
      await Company.destroy({
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      return console.error(err);
    }
  };
}

export default CompanyService;
