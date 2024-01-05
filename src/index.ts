import sequelize from "./db/sequelize";
import express from "express";
import customerRouter from "./routes/customer-routes";

const app = express();
app.use(express.json());
app.use("/customer", customerRouter);

sequelize.sync().then(() => {
  app.listen(3000);
});
