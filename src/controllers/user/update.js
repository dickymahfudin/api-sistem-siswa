const bcrypt = require("bcrypt");
const { user } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { name, nis } = req.body;
  const role = req.body.role || 3;

  const findUser = await user.findByPk(id);
  if (!findUser) {
    return res.status(201).json({
      status: "error",
      message: "User Tidak Terdia",
    });
  }
  const password =
    req.body.password && (await bcrypt.hash(req.body.password, 10));
  const data = {
    password,
    name,
    nis,
    role,
  };
  await findUser.update(data);
  return res.status(201).json({
    status: "success",
    data: { id, name, nis, role },
  });
};
