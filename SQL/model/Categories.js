const sequelize = require("sequelize");
let SequelizeInstance = require("./../connection");
let Categories = SequelizeInstance.define(
  'categories',
  {
    id: {
      type: sequelize.DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    description: sequelize.DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);
module.exports = Categories;
