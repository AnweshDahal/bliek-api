"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PropertyNeighborhood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PropertyNeighborhood.belongsTo(models.Property, {
        as: "Property",
        foreignKey: "propertyId",
      });
      PropertyNeighborhood.belongsTo(models.Neighborhood, {
        as: "Neighborhood",
        foreignKey: "neighborhoodId",
      });
    }
  }
  PropertyNeighborhood.init(
    {
      propertyId: { type: DataTypes.INTEGER, allowNull: false },
      neighborhoodId: { type: DataTypes.INTEGER, allowNull: false },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "PropertyNeighborhood",
    }
  );
  return PropertyNeighborhood;
};
