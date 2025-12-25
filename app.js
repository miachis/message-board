const express = require("express");
const indexRouter = require("./routes/indexRouter");
const msgRouter = require("./routes/messageRouter");
const app = express();
require("dotenv").config();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", msgRouter);

app.listen(process.env.PORT, () => {
  console.log(`localhost:${process.env.PORT}`);
});
