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
}
export default ComplaintService;
