import { get } from "http";
import CompanyAgentService from "../services/company-agent-service";
const companyAgentService = new CompanyAgentService();
export default class CompanyAgentController {
  createCompanyAgent = async (req: any, res: any, next: any) => {
    try {
      await companyAgentService.createCompanyAgent(req, res, next);
      res.status(201).json({ message: "Company Agent created" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

  updateCompanyAgent = async (req: any, res: any, next: any) => {
    try {
      await companyAgentService.updateCompanyAgent(req, res, next);
      res.status(200).json({ message: "Company Agent updated" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

  deleteCompanyAgent = async (req: any, res: any, next: any) => {
    try {
      await companyAgentService.deleteCompanyAgent(req, res, next);
      res.status(200).json({ message: "Company Agent deleted" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

  authenticateCompanyAgent = async (req: any, res: any, next: any) => {
    try {
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
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

  getCompanyAgent = async (req: any, res: any, next: any) => {
    try {
      const companyAgent = await companyAgentService.getCompanyAgent(
        req,
        res,
        next
      );
      res.status(200).json({ companyAgent });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

  getCompanyByAgentId = async (req: any, res: any, next: any) => {
    try {
      const companyInfo = await companyAgentService.getCompanyByAgentId(req);
      res.status(200).json({ company: companyInfo });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

 
}
