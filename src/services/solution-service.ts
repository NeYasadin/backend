import Solution from "../models/solution";

class SolutionService {
  createSolution = async (req: any, res: any, next: any) => {
    try {
      await Solution.create(req.body);
    } catch (err) {
      throw err;
    }
  };

  updateSolution = async (req: any, res: any, next: any) => {
    try {
      await Solution.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      throw err;
    }
  };

  deleteSolution = async (req: any, res: any, next: any) => {
    try {
      await Solution.destroy({
        where: {
          id: req.params.id,
        },
      });
    } catch (err) {
      throw err;
    }
  };
  getSolution = async (req: any, res: any, next: any) => {
    try {
      return Solution.findAll({
        where: {
          companyAgentId: req.query.companyAgentId,
        },
      });
    } catch (err) {
      throw err;
    }
  };
}

export default SolutionService;
