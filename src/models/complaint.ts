import sequelize from "../db/sequelize";
import { DataTypes } from "sequelize";
import Company from "./company";
import Customer from "./customer";

const Complaint = sequelize.define("complaint", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  solutionRating: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  companyId: {
    type: DataTypes.INTEGER,
    references: {
      model: Company,
      key: "id",
    },
  },
  meToo: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  misleading: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  customerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: "id",
    },
  },
  priorityLevel: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isFinished: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Complaint;
