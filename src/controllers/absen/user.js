const { user, kartu } = require("../../models");

module.exports = async (req, res) => {
  const { uid } = req.query;
  if (!uid) {
    return res.status(200).json({
      status: "error",
      message: "Parameter Uid",
    });
  }

  const findUser = await user.findOne({
    attributes: {
      exclude: ["password"],
    },
    where: { uid },
  });

  if (!findUser) {
    const findKartu = await kartu.findByPk(1);
    await findKartu.update({ uid, status: false });
    return res.status(200).json({
      status: "success",
      data: { message: "Kartu Berhasil DI Update" },
    });
  }

  return res.status(200).json({
    status: "success",
    data: findUser,
  });
};
