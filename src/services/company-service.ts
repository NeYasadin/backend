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
  //curl -X GET -H "Content-Type: application/json" http://localhost:3000/company/highest-rated-company

  getHighestRatedCompanies = async (req: any, res: any, next: any) => {
    try {
      let query = `
      SELECT c.id AS company_id, c.name AS company_name, AVG(cm.solutionRating) AS avg_solution_rating
      FROM neyasadin.companies c
      JOIN neyasadin.subscriptions s ON c.id = s.companyId
      LEFT JOIN neyasadin.complaints cm ON c.id = cm.companyId
      GROUP BY c.id, c.name
      ORDER BY avg_solution_rating DESC
      LIMIT 5;
    `;
      const highestRatedCompanies = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
      return highestRatedCompanies;
    } catch (err) {
      throw err;
    }
  }

  //to see the result:  curl -X GET -H "Content-Type: application/json" http://localhost:3000/company/active-company-agents  
  getActiveCompanyAgents = async (req: any, res: any, next: any) => {
    try {
      let query = `
      SELECT agent.name, agent.id, COUNT(sol.id) AS total_solutions_solved
      FROM neyasadin.company_agents as agent
      INNER JOIN neyasadin.solutions as sol ON agent.id = sol.companyAgentId
      GROUP BY agent.id, agent.name
      ORDER BY total_solutions_solved DESC
      LIMIT 5;
    `;
      const activeCompanyAgents = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });
      return activeCompanyAgents;
    } catch (err) {
      throw err;
    }
  }
  
  //Table of the companies that wrote the most solutions from past to present
  getMostSolutionsWrittenByCompany = async (req: any, res: any, next: any) => {
    try {
      let query = `
      SELECT
          c.id AS companyId,
          c.name AS companyName,
          COUNT(s.id) AS solutionCount
      FROM
          neyasadin.companies c
      LEFT JOIN
          neyasadin.company_agents ca ON c.id = ca.companyId
      LEFT JOIN
          neyasadin.solutions s ON ca.id = s.companyAgentId
      GROUP BY
          c.id, c.name
      ORDER BY
          solutionCount DESC;`;

      const complaintsCountBySector = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      return complaintsCountBySector;
    } catch (err) {
      throw err;
    }
  }

  //Names of company agents who have provided solutions to all complaints of their own company.
  getAgentResolvedAllComplaints = async (req: any, res: any, next: any) => {
    try {
      let query = `
      SELECT DISTINCT
          ca.id AS companyAgentId,
          ca.name AS companyAgentName
      FROM
          neyasadin.company_agents ca
      JOIN
          neyasadin.solutions s ON ca.id = s.companyAgentId
      JOIN
          neyasadin.complaints c ON s.complaintId = c.id AND ca.companyId = c.companyId
      GROUP BY
          ca.id, ca.name
      HAVING
          COUNT(DISTINCT c.id) = COUNT(DISTINCT s.complaintId);`;

      const complaintsCountBySector = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      return complaintsCountBySector;
    } catch (err) {
      throw err;
    }
  }
}

export default CompanyService;

/* OTHER VERSION OF THE QUERY ACTIVE COMPANIES

SELECT c.id AS company_id, c.name AS company_name, COUNT(s.id) AS total_solutions_solved
FROM neyasadin.companies c
JOIN neyasadin.company_agents ca ON c.id = ca.companyId
JOIN neyasadin.solutions s ON ca.id = s.companyAgentId
GROUP BY c.id, c.name
ORDER BY total_solutions_solved DESC
LIMIT 5;*/

//******************************************************************************************* */

/* OTHER VERSION OF THE QUERY HIGHEST RATED COMPANIES
SELECT c.id AS company_id, c.name AS company_name, AVG(coalesce(cm.solutionRating, 0)) AS avg_solution_rating
FROM companies c
JOIN subscriptions s ON c.id = s.companyId
LEFT JOIN complaints cm ON c.id = cm.companyId
GROUP BY c.id, c.name
ORDER BY avg_solution_rating DESC
LIMIT 5;
*/

