const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/marvels", function (req, res) {
  var marvels = [
    "omi diferro",
    "omiranha",
    "gavinhao",
    "capetao",
    "viu uva preta",
    "bulk",
  ];
  return res.json({ data: marvels });
});

app.get("/cnh", function (req, res) {
  const idade = req.query.idade;

  return res.json({ test: idade });
});

app.listen(3000);
