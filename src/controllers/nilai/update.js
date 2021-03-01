const { nilai, user, pelajaran } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const { id } = req.params;
  const { user_id, pelajaran_id, value, nama } = req.body;

  const findNilai = await nilai.findByPk(id);
  if (!findNilai) {
    return res.status(404).json({
      status: "error",
      message: "Id tidak tersedia",
    });
  }

  const update = await findNilai.update({ user_id, pelajaran_id, value, nama });
  return res.status(200).json({
    status: "success",
    message: update,
  });
};
