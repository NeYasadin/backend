import ComplaintService from "../services/complaint-service";
const complaintService = new ComplaintService();
class ComplaintController {
  createComplaint = async (req: any, res: any, next: any) => {
    try {
      await complaintService.createComplaint(req, res, next);
      res.status(201).json({ message: "Complaint created" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

  updateComplaint = async (req: any, res: any, next: any) => {
    try {
      await complaintService.updateComplaint(req, res, next);
      res.status(200).json({ message: "Complaint updated" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };
  increaseMeToo = async (req: any, res: any, next: any) => {
    try {
      await complaintService.increaseMeToo(req, res, next);
      res.status(200).json({ message: "MeToo increased" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  }
  updateSolutionRating = async (req: any, res: any, next: any) => {
    try {
      await complaintService.updateSolutionRating(req, res, next);
      res.status(200).json({ message: "Solution rating updated" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  }

  increaseMisleading = async (req: any, res: any, next: any) => {
    try {
      await complaintService.increaseMisleading(req, res, next);
      res.status(200).json({ message: "Misleading increased" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  }

  deleteComplaint = async (req: any, res: any, next: any) => {
    try {
      await complaintService.deleteComplaint(req, res, next);
      res.status(200).json({ message: "Complaint deleted" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

  getComplaints = async (req: any, res: any, next: any) => {
    try {
      const complaints = await complaintService.getFilteredComplaints(
        req,
        res,
        next
      );
      res.status(200).json({ complaints });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

  getComplaintCountBySector = async (req: any, res: any, next: any) => {
    try {
      const complaints = await complaintService.getComplaintCountBySector(
        req,
        res,
        next
      );
      res.status(200).json({ complaints });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };
  getMeTooCustomers = async (req: any, res: any, next: any) => {
    try {
      const complaints = await complaintService.getMeTooCountByCustomer(
        req,
        res,
        next
      );
      res.status(200).json({ complaints });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  }
}
export default ComplaintController;
