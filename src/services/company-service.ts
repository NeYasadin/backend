import Company from "../models/company";
import { Sequelize, QueryTypes } from "sequelize";
import sequelize from "../db/sequelize";

class CompanyService {
  createCompany = async (req: any, res: any, next: any) => {
    try {
      await Company.create(req.body);
    } catch (err) {
      throw err;
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
      throw err;
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
      throw err;
    }
  };

  getCompanies = async (req: any, res: any, next: any) => {
    try {
      const companies = await Company.findAll();
      return companies;
    } catch (err) {
      throw err;
    }
  };

  getCompanyWithAgents = async (req: any, res: any, next: any) => {
    try {
      let query = `SELECT companies.name AS companyname, company_agents.* 
                   FROM companies  
                   INNER JOIN company_agents ON company_agents.companyId = companies.id`;

      const companyWithAgents = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      return companyWithAgents;
    } catch (err) {
      throw err;
    }
  };
  /*to see most active company : curl -X GET -H "Content-Type: application/json" http://localhost:3000/company/active-company*/ 
  getActiveCompanies = async (req: any, res: any, next: any) => {
    try {
      let query = `
      SELECT c.id AS company_id, c.name AS company_name, COUNT(s.id) AS total_solutions_solved
      FROM neyasadin.companies c, neyasadin.company_agents ca, neyasadin.solutions s
      WHERE c.id = ca.companyId AND ca.id = s.companyAgentId
      GROUP BY c.id, c.name
      ORDER BY total_solutions_solved DESC
      LIMIT 5;
    `;
      const activeCompanies = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
      return activeCompanies;
    } catch (err) {
      throw err;
    }
  }
}

export default CompanyService;

/* OTHER VERSION OF THE QUERY

SELECT c.id AS company_id, c.name AS company_name, COUNT(s.id) AS total_solutions_solved
FROM neyasadin.companies c
JOIN neyasadin.company_agents ca ON c.id = ca.companyId
JOIN neyasadin.solutions s ON ca.id = s.companyAgentId
GROUP BY c.id, c.name
ORDER BY total_solutions_solved DESC
LIMIT 5;*/