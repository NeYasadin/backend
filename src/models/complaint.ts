import sequelize from "../db/sequelize";
import { DataTypes } from "sequelize";
import Company from "./company";
import Customer from "./customer";

const Complaint = sequelize.define("complaint", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  solutionRating: {
    type: DataTypes.INTEGER,
    defaultValue: null,
  },
  complaintRating: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
    allowNull: false,
  },
  misleading: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
    allowNull: false,
  },
  solutionIds: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
});

export default Complaint;
