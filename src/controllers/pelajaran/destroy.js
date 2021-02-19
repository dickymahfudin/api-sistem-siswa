const { pelajaran } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;

  const destroyPelajaran = await pelajaran.destroy({ where: { id } });
  return res.status(200).json({
    status: "success",
    data: destroyPelajaran,
  });
};
