import sequelize from "../db/sequelize";
import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const Company = sequelize.define("company", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  phoneNum: { type: DataTypes.STRING, allowNull: true },
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  employeeNum: {
    type: DataTypes.INTEGER,
  },
  sector: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Company;
