// Projeto AluGames

function alterarStatus(x) {
    // Mudar o status de Alugar para Devolver
    let jogoClicado = document.getElementById(`game-${x}`);
    let img = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button'); 

    let verificarImagem = img.classList.contains('dashboard__item__img--rented');

    // Se o botão Devolver for clicado mudar o status Alugar
    if (verificarImagem) {
        img.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        img.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        devolverJogo();
    }
}

// Devolução de Jogo
function devolverJogo() {

}

// Saber quantos jogos foram alugados
function informarQuantidade() {

}

