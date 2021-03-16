const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./src/routes/user");
const absenRouter = require("./src/routes/absen");
const pembayaranRouter = require("./src/routes/pembayaran");
const pelajaranRouter = require("./src/routes/pelajaran");
const nilaiRouter = require("./src/routes/nilai");
const kartuRouter = require("./src/routes/kartu");
const middleware = require("./src/helpers/middlewareToken");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  return res.status(200).json({
    status: "success",
    data: [],
  });
});

app.use("/api/user", userRouter);
app.use("/api/absen", absenRouter);
app.use("/api/pembayaran", middleware, pembayaranRouter);
app.use("/api/pelajaran", middleware, pelajaranRouter);
app.use("/api/nilai", middleware, nilaiRouter);
app.use("/api/kartu", kartuRouter);

app.get("*", middleware, (req, res) =>
  res.status(200).json({ status: "error", message: "Page Not Found" })
);
app.post("*", middleware, (req, res) =>
  res.status(200).json({ status: "error", message: "Page Not Found" })
);
app.delete("*", middleware, (req, res) =>
  res.status(200).json({ status: "error", message: "Page Not Found" })
);

app.listen(PORT, () =>
  console.log(`Server Running on : http://localhost:${PORT}`)
);
