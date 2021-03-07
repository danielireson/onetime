const express = require("express");
const createError = require("http-errors");
const router = express.Router();

// data store
const timers = {};

const getTimer = (shortcode) => timers[shortcode];
const setTimer = (shortcode, timer) => (timers[shortcode] = timer);

// endpoints
router.get("/timers/:timerId", function (req, res, next) {
  if (req.params.timerId == undefined) {
    return next(createError(404, "Expected path parameter"));
  }

  const timer = getTimer(req.params.timerId);

  if (timer == undefined) {
    return next(createError(404, "Timer not found"));
  }

  res.send(timer);
});

router.post("/timers", function (req, res, next) {
  if (req.body.shortcode == undefined) {
    return next(createError(404, "Expected 'shortcode' body parameter"));
  }

  if (getTimer(req.body.shortcode) != undefined) {
    return next(createError(422, "Timer shortcode is not unique"));
  }

  const timer = {
    shortcode: req.body.shortcode,
  };

  setTimer(req.body.shortcode, timer);

  res.status(201).send(timer);
});

// catch 404 and forward to error handler
router.use(function (req, res, next) {
  next(createError(404, "Route not found"));
});

// error handler
router.use(function (err, req, res, next) {
  const message =
    req.app.get("env") === "development" ? err.message : "Unexpected error";

  res.status(err.status || 500).send({
    error: message,
  });
});

module.exports = router;
