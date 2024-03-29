"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("absens", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      absen1: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      bahasa_indonesia: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      pkn: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      bahasa_inggris: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      matematika: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      ipa: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      ips: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("absens");
  },
};
