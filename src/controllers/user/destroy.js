const { user } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;

  const destroyUser = await user.destroy({ where: { id } });
  return res.status(200).json({
    status: "success",
    data: destroyUser,
  });
};
