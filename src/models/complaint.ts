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
  solutionRating: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  complaintRating: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
    allowNull: true,
  },
  misleading: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
