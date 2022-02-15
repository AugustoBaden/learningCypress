function verificarIdade() {
  var nome = document.querySelector("input[name=nome]");
  var idade = document.querySelector("input[name=idade]");

  if (idade.value.length == 0) {
    alert("inserir Idade");
    return;
  }
  var idadeNum = parseInt(idade.value);

  if (idadeNum >= 18) {
    alert("idade adequada");
  } else if (idadeNum > 4) {
    ("menor de idade");
  } else {
    ("muito jovem");
  }

  /*  console.log(idade.value);
    console.log(typeof idade.value);
    console.log(nome.value);
    console.log(typeof nome.value); */
}
