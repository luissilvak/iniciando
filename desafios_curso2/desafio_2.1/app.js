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
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function clicarBotaoSoma() {
    let numero1 = parseInt(prompt('Informe um número: '));
    let numero2 = parseInt(prompt('Informe outro número: '));
    soma = numero1 + numero2;

    alert(`O resultado da soma entre ${numero1} e ${numero2} é igual a ${soma}.`)
}