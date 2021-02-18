const { absen } = require("../../models");

module.exports = async (req, res) => {
  const { user_id } = req.query;
  let where = !user_id ? {} : { user_id };
  console.log(where);
  const findAbsen = await absen.findAll({ where });
  return res.status(200).json({
    status: "success",
    data: findAbsen,
  });
};
