const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/:timer", function (req, res) {
  res.render("timer", { minutes: 0 });
});

module.exports = router;
