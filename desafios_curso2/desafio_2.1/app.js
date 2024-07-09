let desafio = document.querySelector('h1');
desafio.innerHTML = 'Hora do Desafio';

function clicarBotaoConsole() {
    console.log('O botão foi clicado');
}

function clicarBotaoAlerta() {
    console.log('Eu amo JS');
}

function clicarBotaoPrompt() {
    let cidade = prompt('Informe uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function clicarBotaoSoma() {
    let numero1 = parseInt(prompt('Informe um número: '));
    let numero2 = parseInt(prompt('Informe outro número: '));
    soma = numero1 + numero2;

    alert(`O resultado da soma entre ${numero1} e ${numero2} é igual a ${soma}.`);
}

function exibirNomeNaTela() {
    alert("Olá, mundo!");
}

function nomeNoConsole () {
    let nome = prompt("Informe o seu nome: ");
    alert(`Olá, ${nome}!`);
}

function dobrarNumero () {
    let numero = parseInt(prompt("Informe um número: "));
    let dobro = numero * 2;
    alert(`O dobro de ${numero} é igual a ${dobro}`);
}

function mediaNumero () {
    let numero1 = parseInt(prompt("Informe o primeiro número: "));
    let numero2 = parseInt(prompt("Informe o segundo número: "));
    let numero3 = parseInt(prompt("Informe o terceiro número: "));
    let media = (numero1 + numero2 + numero3) / 3;
    alert(`A média entre os três números é igual a ${media}`);
}

function maiorNumero () {
    let numero1 = parseInt(prompt("Informe um número: "));
    let numero2 = parseInt(prompt("Informe outro número: "));

    if (numero1 > numero2) {
        alert(`O número ${numero1} é maior que o número ${numero2}.`);
    } else if (numero2 > numero1) {
        alert(`O número ${numero2} é maior que o número ${numero1}.`);
    } else {
        alert(`Os números ${numero1} e ${numero2} são iguais.`);
    }
}

function multipNumero () {
    let numero = parseInt(prompt("Informe um número:"));
    let mult = numero * numero;

    alert(`O número ${numero}, multiplicado por ele mesmo dará ${mult}.`);
}