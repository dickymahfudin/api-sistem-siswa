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
      bahasa_indonesia: DataTypes.BOOLEAN,
      pkn: DataTypes.BOOLEAN,
      bahasa_inggris: DataTypes.BOOLEAN,
      matematika: DataTypes.BOOLEAN,
      ipa: DataTypes.BOOLEAN,
      ips: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "absen",
    }
  );
  return absen;
};
