const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false })); //req.bodyの中身を使えるようにするおまじない
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function (req, res) {});

app.post("/api/v1/quiz", function (req, res) {
  const answer = req.body.answer;
  if (answer === "2") {
    // HTMLで返すパターン1（res.sendでテキストを返す）
    // res.send("<h1>正解</h1>");
    // HTMLで返すパターン1（res.sendでリダイレクト）
    res.redirect("/correct.html");
  } else {
    // HTMLで返すパターン1（res.sendで返す）
    // res.send("<h1>不正解</h1>");
    // HTMLで返すパターン1（res.sendでリダイレクト）
    res.redirect("/wrong.html");
  }
});

app.get("/api/v1/user", function (req, res) {
  res.send("About");
});

const PORT = process.env.PORT || 3000;
app.listen(3000, function () {
  console.log("running!");
});
