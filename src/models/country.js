"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Country.hasMany(models.Province, {
        as: "Provinces",
        foreignKey: "countryId",
        sourceKey: "id",
      });
      Country.hasMany(models.City, {
        as: "Cities",
        foreignKey: "countryId",
        sourceKey: "id",
      });
    }
  }
  Country.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "Country",
    }
  );
  return Country;
};
