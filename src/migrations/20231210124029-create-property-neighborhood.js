"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PropertyNeighborhoods", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      propertyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Properties",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      neighborhoodId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Neighborhoods",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
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
    await queryInterface.dropTable("PropertyNeighborhoods");
  },
};
