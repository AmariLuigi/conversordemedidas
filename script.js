function encode() {
  var output = document.getElementsByClassName("caixa2")[0];
  var input = document.getElementsByClassName("caixa1")[0];
  output.value = "";
  for (var i = 0; i < input.value.length; i++) {
    output.value += input.value[i].charCodeAt(0).toString(2) + " ";
  }
  output.value = output.value.slice(0, output.value.length - 1);
  input.value = "";
}

function decode() {
  var input = document.getElementsByClassName("caixa2")[0];
  var output = document.getElementsByClassName("caixa1")[0];
  output.value = "";
  var letras = input.value.split(" ");
  var binCode = [];
  for (const element of letras) {
    binCode.push(String.fromCharCode(parseInt(element, 2)));
  }
  output.value = binCode.join("");
  input.value = "";
}

window.onload = function () {
  var botao1 = document.getElementsByName("botao1");
  var botao2 = document.getElementsByName("botao2");
  botao1[0].addEventListener("click", encode);
  botao2[0].addEventListener("click", decode);
};
