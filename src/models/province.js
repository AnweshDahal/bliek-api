"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Province extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Province.belongsTo(models.Country, {
        foreignKey: "countryId",
        as: "Countries",
      });
      // Has Many Cities
    }
  }
  Province.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      provinceCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      countryId: {
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
      modelName: "Province",
    }
  );
  return Province;
};
