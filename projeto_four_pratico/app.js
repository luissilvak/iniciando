// Projeto AluGames

function alterarStatus(x) {
    // Mudar o status de Alugar para Devolver
    let jogo = document.getElementById(`game-${x}`);
    let botao = jogo.querySelector('.dashboard__item__button'); 
    let img = jogo.querySelector('.dashboard__item__img');

    let verificarBotao = botao.classList.contains('dashboard__item__button--return');

    // Se o botão Devolver for clicado mudar o status Alugar
    if (verificarBotao) {
        img.classList.remove('dashboard__item__button--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
    } else {
        img.classList.add('dashboard__item__button');
        botao.classList.add('');
        botao.innerHTML = 'Devolver';
    }
}


