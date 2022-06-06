const { absenPelajaran } = require("../../models");

module.exports = async (req, res) => {
  const { user_id, pelajaran_id } = req.query;
  let where = !user_id ? {} : { user_id };
  if (pelajaran_id){
      where = {...where, pelajaran_id: pelajaran_id}
  }
  console.log(where);
  const findAbsenPelajaran = await absenPelajaran.findAll({ where });
  return res.status(200).json({
    status: "success",
    data: findAbsenPelajaran,
  });
};
