const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();

// middleware
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "client/build")));

// serve client
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404, "Page not found"));
});

// error handler
app.use(function (err, req, res, next) {
  const message =
    req.app.get("env") === "development" ? err.message : "Unexpected error";

  res
    .status(err.status || 500)
    .set("Content-Type", "text/plain")
    .send(message);
});

module.exports = app;
