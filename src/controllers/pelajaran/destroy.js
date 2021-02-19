const { pelajaran } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(409).json({
      status: "error",
      data: "masukkan Parameter",
    });
  }

  const destroyPelajaran = await pelajaran.destroy({ where: { id } });
  return res.status(200).json({
    status: "success",
    data: destroyPelajaran,
  });
};
