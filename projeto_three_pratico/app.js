// Projeto Sorteador de Números

// Função "Sortear Número"
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Verificação de entrada de valores
    if (de >= ate) {
        alert('Atenção! um número não pode retroceder do outro');
        return;
    } 

    if (quantidade > (ate - de + 1)) {
        alert('Campo Quantidade deve ser menor igual ao intervalo de números dos outros campos. Verifique!');
        return;
    } 

    let sorteados = []; 
    
    for(let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        
        while(sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;

    alterarStatusBotao();

}

// Função obter número aleatório
function obterNumeroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;

}

// Alterar o Status do Botão
function alterarStatusBotao () {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Função reiniciar jogo
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';

    alterarStatusBotao();

}