import { Sequelize, QueryTypes } from "sequelize";
import sequelize from "../db/sequelize";
import Company from "../models/company";
import CompanyAgent from "../models/company-agent";



class CompanyAgentService {
  createCompanyAgent = async (req: any, res: any, next: any) => {
    try {
      await CompanyAgent.create(req.body);
    } catch (err) {
      throw err;
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
      throw err;
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
      throw err;
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
      throw err;
    }
  };

  getCompanyAgent = async (req: any, res: any, next: any) => {
    try {
      return CompanyAgent.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: Company,
          },
        ],
      });
    } catch (err) {
      throw err;
    }
  };

  
}

export default CompanyAgentService;
