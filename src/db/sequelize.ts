import { Sequelize } from "sequelize";

const sequelize = new Sequelize("neyasadin", "root", "ourSQL1917", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize;
