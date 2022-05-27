"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class absen extends Model {
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
    }
  }
  absen.init(
    {
      user_id: DataTypes.INTEGER,
      absen1: DataTypes.BOOLEAN,
      waktu_absen1: DataTypes.DATE,
      absen2: DataTypes.BOOLEAN,
      waktu_absen2: DataTypes.DATE,
      bahasa_indonesia: DataTypes.BOOLEAN,
      waktu_b_indo: DataTypes.DATE,
      pkn: DataTypes.BOOLEAN,
      waktu_pkn: DataTypes.DATE,
      bahasa_inggris: DataTypes.BOOLEAN,
      waktu_b_inggris: DataTypes.DATE,
      matematika: DataTypes.BOOLEAN,
      waktu_matematika: DataTypes.DATE,
      ipa: DataTypes.BOOLEAN,
      waktu_ipa: DataTypes.DATE,
      ips: DataTypes.BOOLEAN,
      waktu_ipa: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "absen",
    }
  );
  return absen;
};
