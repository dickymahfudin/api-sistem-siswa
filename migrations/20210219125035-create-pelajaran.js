"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pelajarans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        type: Sequelize.STRING,
        unique: true,
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

    await queryInterface.bulkInsert("pelajarans", [
      {
        nama: "Bahasa Indonesia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "PKN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Bahasa Inggris",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "Matematika",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "IPA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "IPS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("pelajarans");
  },
};
