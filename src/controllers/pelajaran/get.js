const { pelajaran } = require("../../models");

module.exports = async (req, res) => {
  const { nama } = req.query;
  let where = !nama ? {} : { nama };
  console.log(where);
  const findPelajaran = await pelajaran.findAll({ where });
  return res.status(200).json({
    status: "success",
    data: findPelajaran,
  });
};
