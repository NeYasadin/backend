import ComplaintService from "../services/complaint-service";
const complaintService = new ComplaintService();
class ComplaintController {
    createComplaint = async (req:any, res:any, next:any) => {
        await complaintService.createComplaint(req, res, next);
        res.status(201).json({ message: "Complaint created" });
    }
    updateComplaint = async (req:any, res:any, next:any) => {
        await complaintService.updateComplaint(req, res, next);
        res.status(200).json({ message: "Complaint updated" });
    }
    deleteComplaint = async (req:any, res:any, next:any) => {
        await complaintService.deleteComplaint(req, res, next);
        res.status(200).json({ message: "Complaint deleted" });
    }
    getComplaint = async (req:any, res:any, next:any) => {
        const complaints = await complaintService.getFilteredComplaints(req, res, next);
        res.status(200).json({complaints});
    }
    getComplaintCountBySector = async (req:any, res:any, next:any) => {
        const complaints = await complaintService.getComplaintCountBySector(req, res, next);
        res.status(200).json({complaints});
    }
}
export default ComplaintController;
