import Company from "../models/company";
import CompanyAgent from "../models/company-agent";

class CompanyAgentService {
  createCompanyAgent = async (req: any, res: any, next: any) => {
    try {
      await CompanyAgent.create(req.body);
    } catch (err) {
      return console.error(err);
    }
  };

  updateCompanyAgent = async (req: any, res: any, next: any) => {
    try {
      await CompanyAgent.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      return console.error(err);
    }
  };

  deleteCompanyAgent = async (req: any, res: any, next: any) => {
    try {
      await CompanyAgent.destroy({
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      return console.error(err);
    }
  };

  authenticateCompanyAgent = async (req: any, res: any, next: any) => {
    try {
      if (req.query.mail == null || req.query.password == null) return null;
      return CompanyAgent.findOne({
        where: {
          mail: req.query.mail,
          password: req.query.password,
        },
        include: [
          {
            model: Company,
          },
        ],
      });
    } catch (err) {
      return console.error(err);
    }
  };

  getCompanyAgent = async (req: any, res: any, next: any) => {
    try {
      return CompanyAgent.findOne({
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      return console.error(err);
    }
  };
}

export default CompanyAgentService;
