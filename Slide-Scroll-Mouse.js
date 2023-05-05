// Name: Slide Scroll Mouse
// Version: 1.0.0
// Copyright© : Claiton Lemes

let elementos_esquerda = document.querySelectorAll("#ID_ELEMENTS");
let posicoes_esquerda = {};
let intensidade_esquerda = 2;

elementos_esquerda.forEach(function (elemento) {
  let id = elemento.id;
  posicoes_esquerda[id] = 0;
});

let elementos_direita = document.querySelectorAll("#ID_ELEMENTS");
let posicoes_direita = {};
let intensidade_direita = 1;

elementos_direita.forEach(function (elemento) {
  let id = elemento.id;
  posicoes_direita[id] = 0;
});

window.addEventListener("scroll", function (event) {
  let direcao = event.deltaY > 0 ? 1 : -1;

  elementos_esquerda.forEach(function (elemento) {
    let id = elemento.id;
    posicoes_esquerda[id] = window.scrollY;
    let deslocamento = -posicoes_esquerda[id] / intensidade_esquerda;
    elemento.style.transform = "translateX(" + deslocamento + "px)";
  });

  elementos_direita.forEach(function (elemento) {
    let id = elemento.id;
    posicoes_direita[id] = window.scrollY;
    let deslocamento = posicoes_direita[id] / intensidade_direita;
    elemento.style.transform = "translateX(" + deslocamento + "px)";
  });
});
