"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.Province, {
        as: "Province",
        foreignKey: "provinceId",
      });

      Address.belongsTo(models.City, {
        foreignKey: "City",
        foreignKey: "cityId",
      });

      Address.belongsTo(models.Country, {
        foreignKey: "countryId",
        as: "Country",
      });

      Address.hasOne(models.Property, {
        as: "Property",
        foreignKey: "addressId",
        sourceKey: "id",
      });
    }
  }
  Address.init(
    {
      longAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shortAddress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      provinceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cityId: {
        type: DataTypes.INTEGER,
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
      modelName: "Address",
    }
  );
  return Address;
};
