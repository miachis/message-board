const { Router } = require("express");
const msgRouter = Router();

msgRouter.get("/", (req, res) => {
  res.render("form");
});

module.exports = msgRouter;
