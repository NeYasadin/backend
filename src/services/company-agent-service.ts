import CompanyAgent from "../models/company-agent";

class CompanyAgentService {
  createCompanyAgent = async (req: any, res: any, next: any) => {
    try {
      await CompanyAgent.create(req.body);
    } catch (err) {
      return console.error(err);
    }
  };
}

export default CompanyAgentService;
