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

  // nome = document.querySelector("input[name=nome]");
  //var idade = document.querySelector("input[name=idade]");

  if (!idade) {
    return res.json({ Message: "inserir Idade" });
  }
  var idadeNum = parseInt(idade);

  if (idadeNum >= 18) {
    return res.json({ Message: "idade adequada" });
  } else if (idadeNum > 4) {
    return res.json({ Message: "menor de idade" });
  } else {
    return res.json({ Message: "muito jovem" });
  }
});

app.listen(3000);
