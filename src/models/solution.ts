import sequelize from "../db/sequelize";
import CompanyAgent from "./company-agent";
import Complaint from "./complaint";
import { Sequelize, DataTypes } from "sequelize";

const Solution = sequelize.define("solution", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  guaranteeLevel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sourceOfComplaint: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  companyAgentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CompanyAgent,
      key: "id",
    },
  },
  complaintId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Complaint,
      key: "id",
    },
  },
});

export default Solution;
