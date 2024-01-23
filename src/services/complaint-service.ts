import Complaint from "../models/complaint";
import Company from "../models/company";
import sequelize from "../db/sequelize";
import Solution from "../models/solution";
import Comment from "../models/comment";
import Customer from "../models/customer";
import CompanyAgent from "../models/company-agent";
const { Op } = require("sequelize");
const { QueryTypes } = require("sequelize");

class ComplaintService {
  createComplaint = async (req: any, res: any, next: any) => {
    try {
      await Complaint.create(req.body);
    } catch (err) {
      throw err;
    }
  };
  updateComplaint = async (req: any, res: any, next: any) => {

    try {
      await Complaint.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      throw err;
    }
  };

  increaseMeToo = async (req: any, res: any, next: any) => {
    try {
      const complaint = await Complaint.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (complaint) {

        await Complaint.increment('meToo', {
          by: 1,
          where: {
            id: req.params.id,
          },
        });
      }
    } catch (err) {
      next(err);
    }
  };
  

  deleteComplaint = async (req: any, res: any, next: any) => {
    try {
      await Complaint.destroy({
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      throw err;
    }
  };

  getFilteredComplaints = async (req: any, res: any, next: any) => {
    try {
      const whereClause: any = {};

      if (req.query.startDate) {
        whereClause.createdAt = {
          [Op.gt]: new Date(req.query.startDate),
        };
      }
      if (req.query.meToo !== undefined) {
        whereClause.meToo = req.query.meToo;
      }

      if (req.query.sector) {
        whereClause["$Company.sector$"] = req.query.sector;
      }

      if (req.query.priorityLevel !== undefined) {
        whereClause.priorityLevel = req.query.priorityLevel;
      }

      if (req.query.companyId) {
        whereClause.companyId = req.query.companyId;
      }

      if (req.query.customerId) {
        whereClause.customerId = req.query.customerId;
      }

      const complaints = await Complaint.findAll({
        where: whereClause,
        order: [["createdAt", "ASC"]],
        include: [
          {
            model: Company,
            attributes: ["sector"],
          },
          {
            model: Solution,
            include: [
              {
                model: CompanyAgent,
                as: "companyAgent",
              },
            ],
          },
          {
            model: Comment,
            include: [
              {
                model: Customer,
              },
            ],
          },
          {
            model: Customer,
          },
        ],
      });
      return complaints;
    } catch (err) {
      throw err;
    }
  };

  getComplaintCountBySector = async (req: any, res: any, next: any) => {
    try {
      let query = `SELECT companies.sector, COUNT(*) AS count  
                     FROM complaints  
                     INNER JOIN companies ON complaints.companyId = companies.id 
                     GROUP BY companies.sector`;

      const complaintsCountBySector = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      return complaintsCountBySector;
    } catch (err) {
      throw err;
    }
  };
  //to see the result:
  //curl -X GET -H "Content-Type: application/json" http://localhost:3000/complaint/me-too-customer
  getMeTooCountByCustomer = async (req: any, res: any, next: any) => {
    try {
      let query = `SELECT customers.id, customers.name, SUM(complaints.meToo) AS meTooCount
      FROM neyasadin.customers
      JOIN neyasadin.complaints ON customers.id = complaints.customerId
      GROUP BY customers.id, customers.name
      ORDER BY meTooCount DESC
      LIMIT 5;`;

      const meTooCountByCustomer = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      console.log(meTooCountByCustomer);

      return meTooCountByCustomer;
    } catch (err) {
      throw err;
    }
  }

  //Among all the companies that have received complaints to date, the 5 companies that have achieved the highest priority level average
  getHighestPriorityLevel = async (req: any, res: any, next: any) => {
    try {
      let query = `SELECT
      c.id AS companyId,
      c.name AS companyName,
      AVG(comp.priorityLevel) AS avgPriorityLevel
  FROM
      neyasadin.companies c, neyasadin.complaints comp
  
  WHERE c.id = comp.companyId

  GROUP BY
      c.id, c.name
  ORDER BY
      avgPriorityLevel DESC
  LIMIT 5;`;

      const complaintsCountBySector = await sequelize.query(query, {
        type: QueryTypes.SELECT,
      });

      return complaintsCountBySector;
    } catch (err) {
      throw err;
    }
  }
}
export default ComplaintService;


/* `SELECT
      c.id AS companyId,
      c.name AS companyName,
      AVG(comp.priorityLevel) AS avgPriorityLevel
  FROM
      neyasadin.companies c
  
  JOIN neyasadin.complaints comp  on c.id = comp.companyId
  
  WHERE               
      EXISTS (  
          SELECT *
          FROM neyasadin.complaints co
          WHERE co.companyId = c.id
      ) 
  GROUP BY
      c.id, c.name
  ORDER BY
      avgPriorityLevel DESC
  LIMIT 5;` */