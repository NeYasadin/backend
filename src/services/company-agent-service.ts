import sequelize from "sequelize";
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
      });
    } catch (err) {
      throw err;
    }
  };

  getActiveCompanyAgents = async (req: any, res: any, next: any) => {
    try {
      let query = `
      SELECT agent.id, COUNT(sol.id) AS total_solutions_solved
      FROM company_agents as agent
      INNER JOIN solutions as sol ON agent.id = sol.companyAgentId
      GROUP BY agent.id, agent.name
      ORDER BY total_solutions_solved DESC
      LIMIT 5;
    `;
    /*const companyAgents = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
      return companyAgents;*/
    } catch (err) {
      throw err;
    }
  }
}

export default CompanyAgentService;


/* SELECT agent.id, COUNT(sol.id) AS total_solutions_solved
FROM neyasadin.company_agents as agent
INNER JOIN neyasadin.solutions as sol ON agent.id = sol.companyAgentId
GROUP BY agent.id, agent.name
ORDER BY total_solutions_solved DESC
LIMIT 5; */