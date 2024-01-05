import Complaint from '../models/complaint';
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
}
export default ComplaintService;