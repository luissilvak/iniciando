// Desafio 1
//alert("Boas vindas ao nosso site!");

// Desafio 2
//let nome = "Lua";

// Desafio 3
//let idade = 25;

// Desafio 4
//let numeroDeVendas = 50;

// Desafio 5
//let saldoDisponivel = 1000;

// Desafio 6
//alert("Erro! Preencha todos os campos");

// Desafio 7
//let mensagemDeErro = alert("Erro! Preencha todos os campos");

// Desafio 8
//let nome = prompt("Informe o seu nome: ");

// Desafio 9
//let idade = prompt("Informe a sua idade: ");

// Desafio 10
//if (idade => 18) {
//    alert("Pode tirar a habilitação!");
//}

// Desafio 11
/*let dia = prompt("Qual é o dia da semana? ");

if (dia == "Sábado" || dia == "Domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}
*/

// Desafio 12
/*let numero = prompt("Informe um número: ");

if (numero >= 0) {
    alert("Número positivo!");
} else {
    alert("Número negativo!");
}
*/

// Desafio 13
let pontuacao1 = prompt("Digite o primeiro número de 1 a 100");

let pontuacao2 = prompt("Digite o primeiro número de 1 a 100");

let pontuacao3 = prompt("Digite o primeiro número de 1 a 100");

let pontuacao4 = prompt("Digite o primeiro número de 1 a 100");

let pontuacao5 = prompt("Digite o primeiro número de 1 a 100");

soma = parseInt(pontuacao1 + pontuacao2 + pontuacao3 + pontuacao4 + pontuacao5)

console.log(soma);


if (soma >= 100) {
    alert("Parabéns, você venceu! O resultado foi " + soma);
} else {
    alert("Tente novamente para ganhar");
}