const bcrypt = require("bcrypt");
const { user } = require("../../models");
const Validator = require("fastest-validator");
const jwt = require("jsonwebtoken");
const v = new Validator();
require("dotenv").config();

module.exports = async (req, res) => {
  const { nis, password } = req.body;
  const { TOKEN_SECRET } = process.env;

  const schema = {
    nis: "number|empty:false",
    password: "string|min:2",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  //   const findUser = await user.findUser(name);
  const findUser = await user.findOne({
    where: { nis },
  });
  if (!findUser) {
    return res.status(404).json({
      status: "error",
      message: "nis and Password",
    });
  }

  const isValidPassword = await bcrypt.compare(password, findUser.password);
  if (!isValidPassword) {
    return res.status(404).json({
      status: "error",
      message: "nis and Password",
    });
  }
  const token = jwt.sign({ id: findUser.id }, TOKEN_SECRET);
  res.header("auth-token", token);
  return res.status(200).json({
    status: "success",
    data: {
      id: findUser.id,
      name: findUser.name,
      nis: findUser.nis,
      role: findUser.role,
      token,
    },
  });
};
