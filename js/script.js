// Ativar links menu

const links = document.querySelectorAll(".header-content li a");

function ativarlinks(link) {
  if (window.location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarlinks);

// Ativar item orcamento

const url = new URLSearchParams(location.search);

function ativarproduto(url) {
  const Element = document.getElementById(url);
  if (Element) {
    Element.checked = true;
  }
  console.log(Element);
}

url.forEach(ativarproduto);

// Pergunta frequente

const questions = document.querySelectorAll(".perguntas button");

function AtivarQuestions(event) {
  const quiz = event.currentTarget;
  const controls = quiz.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);
  const ativa = resposta.classList.contains("ativa");

  quiz.setAttribute("aria-expanded", ativa);
  resposta.classList.toggle("ativa");
  console.log(ativa);
}

function eventQuestions(quiz) {
  quiz.addEventListener("click", AtivarQuestions);
}

questions.forEach(eventQuestions);

// Galeria Bike

const lista_bicicletas = document.querySelectorAll(".bicicleta-imagens img");
const galeria = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeria.prepend(img);
  }
}

function eventosgaleria(img) {
  img.addEventListener("click", trocarImagem);
}

lista_bicicletas.forEach(eventosgaleria);

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
