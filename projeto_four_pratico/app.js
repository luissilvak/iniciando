// Projeto AluGames

function alterarStatus(num) {
    // Mudar o status de Alugar para Devolver
    let num = document.querySelector(`game-${num}`);
    let botao = num.querySelector('dashboard__item__button'); 
    let img = num.querySelector('dashboard__item__img');

    let verificarBotao = botao.classList.contains('dashboard__item__button');

    // se o botão Devolver for clicado mudar o status Alugar
    if (verificarBotao) {
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML= ""
    } else {
        botao.classList.add('dashboard__item__button');
        botao.classList.remove('dashboard__item__button');
    }
}


