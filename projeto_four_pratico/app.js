// Projeto AluGames

function alterarStatus() {
    // Mudar o status de Devolver para Alugar
    let botao = document.getElementsByClassName('dashboard__item__button dashboard__item__button--return');
    
    // se o botão Devolver for clicado mudar o status Alugar
    if (botao.classList.contains('dashboard__item__button dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button dashboard__item__button--return');
        botao.classList.add('dashboard__item__button');
    } else {
        botao.classList.remove('dashboard__item__button');
        botao.classList.add('dashboard__item__button dashboard__item__button--return');
    }
    
    alterarStatus(1);
}

// Jogo Monopoly

// Jogo Ticket to Ride

// Jogo Takenoko





