const formulario = document.querySelector("form");

function enviarForms(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerHTML = "Enviando...";
}

formulario.addEventListener("submit", enviarForms);
