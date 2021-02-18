const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./src/routes/user");
const absenRouter = require("./src/routes/absen");
const middleware = require("./src/helpers/middlewareToken");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/absen", absenRouter);

app.get("/", middleware, (req, res) => {
  res.send("OK");
});

app.listen(PORT, () =>
  console.log(`Server Running on : http://localhost:${PORT}`)
);