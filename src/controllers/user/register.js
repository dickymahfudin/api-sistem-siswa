const bcrypt = require("bcrypt");
const { user } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const { nama, nis, ttl, kelas, uid } = req.body;
  const role = req.body.role || 3;
  const status = req.body.status || true;

  const schema = {
    nama: "string|empty:false",
    nis: "number|empty:false",
    password: "string|min:2",
    role: "number|optional",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const findUser = await user.findOne({
    where: { nis },
  });

  if (findUser) {
    return res.status(409).json({
      status: "error",
      message: "nis Sudah Ada",
    });
  }

  const password = await bcrypt.hash(req.body.password, 10);
  const data = { password, nama, nis, ttl, kelas, status, role, uid };

  const createdUser = await user.create(data);

  return res.status(201).json({
    status: "success",
    data: { id: createdUser.id, nama, nis, ttl, kelas, status, role, uid },
  });
};
