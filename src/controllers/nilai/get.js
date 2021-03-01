const { nilai, user, pelajaran } = require("../../models");

module.exports = async (req, res) => {
  const { user_id, pelajaran_id, value } = req.query;
  const tempUser_id = !user_id ? {} : { user_id };
  const tempPelajaran_id = !pelajaran_id ? {} : { pelajaran_id };
  const tempNilai = !value ? {} : { value };
  const where = { ...tempUser_id, ...tempPelajaran_id, ...tempNilai };

  const findNilai = await nilai.findAll({
    where,
    include: [
      { model: pelajaran, as: "pelajaran" },
      {
        model: user,
        as: "user",
        attributes: {
          exclude: ["password"],
        },
      },
    ],
  });
  return res.status(200).json({
    status: "success",
    data: findNilai,
  });
};
