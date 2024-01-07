import sequelize from "./db/sequelize";
import express from "express";
import customerRouter from "./routes/customer-routes";
import companyRouter from "./routes/company-routes";
import companyAgentRouter from "./routes/company-agent-routes";
import subscriptionRouter from "./routes/subscription-routes";
import complaintRouter from "./routes/complaint-routes";
import solutionRouter from "./routes/solution-routes";

const app = express();
app.use(express.json());
app.use("/customer", customerRouter);
app.use("/company", companyRouter);
app.use("/company-agent", companyAgentRouter);
app.use("/subscription", subscriptionRouter);
app.use("/complaint", complaintRouter);
app.use("/solution", solutionRouter);

sequelize.sync().then(() => {
  app.listen(3000);
});
