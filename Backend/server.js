const express = require("express");
// const path = require("path");
require("express-async-errors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const HttpError = require("./src/models/http-error");

const userRouter = require("./src/routes/userRouter");

const cors = require("cors");

const app = express();
// app.use(cors());
app.use(
  express.json(),
  cors({ origin: "http://localhost:3000", credentials: true })
);
app.use(cookieParser());

app.use("/", userRouter);

//what is the difference bettwen this two
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  res.status(error.code).send(error.message);
});

mongoose
  .connect(
    `mongodb+srv://ship-me-db:Sotl2HlGeFKjKbbw@ship-me.nptiuis.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(8000);
    console.log("active");
  })
  .catch((err) => {
    console.log(err);
  });

// const port = process.env.PORT || "8080";
// app.listen(port, () => {
//   console.log("Running on " + port);
// });
