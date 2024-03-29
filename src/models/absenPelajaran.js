"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class absenPelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {
        foreignKey: "user_id",
        as: "user",
      });
      this.belongsTo(models.pelajaran, {
        foreignKey: "pelajaran_id",
        as: "pelajaran",
      });
    }
  }
  absenPelajaran.init(
    {
      user_id: DataTypes.INTEGER,
      pelajaran_id: DataTypes.INTEGER,
      absen: DataTypes.BOOLEAN,
      waktu_absen: DataTypes.DATE
    },
    {
      sequelize,
      modelName: "absenPelajaran",
    }
  );
  return absenPelajaran;
};
