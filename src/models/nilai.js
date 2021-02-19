"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class nilai extends Model {
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
  nilai.init(
    {
      user_id: DataTypes.INTEGER,
      pelajaran_id: DataTypes.INTEGER,
      nilai: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "nilaiModel",
      tableName: "nilais",
    }
  );
  return nilai;
};
