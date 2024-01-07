import Solution from "../models/solution";

class SolutionService {
  createSolution = async (req: any, res: any, next: any) => {
    try {
      await Solution.create(req.body);
    } catch (err) {
      return console.error(err);
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
      return console.error(err);
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
      return console.error(err);
    }
  };
  getSolution = async (req: any, res: any, next: any) => {
    try {
      return Solution.findAll({
        where: {
            companyAgentId: req.body.companyAgentId,
        },
      });
    } catch (err) {
      return console.error(err);
    }
  };
}

export default SolutionService;
