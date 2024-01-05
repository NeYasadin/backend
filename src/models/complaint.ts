import sequelize from "../db/sequelize";
import { DataTypes } from "sequelize";

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
  },
  priorityLevel: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isFinished: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Complaint;
