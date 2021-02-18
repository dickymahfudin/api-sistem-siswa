const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Access Denied",
    });
  }
  try {
    jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (err) {
    return res.status(400).json({
      status: "error",
      message: "Invalid Token",
    });
  }
};
