let desafio = document.querySelector('h1');
desafio.innerHTML = 'Hora do Desafio';

// Desafio 1
function clicarBotaoConsole() {
    console.log('O botão foi clicado');
}

// Desafio 2
function clicarBotaoAlerta() {
    console.log('Eu amo JS');
}

// Desafio 3
function clicarBotaoPrompt() {
    let cidade = prompt('Informe uma cidade do Brasil: ');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

// Desafio 4
function clicarBotaoSoma() {
    let numero1 = parseInt(prompt('Informe um número: '));
    let numero2 = parseInt(prompt('Informe outro número: '));
    soma = numero1 + numero2;

    alert(`O resultado da soma entre ${numero1} e ${numero2} é igual a ${soma}.`);
}

// Desafio 5
function exibirNomeNaTela() {
    alert("Olá, mundo!");
}

// Desafio 6
function nomeNoConsole () {
    let nome = prompt("Informe o seu nome: ");
    alert(`Olá, ${nome}!`);
}

// Desafio 7
function dobrarNumero () {
    let numero = parseInt(prompt("Informe um número: "));
    let dobro = numero * 2;
    alert(`O dobro de ${numero} é igual a ${dobro}`);
}

// Desafio 8
function mediaNumero () {
    let numero1 = parseInt(prompt("Informe o primeiro número: "));
    let numero2 = parseInt(prompt("Informe o segundo número: "));
    let numero3 = parseInt(prompt("Informe o terceiro número: "));
    let media = (numero1 + numero2 + numero3) / 3;
    alert(`A média entre os três números é igual a ${media}`);
}

// Desafio 9
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

// Desafio 10
function multipNumero () {
    let numero = parseInt(prompt("Informe um número:"));
    let mult = numero * numero;

    alert(`O número ${numero}, multiplicado por ele mesmo dará ${mult}.`);
}

// Desafio 11
function calcularIMC() {
    let altura = prompt("Informe a sua altura: ");
    let peso = prompt("Informe o seu peso: ");
    let imc = parseInt(peso / (altura * altura));
    alert(`O seu IMC é igual a ${imc}`);
}

// Desafio 12 (Não realizado)
/*function calcularFatorial() {
    let numero_fatorial = parseInt(prompt("Informe um número: "));
    let resultado = numero_fatorial * (numero_fatorial * (numero_fatorial - 1));
    alert(`O cálculo de ${numero_fatorial}! é igual a ${resultado}`);
}
*/

// Desafio 13
function converterMoeda() {
    let valorReais = parseFloat(prompt("Informe um valor em reais: "));
    let valorDolar = valorReais / 4.80 ;
    alert(`O valor ${valorReais} é igual a ${valorDolar}`);
}

// Desafio 14
function mostrarAreaRetangular() {
    let altura = parseInt(prompt("Informe a altura da sala"));
    let largura = parseInt(prompt("Informe a largura da sala"));
    let area = altura * largura;
    let perimetro = 2 * (largura + altura);
    alert(`Em uma sala retangular, a área é igual a ${area} e o perímetro igual a ${perimetro}`);
}

// Desafio 15
function mostrarAreaCircular() {
    let raio = parseFloat(prompt("Informe o raio da sala"))

    let area = 3.14 * (raio * raio);
    let perimetro = 2 * 3.14 * raio;

    alert(`Em uma sala circular, a área é igual a ${area} e o perímetro é igual a ${perimetro}`);
}

// Desafio 16
function mostrarTabuada() {
    let numero = parseInt(prompt("Informe um número: "));
    contador = 0;

    while (contador <= 10) {
        resultado = numero * contador;
        alert(`${numero} * ${contador} = ${resultado}`);
        contador++;
    }
}