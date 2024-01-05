import sequelize from "../db/sequelize";
import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const Company = sequelize.define("company", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  phoneNum: Sequelize.STRING,
  mail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  country: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  employeeNum: {
    type: Sequelize.INTEGER,
  },
  sector: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Company;
