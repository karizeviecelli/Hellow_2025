// ADIVINHE O NÚMERO
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function adivinharNumero() {
  const chute = parseInt(document.getElementById('guessInput').value);
  const feedback = document.getElementById('guessFeedback');

  if (chute === numeroSecreto) {
    feedback.textContent = "Parabéns! Você acertou!";
    feedback.style.color = "green";
  } else if (chute < numeroSecreto) {
    feedback.textContent = "Tente um número maior.";
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "Tente um número menor.";
    feedback.style.color = "orange";
  }
}

// TABUADA RELÂMPAGO
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
document.getElementById('tabuadaPergunta').textContent = `Quanto é ${num1} x ${num2}?`;

function verificarTabuada() {
  const resposta = parseInt(document.getElementById('tabuadaResposta').value);
  const feedback = document.getElementById('tabuadaFeedback');

  if (resposta === num1 * num2) {
    feedback.textContent = "Resposta correta!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Errado! A resposta era ${num1 * num2}.`;
    feedback.style.color = "red";
  }

  // Gera nova pergunta
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById('tabuadaPergunta').textContent = `Quanto é ${num1} x ${num2}?`;
}

// DESAFIO DE OPERADORES
let resultado = 9;
let valor1 = 3;
document.getElementById('desafioConta').textContent = `${valor1} + _ = ${resultado}`;

function verificarDesafio() {
  const resposta = parseInt(document.getElementById('desafioResposta').value);
  const esperado = resultado - valor1;
  const feedback = document.getElementById('desafioFeedback');

  if (resposta === esperado) {
    feedback.textContent = "Muito bem! Você completou corretamente.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Ops! A resposta correta era ${esperado}.`;
    feedback.style.color = "red";
  }
}
