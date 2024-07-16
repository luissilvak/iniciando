// Projeto AluGames

function alterarStatus(num) {
    // Mudar o status de Alugar para Devolver
    let num = document.querySelector(`game-${num}`);
    let botao = num.querySelector('dashboard__item__button'); 
    let img = num.querySelector('dashboard__item__img');

    let verificarBotao = botao.classList.contains('dashboard__item__button');

    // se o botão Devolver for clicado mudar o status Alugar
    if (verificarBotao) {
        //botao.classList.remove('dashboard__item__button--return');
        botao.setAttribute('class', 'dashboard__item__button--return');
        img.setAttribute('dashboard__item__img--rented');
        botao.innerHTML = 'Devolver';
    } else {
        botao.setAttribute('dashboard__item__button');
        img.setAttribute('dashboard__item__img');
        botao.innerHTML = 'Alugar';
    }
}


