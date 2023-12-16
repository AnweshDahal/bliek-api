"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Price.belongsTo(models.Property, {
        as: "Property",
        foreignKey: "propertyId",
      });
    }
  }
  Price.init(
    {
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      propertyId: {
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
      modelName: "Price",
    }
  );
  return Price;
};
