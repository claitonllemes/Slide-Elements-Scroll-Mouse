# **Slide Scroll Mouse**

<a href="https://www.buymeacoffee.com/claitonllemes" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/99222756/210368404-216273fb-c930-453e-b32b-e3614872eba3.png" width="100%"/></a><br>

## **Configurações**

O código abaixo adiciona uma animação aos elementos definidos de slide ao rolar a página com scroll do mouse.

<br><a href="https://www.buymeacoffee.com/claitonllemes" target="_blank" rel="noopener noreferrer"><img src="https://user-images.githubusercontent.com/99222756/210372197-a1d41894-8acc-470b-ac38-2bd1ee0a4ed9.png" width="100%"/></a><br>

```html

<script>

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

</script>

```
