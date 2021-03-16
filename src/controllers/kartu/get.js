const { kartu } = require("../../models");

module.exports = async (req, res) => {
  const findKartu = await kartu.findAll();

  return res.status(200).json({
    status: "success",
    data: findKartu,
  });
};
