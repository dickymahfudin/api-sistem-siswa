"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        type: Sequelize.STRING,
      },
      nis: {
        type: Sequelize.INTEGER,
      },
      password: {
        type: Sequelize.STRING,
      },
      ttl: {
        type: Sequelize.STRING,
      },
      kelas: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      uid: {
        type: Sequelize.STRING,
      },
      role: {
        type: Sequelize.INTEGER,
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

    await queryInterface.bulkInsert("users", [
      {
        nama: "Admin",
        nis: 100,
        password: "admin1234",
        role: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "guru",
        nis: 200,
        password: "guru1234",
        role: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "siswa1",
        nis: 1,
        password: "siswa1234",
        role: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "siswa2",
        nis: 2,
        password: "siswa1234",
        role: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "siswa3",
        nis: 3,
        password: "siswa1234",
        role: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
