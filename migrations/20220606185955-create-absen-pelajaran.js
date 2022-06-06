"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("absenPelajaran", {
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
      pelajaran_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "pelajarans",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      absen: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      waktu_absen: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("absenPelajaran");
  },
};
