import CompanyAgentService from "../services/company-agent-service";

export default class CompanyAgentController {
  createCompanyAgent = async (req: any, res: any, next: any) => {
    const companyAgentService = new CompanyAgentService();
    await companyAgentService.createCompanyAgent(req, res, next);
    res.status(201).json({ message: "Company Agent created" });
  };
}

