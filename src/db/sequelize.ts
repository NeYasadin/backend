import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const sequelize = new Sequelize("neyasadin", "root", process.env.password, {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

export default sequelize; //dosyadan sequelize import edildiğinde sequelize objesi döndürür.
