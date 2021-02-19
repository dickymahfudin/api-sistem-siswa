const { pelajaran } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const { id } = req.params;
  const { nama } = req.body;

  const findPelajaran = await pelajaran.findByPk(id);

  if (!findPelajaran) {
    return res.status(404).json({
      status: "error",
      message: "Id tidak tersedia",
    });
  }

  const update = await findPelajaran.update({ nama });
  return res.status(200).json({
    status: "success",
    message: update,
  });
};
