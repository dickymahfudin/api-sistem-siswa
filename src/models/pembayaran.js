"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pembayaran extends Model {
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
  pembayaran.init(
    {
      user_id: DataTypes.INTEGER,
      keterangan: DataTypes.STRING,
      nominal: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "pembayaran",
    }
  );
  return pembayaran;
};
