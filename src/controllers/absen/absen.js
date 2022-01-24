const { absen, user } = require("../../models");
const { compareDay } = require("../../helpers/datetime");
const moment = require("moment");

module.exports = async (req, res) => {
  const paramAbsen = req.params.absen;
  const { user_id } = req.query;
  const findUser = await user.findByPk(user_id);

  if (!findUser) {
    return res.status(409).json({
      status: "error",
      message: "User Tidak Tersedia",
    });
  }

  const createAbsen = async (temp) => {
    if (!temp) {
      const createdAbsen = await absen.create({ user_id, absen1: true });
      return res.status(201).json({
        status: "success",
        data: createdAbsen,
      });
    } else {
      let updateAbsen;
      console.log(temp);
      if (!temp.bahasa_indonesia) {
        updateAbsen = await temp.update({ user_id, bahasa_indonesia: true });
      } else if (!temp.pkn) {
        updateAbsen = await temp.update({ user_id, pkn: true });
      } else if (!temp.bahasa_inggris) {
        updateAbsen = await temp.update({ user_id, bahasa_inggris: true });
      } else if (!temp.matematika) {
        updateAbsen = await temp.update({ user_id, matematika: true });
      } else if (!temp.ipa) {
        updateAbsen = await temp.update({ user_id, ipa: true });
      } else if (!temp.ips) {
        updateAbsen = await temp.update({ user_id, ips: true });
      } else {
        return res.status(409).json({
          status: "error",
          message: "User Sudah Absen",
        });
      }
      return res.status(201).json({
        status: "success",
        data: updateAbsen,
      });
    }
  };

  const findAbsen = await absen.findOne({
    where: { user_id },
    order: [["createdAt", "DESC"]],
  });

  if (paramAbsen == "absen1") {
    if (!findAbsen) {
      return createAbsen();
    } else {
      const compare = moment().isSame(moment(findAbsen.createdAt), "d");
      if (compare) {
        return res.status(409).json({
          status: "error",
          message: "User Sudah Absen",
        });
      } else {
        return createAbsen();
      }
    }
  } else if (paramAbsen == "absen2") {
    if (!findAbsen) {
      return res.status(404).json({
        status: "error",
        message: "User Belum Absen Sebelumnya",
      });
    } else {
      if (
        findAbsen.bahasa_indonesia &&
        findAbsen.pkn &&
        findAbsen.bahasa_inggris &&
        findAbsen.matematika &&
        findAbsen.ipa &&
        findAbsen.ips
      ) {
        const compare = compareDay(findAbsen.createdAt);
        if (!compare) {
          return res.status(409).json({
            status: "error",
            message: "User Belum Absen Sebelumnya",
          });
        }
        return res.status(409).json({
          status: "error",
          message: "User Sudah Absen",
        });
      }
      return createAbsen(findAbsen);
    }
  }
  return res.status(409).json({
    status: "error",
    message: "Masukkan Parameter Dengan Benar (absen1 / absen2)",
  });
};
