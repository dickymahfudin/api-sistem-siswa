const { pelajaran } = require("../../models");

module.exports = async (req, res) => {
  const { nama } = req.body;
  console.log(nama);

  try {
    const create = await pelajaran.create({ nama });
    return res.status(201).json({
      status: "success",
      message: create,
    });
  } catch (err) {
    return res.status(409).json({
      status: "error",
      message: "nama harus berbeda",
    });
  }
};
