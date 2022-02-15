var marvels = [
  "omi diferro",
  "omiranha",
  "gavinhao",
  "capetao",
  "viu uva preta",
];

function listaMarvels() {
  var ul = document.getElementById("marvels");
  ul.innerHTML = "";
  marvels.forEach(function (a) {
    var li = document.createElement("li");
    var text = document.createTextNode(a);
    li.appendChild(text);
    ul.appendChild(li);
  });
  console.log(marvels);
}
