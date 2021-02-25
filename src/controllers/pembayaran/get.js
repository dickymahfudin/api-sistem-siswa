const { pembayaran } = require("../../models");

module.exports = async (req, res) => {
  const { user_id, keterangan, nominal } = req.query;
  const tempid = !user_id ? {} : { user_id };
  const tempketerangan = !keterangan ? {} : { keterangan };
  const tempnominal = !nominal ? {} : { nominal };
  let where = { ...tempid, ...tempketerangan, ...tempnominal };

  const findPembayaran = await pembayaran.findAll({ where });
  const pad = (temp) => (temp < 10 ? `0${temp}` : temp);
  let data = [];
  findPembayaran.forEach((el) => {
    const value = el.dataValues;
    const date = new Date(value.createdAt);
    date.setDate(date.getDate() + 7);

    const tanggal = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDay()
    )}`;
    data.push({ ...value, masaTenggang: tanggal });
  });

  return res.status(200).json({
    status: "success",
    data: data,
  });
};
