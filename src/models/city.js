"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      City.belongsTo(models.Province, {
        as: "Province",
        foreignKey: "provinceId",
      });
      City.belongsTo(models.Country, {
        foreignKey: "countryId",
        as: "Country",
      });
    }
  }
  City.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cityCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      provinceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "City",
    }
  );
  return City;
};
