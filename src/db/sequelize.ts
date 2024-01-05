import { Sequelize } from "sequelize";

const sequelize = new Sequelize("neyasadin", "root", "gvaris20", {
  dialect: "mysql",
  host: "localhost",
});

export default sequelize; //dosyadan sequelize import edildiğinde sequelize objesi döndürür.
