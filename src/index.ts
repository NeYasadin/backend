import sequelize from "./db/sequelize";
import express from "express";
import customerRouter from "./routes/customer-routes";
import companyRouter from "./routes/company-routes";
import companyAgentRouter from "./routes/company-agent-routes";
import subscriptionRouter from "./routes/subscription-routes";
import complaintRouter from "./routes/complaint-routes";
import solutionRouter from "./routes/solution-routes";
import commentRouter from "./routes/comment-routes";
import Company from "./models/company";
import Complaint from "./models/complaint";

const app = express();
app.use(express.json());
app.use("/customer", customerRouter);
app.use("/company", companyRouter);
app.use("/company-agent", companyAgentRouter);
app.use("/subscription", subscriptionRouter);
app.use("/complaint", complaintRouter);
app.use("/solution", solutionRouter);
app.use("/comment", commentRouter);

Complaint.belongsTo(Company, {foreignKey: 'companyId'});

sequelize.sync().then(() => {
  app.listen(3000);
});
