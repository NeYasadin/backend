import SolutionService from "../services/solution-service";

const solutionService = new SolutionService();

class SolutionController {
  createSolution = async (req: any, res: any, next: any) => {
    try {
      await solutionService.createSolution(req, res, next);
      res.status(201).json({ message: "Solution created" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };
  updateSolution = async (req: any, res: any, next: any) => {
    try {
      await solutionService.updateSolution(req, res, next);
      res.status(200).json({ message: "Solution updated" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };

  deleteSolution = async (req: any, res: any, next: any) => {
    try {
      await solutionService.deleteSolution(req, res, next);
      res.status(200).json({ message: "Solution deleted" });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };
  getSolution = async (req: any, res: any, next: any) => {
    try {
      const solution = await solutionService.getSolution(req, res, next);
      res.status(200).json({ solution });
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err });
    }
  };
}

export default SolutionController;
