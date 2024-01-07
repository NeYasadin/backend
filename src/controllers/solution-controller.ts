import SolutionService from '../services/solution-service';

const solutionService = new SolutionService();

class SolutionController {
  createSolution = async (req: any, res: any, next: any) => {
    await solutionService.createSolution(req, res, next);
    res.status(201).json({ message: 'Solution created' });
  };
  updateSolution = async (req: any, res: any, next: any) => {
    await solutionService.updateSolution(req, res, next);
    res.status(200).json({ message: 'Solution updated' });
  };

  deleteSolution = async (req: any, res: any, next: any) => {
    await solutionService.deleteSolution(req, res, next);
    res.status(200).json({ message: 'Solution deleted' });
  };
  getSolution = async (req: any, res: any, next: any) => {
    const solutions = await solutionService.getSolution(req, res, next);
    res.status(200).json({ solutions: solutions });
  };
}

export default SolutionController;