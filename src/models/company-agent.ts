import sequelize from "../db/sequelize";
import { DataTypes } from "sequelize";
import Company from "./company";

const CompanyAgent = sequelize.define("company_agent", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Company,
      key: "id",
    },
  },
});

export default CompanyAgent;
