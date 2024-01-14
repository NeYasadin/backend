import CompanyAgentService from "../services/company-agent-service";
const companyAgentService = new CompanyAgentService();
export default class CompanyAgentController {
  createCompanyAgent = async (req: any, res: any, next: any) => {
    const companyAgentService = new CompanyAgentService();
    await companyAgentService.createCompanyAgent(req, res, next);
    res.status(201).json({ message: "Company Agent created" });
  };

  updateCompanyAgent = async (req: any, res: any, next: any) => {
    await companyAgentService.updateCompanyAgent(req, res, next);
    res.status(200).json({ message: "Company Agent updated" });
  };

  deleteCompanyAgent = async (req: any, res: any, next: any) => {
    await companyAgentService.deleteCompanyAgent(req, res, next);
    res.status(200).json({ message: "Company Agent deleted" });
  };

  authenticateCompanyAgent = async (req: any, res: any, next: any) => {
    const companyAgent = await companyAgentService.authenticateCompanyAgent(
      req,
      res,
      next
    );
    if (companyAgent == null) {
      res.status(200).json({ companyAgent: null });
      return;
    } else {
      res.status(200).json({ companyAgent: companyAgent });
    }
  };

  getCompanyAgent = async (req: any, res: any, next: any) => {
    const companyAgent = await companyAgentService.getCompanyAgent(
      req,
      res,
      next
    );
    res.status(200).json({ companyAgent });
  };
}
