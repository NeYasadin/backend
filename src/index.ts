import sequelize from "./db/sequelize";
import express from "express";
import customerRouter from "./routes/customer-routes";
import companyRouter from "./routes/company-routes";

const app = express();
app.use(express.json());
app.use("/customer", customerRouter);
app.use("/company", companyRouter);

sequelize.sync().then(() => {
  app.listen(3000);
});
