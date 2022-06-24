const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function (req, res) {});

app.get("/api/v1/user", function (req, res) {
  res.send("About");
});

app.listen(3000, function () {
  console.log("running!");
});
