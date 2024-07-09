alert("Boas vindas ao Jogo do Número Secreto");
let quant = prompt("Informe a quantidade de números que você quer testar: ");
let numeroSecreto = parseInt(Math.random() * quant + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Condicional "enquanto = while"
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${quant}`);
    // estrutura condicional
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas == 1){
//     alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// } else {
//     alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// }

