const { pembayaran, user } = require("../../models");
const { compareMonth } = require("../../helpers/datetime");

module.exports = async (req, res) => {
  const { user_id } = req.body;
  const findUser = await user.findByPk(user_id);

  if (!findUser) {
    return res.status(201).json({
      status: "error",
      message: "User Tidak Tersedia",
    });
  }

  const createPembayaran = async () => {
    const create = await pembayaran.create({ user_id, status: true });
    return res.status(201).json({
      status: "success",
      message: create,
    });
  };

  const findPembayaran = await pembayaran.findOne({
    where: { user_id },
    order: [["createdAt", "DESC"]],
  });
  if (findPembayaran) {
    const compare = compareMonth(findPembayaran.createdAt);
    if (compare) {
      return res.status(409).json({
        status: "error",
        message: "User Sudah Bayar Bulan Ini",
      });
    } else {
      return createPembayaran();
    }
  }
  return createPembayaran();
};
