import sequelize from "./db/sequelize";
import express from "express";

const app = express();

sequelize.sync().then(() => {
  app.listen();
});
