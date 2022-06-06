const { absen, user, absenPelajaran } = require("../../models");
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
      const createdAbsen = await absen.create({ user_id, absen1: true, waktu_absen1: Date.now() });
      return res.status(201).json({
        status: "success",
        data: createdAbsen,
      });
    } else {
      let updateAbsen;
      console.log(temp);
      if (!temp.bahasa_indonesia) {
        updateAbsen = await temp.update({ user_id, bahasa_indonesia: true, waktu_b_indo: Date.now() });
        await absenPelajaran.create({ user_id, pelajaran_id: 1, absen: true, waktu_absen: Date.now() });
      } else if (!temp.pkn) {
        updateAbsen = await temp.update({ user_id, pkn: true, waktu_pkn: Date.now() });
        await absenPelajaran.create({ user_id, pelajaran_id: 2, absen: true, waktu_absen: Date.now() });
      } else if (!temp.bahasa_inggris) {
        updateAbsen = await temp.update({ user_id, bahasa_inggris: true, waktu_b_inggris: Date.now() });
        await absenPelajaran.create({ user_id, pelajaran_id: 3, absen: true, waktu_absen: Date.now() });
      } else if (!temp.matematika) {
        updateAbsen = await temp.update({ user_id, matematika: true, waktu_matematika: Date.now() });
        await absenPelajaran.create({ user_id, pelajaran_id: 4, absen: true, waktu_absen: Date.now() });
      } else if (!temp.ipa) {
        updateAbsen = await temp.update({ user_id, ipa: true, waktu_ipa: Date.now() });
        await absenPelajaran.create({ user_id, pelajaran_id: 5, absen: true, waktu_absen: Date.now() });
      } else if (!temp.ips) {
        updateAbsen = await temp.update({ user_id, ips: true, waktu_ips: Date.now() });
        await absenPelajaran.create({ user_id, pelajaran_id: 6, absen: true, waktu_absen: Date.now() });
      } else if (!temp.absen2) {
        updateAbsen = await temp.update({ user_id, absen2: true, waktu_absen2: Date.now() });
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
