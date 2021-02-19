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
      absen2: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "absen",
    }
  );
  return absen;
};
