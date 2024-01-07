import Complaint from '../models/complaint';
import Company from '../models/company';
import sequelize from '../db/sequelize';
import Solution from '../models/solution';
import Comment from '../models/comment';
const { Op } = require('sequelize');
const { QueryTypes } = require('sequelize');

class ComplaintService {
    
    createComplaint = async (req: any, res: any, next: any) => {
        try {
            await Complaint.create(req.body);
        } catch (err) {
            return console.error(err);
        }
    }
    updateComplaint = async (req: any, res: any, next: any) => {
        try {
            await Complaint.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
        } catch (err) {
            return console.error(err);
        }
    }
    deleteComplaint = async (req: any, res: any, next: any) => {
        try {
            await Complaint.destroy({
                where: {
                    id: req.params.id,
                },
            });
        } catch (err) {
            return console.error(err);
        }
    }

    

getFilteredComplaints = async (req:any , res:any , next: any) => {
    try {
        const whereClause: any = {};

        if (req.body.startDate) {
            whereClause.createdAt = {
                [Op.gt]: new Date(req.body.startDate)
            };
        }
        if (req.body.meToo !== undefined) {
            whereClause.meToo = req.body.meToo;
        }

        if (req.body.sector) {
            whereClause['$Company.sector$'] = req.body.sector;
        }

        if (req.body.priorityLevel !== undefined) {
            console.log(req.body.priorityLevel);
            whereClause.priorityLevel = req.body.priorityLevel;
        }

        const complaints = await Complaint.findAll({
            where: whereClause,
            include: [{
                model: Company,
                attributes: ['sector'],
            },
            {
                model: Solution
            },
            {
                model: Comment
            }
        ],
        });
        return complaints;
    } catch (err) {
        return console.error(err);
    }
}

getComplaintCountBySector = async (req: any, res: any, next: any) => {
    try {
        let query = `SELECT companies.sector, COUNT(*) AS count  
                     FROM complaints  
                     INNER JOIN companies ON complaints.companyId = companies.id 
                     GROUP BY companies.sector`;
                     
        const complaintsCountBySector = await sequelize.query(query, {
            type: QueryTypes.SELECT
        });
            
        return complaintsCountBySector;
    } catch (err) {
        return console.error(err);
    }
}


}
export default ComplaintService;