const { absen, user } = require("../../models");
const { compareDay } = require("../../helpers/datetime");

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
        data: { user_id: createdAbsen.user_id, absen1: createdAbsen.absen1 },
      });
    } else {
      const updateAbsen = await temp.update({ user_id, absen2: true });
      return res.status(201).json({
        status: "success",
        data: {
          user_id: updateAbsen.user_id,
          absen1: updateAbsen.absen1,
          absen2: updateAbsen.absen2,
        },
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
      const compare = compareDay(findAbsen.createdAt);
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
      if (findAbsen.absen2) {
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
