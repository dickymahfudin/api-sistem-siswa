const { nilai, user, pelajaran } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const { user_id, pelajaran_id, value, nama } = req.body;

  const schema = {
    user_id: "number|empty:false",
    pelajaran_id: "number|empty:false",
    value: "number|empty:false",
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
  const findNilai = await nilai.findOne({
    where: { user_id, pelajaran_id, nama },
  });

  if (findNilai) {
    return res.status(404).json({
      status: "error",
      message: "User Sudah Input Nilai",
    });
  }

  if (!findUser || !findPelajaran) {
    return res.status(404).json({
      status: "error",
      message: "User atau Pelajaran Tidak Terdaftar",
    });
  }
  const create = await nilai.create({ user_id, pelajaran_id, value, nama });
  return res.status(201).json({
    status: "success",
    message: create,
  });
};
