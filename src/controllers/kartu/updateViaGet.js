const { kartu } = require("../../models");

module.exports = async (req, res) => {
  const { uid } = req.query;

  const findKartu = await kartu.findByPk(1);

  await findKartu.update({ uid });

  return res.status(200).json({
    status: "success",
  });
};
