const { user } = require("../../models");

module.exports = async (req, res) => {
  const { id, name, role } = req.query;
  const tempid = !id ? {} : { id };
  const tempname = !name ? {} : { name };
  const temprole = !role ? {} : { role };
  const where = { ...tempid, ...tempname, ...temprole };

  const findUser = await user.findAll({ where });
  return res.status(200).json({
    status: "success",
    data: findUser,
  });
};
