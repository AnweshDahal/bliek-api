"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Properties", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uploader: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          as: "Uploader",
        },
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      listingTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "ListingTypes",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      lng: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      propertyTypeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "PropertyTypes",
          key: "id",
        },
      },
      yearBuilt: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      garage: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      agentFees: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "0.0",
      },
      beds: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      bathrooms: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      area: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Properties");
  },
};
