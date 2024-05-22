alert("boas vindas ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt("escolha um numero de 1 a 100 ");

  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`número secreto é menor que ${chute}`);
    } else {
      alert(`número secreto é maior que ${chute}`);
    }

    tentativas++;
  }
}

let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa" ;
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}, parabéns!`);


