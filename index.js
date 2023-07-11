const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const indexRouter = require("./routes");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use("/", indexRouter);

app.get("/broken", (req, res, next) => {
  throw new Error("Broken");
});

app.listen(8081, () => {
  console.log("App running on port 8081");
});
