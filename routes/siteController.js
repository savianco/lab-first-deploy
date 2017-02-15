const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyAq5Lf43W1-tsNgFUmWG2WFi8zcGqlxZrI" });
});

module.exports = siteController;
