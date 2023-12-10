const cors = require("cors");

const express = require("express");

const logger = require("morgan");

const errorHandler = require("errorhandler");

require("dotenv").config({ path: `${__dirname}/.env` });

const app = express();

app.use(cors());

app.use(logger("tiny"));

app.set("port", process.env.SERVER_PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1/public", require("./src/routes/v1/public"));

if (process.env.NODE_ENV !== "production") {
  app.use(errorHandler());
}

app.use((err, _req, res, next) => {
  if (!err) {
    next();
    return;
  }

  err.statusCode &&
    res
      .status(err.statusCode || 500)
      .json({ message: err.message || "Something Went Wrong" });
});

app.listen(app.get("port"), () => {
  console.log(
    `[Server]: ${process.env.APP_NAME} ${process.env.SERVER_VERSION} listening @ http://localhost:${process.env.SERVER_PORT}`
  );
});
