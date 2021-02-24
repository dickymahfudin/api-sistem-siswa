"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      nama: DataTypes.STRING,
      nis: DataTypes.INTEGER,
      password: DataTypes.STRING,
      ttl: DataTypes.STRING,
      kelas: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      uid: DataTypes.BOOLEAN,
      role: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
