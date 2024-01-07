import Company from "../models/company";
import { Sequelize, QueryTypes } from "sequelize";
import sequelize from "../db/sequelize";

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


  getCompany = async (req: any, res: any, next: any) => {
    try {
      const companies = await Company.findAll();
      return companies;
    }  
    
    catch (err) {
      return console.error(err);
    }
  } 

  getCompanyWithAgents = async (req: any, res: any, next: any) => {
    try {
      let query = `SELECT companies.name AS companyname, company_agents.* 
                   FROM companies  
                   INNER JOIN company_agents ON company_agents.companyId = companies.id`;
                   
      const companyWithAgents = await sequelize.query(query, {
          type: QueryTypes.SELECT
      });
          
      return companyWithAgents;
  }
    catch (err) {
      return console.error(err);
    }
  }
}

export default CompanyService;
