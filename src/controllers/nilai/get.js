const { nilaiModel, user, pelajaran } = require("../../models");

module.exports = async (req, res) => {
  const { user_id, pelajaran_id, nilai } = req.query;
  const tempUser_id = !user_id ? {} : { user_id };
  const tempPelajaran_id = !pelajaran_id ? {} : { pelajaran_id };
  const tempNilai = !nilai ? {} : { nilai };
  const where = { ...tempUser_id, ...tempPelajaran_id, ...tempNilai };

  const findNilai = await nilaiModel.findAll({
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
