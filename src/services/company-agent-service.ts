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
      return CompanyAgent.findOne({
        where: {
          mail: req.body.mail,
          password: req.body.password,
        },
      });
    } catch (err) {
      return console.error(err);
    }
  };
}

export default CompanyAgentService;
