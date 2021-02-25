const { pembayaran } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { user_id, keterangan, nominal, status } = req.body;

  const findPembayaran = await pembayaran.findByPk(id);

  if (!findPembayaran) {
    return res.status(404).json({
      status: "error",
      message: "Id tidak tersedia",
    });
  }

  const update = await findPembayaran.update({
    user_id,
    keterangan,
    nominal,
    status,
  });
  return res.status(200).json({
    status: "success",
    message: update,
  });
};
