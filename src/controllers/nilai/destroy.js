const { nilaiModel } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;

  const destroyNilai = await nilaiModel.destroy({ where: { id } });
  return res.status(200).json({
    status: "success",
    data: destroyNilai,
  });
};
