import { Sequelize } from "sequelize";
import express from "express";

const sequelize = new Sequelize("world", "root", "ourSQL1917", {
  dialect: "mysql",
  host: "localhost",
});

const app = express();

sequelize.sync().then(() => {
  app.listen(4001);
});
