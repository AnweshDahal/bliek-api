"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Property.belongsTo(models.ListingType, {
        foreignKey: "listingTypeId",
        as: "ListingType",
      });

      Property.belongsTo(models.PropertyType, {
        foreignKey: "propertyTypeId",
        as: "PropertyType",
      });

      Property.belongsTo(models.Users, {
        foreignKey: "uploader",
        as: "Uploader",
      });
    }
  }
  Property.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      uploader: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      listingTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lng: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      propertyTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      yearBuilt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      garage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      agentFees: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "0.0",
      },
      beds: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      bathrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      area: {
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
      modelName: "Property",
    }
  );
  return Property;
};
