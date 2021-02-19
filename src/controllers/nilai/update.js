const { nilaiModel, user, pelajaran } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const { id } = req.params;
  const { user_id, pelajaran_id, nilai } = req.body;

  const schema = {
    user_id: "number|empty:false",
    pelajaran_id: "number|empty:false",
    nilai: "number|empty:false",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }
  const findUser = await user.findByPk(user_id);
  const findPelajaran = await pelajaran.findByPk(pelajaran_id);
  const findNilai = await nilaiModel.findByPk(id);
  if (!findNilai) {
    return res.status(404).json({
      status: "error",
      message: "Id tidak tersedia",
    });
  }
  if (!findUser || !findPelajaran) {
    return res.status(404).json({
      status: "error",
      message: "User atau Pelajaran Tidak Terdaftar",
    });
  }
  const update = await findNilai.update({ user_id, pelajaran_id, nilai });
  return res.status(200).json({
    status: "success",
    message: update,
  });
};
