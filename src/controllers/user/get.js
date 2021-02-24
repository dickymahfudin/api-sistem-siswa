const { user } = require("../../models");

module.exports = async (req, res) => {
  const { id, name, role, kelas, status } = req.query;
  const tempid = !id ? {} : { id };
  const tempname = !name ? {} : { name };
  const temprole = !role ? {} : { role };
  const tempkelas = !kelas ? {} : { kelas };
  const tempstatus = !status ? {} : { status };
  const where = {
    ...tempid,
    ...tempname,
    ...temprole,
    ...tempkelas,
    ...tempstatus,
  };

  const findUser = await user.findAll({
    attributes: {
      exclude: ["password"],
    },
    where,
  });
  return res.status(200).json({
    status: "success",
    data: findUser,
  });
};
