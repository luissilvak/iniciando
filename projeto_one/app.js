alert("Boas vindas ao Jogo do Número Secreto");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt("Escolha um número entre 1 e 10");

if (numeroSecreto == chute) {
    alert(`Parabéns! Você descobriu o número secreto" ${numeroSecreto}`);
} else {
    alert("Você errou :(");
}