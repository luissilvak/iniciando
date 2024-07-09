alert("Boas vindas ao Jogo do Número Secreto");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Condicional "enquanto = while"
while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 10");
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

