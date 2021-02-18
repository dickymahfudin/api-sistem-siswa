const { pembayaran } = require("../../models");

module.exports = async (req, res) => {
  const { user_id } = req.query;
  let where = !user_id ? {} : { user_id };
  console.log(where);
  const findPembayaran = await pembayaran.findAll({ where });
  return res.status(200).json({
    status: "success",
    data: findPembayaran,
  });
};
