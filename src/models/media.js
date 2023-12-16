"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Media.belongsTo(models.Property, {
        as: "Property",
        foreignKey: "propertyId",
      });
    }
  }
  Media.init(
    {
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isThumbnail: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isVideo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      isPlan: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
      modelName: "Media",
    }
  );
  return Media;
};
