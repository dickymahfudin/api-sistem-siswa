const { pembayaran } = require("../../models");

module.exports = async (req, res) => {
  const { user_id, keterangan, nominal } = req.query;
  const tempid = !user_id ? {} : { user_id };
  const tempketerangan = !keterangan ? {} : { keterangan };
  const tempnominal = !nominal ? {} : { nominal };
  let where = { ...tempid, ...tempketerangan, ...tempnominal };

  const findPembayaran = await pembayaran.findAll({ where });
  return res.status(200).json({
    status: "success",
    data: findPembayaran,
  });
};
