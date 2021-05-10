const { kartu } = require("../../models");

module.exports = async (req, res) => {
  const { status } = req.body;

  const findKartu = await kartu.findByPk(1);

  await findKartu.update({ status });

  return res.status(200).json({
    status: "success",
  });
};
