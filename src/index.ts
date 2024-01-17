import sequelize from "./db/sequelize";
import express from "express";
import customerRouter from "./routes/customer-routes";
import companyRouter from "./routes/company-routes";
import companyAgentRouter from "./routes/company-agent-routes";
import subscriptionRouter from "./routes/subscription-routes";
import complaintRouter from "./routes/complaint-routes";
import solutionRouter from "./routes/solution-routes";
import commentRouter from "./routes/comment-routes";
import cors from "cors";
import Company from "./models/company";
import Complaint from "./models/complaint";
import Solution from "./models/solution";
import Comment from "./models/comment";
import CompanyAgent from "./models/company-agent";
import Customer from "./models/customer";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/customer", customerRouter);
app.use("/company", companyRouter);
app.use("/company-agent", companyAgentRouter);
app.use("/subscription", subscriptionRouter);
app.use("/complaint", complaintRouter);
app.use("/solution", solutionRouter);
app.use("/comment", commentRouter);

Complaint.hasMany(Solution, { foreignKey: "complaintId" });
Complaint.hasMany(Comment, { foreignKey: "complaintId" });
Customer.hasMany(Complaint, { foreignKey: "customerId" });
Complaint.belongsTo(Customer, { foreignKey: "customerId" });
Company.hasMany(CompanyAgent, { foreignKey: "companyId" });
CompanyAgent.belongsTo(Company, { foreignKey: "companyId" });
Complaint.belongsTo(Company, { foreignKey: "companyId" });
Customer.hasMany(Comment, { foreignKey: "customerId" });
Comment.belongsTo(Customer, { foreignKey: "customerId" });
CompanyAgent.hasMany(Solution, {
  foreignKey: "companyAgentId",
  as: "solutions",
});
Solution.belongsTo(CompanyAgent, {
  foreignKey: "companyAgentId",
  as: "companyAgent",
});

sequelize.sync().then(() => {
  console.info("Listening on port 3000...");
  app.listen(3000);
});
