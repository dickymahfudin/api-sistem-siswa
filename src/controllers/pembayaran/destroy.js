const { pembayaran } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;

  const destroyPembayaran = await pembayaran.destroy({ where: { id } });
  return res.status(200).json({
    status: "success",
    data: destroyPembayaran,
  });
};
