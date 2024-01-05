import sequelize from "../db/sequelize";
import { DataTypes } from "sequelize";
//sdgfs

const Customer = sequelize.define("customer", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  createdAt: {
    type: DataTypes.DATE,
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
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNum: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Customer;
