// Projeto Carrinho de compras


// Função Adicionar produto
function adicionar() {
    // multiplicar quantidade x valor
    //let quant = parseInt(document.getElementById('quantidade'));
    let quantidade = parseInt(document.querySelector('number'));
    alert(quantidade);

    let produtos = document.getElementById('produto');
    
    let fone = produtos.querySelector('Fone de ouvido - R$100');
    
    let celular = produtos.querySelector('Celular - R$1400');
    let oculos = produtos.querySelector('Oculus VR - R$5000');

    /*if(fone.contains('Fone de ouvido - R$100'))  {
        total = quantidade * 100
        alert(total);
    } else if (celular.contains('Celular - R$1400')) {
        total = quantidade * 1400
        alert(total);
    } else if (oculos.contains('Oculus VR - R$5000')) {
        total = quantidade * 5000
        alert(total);
    }*/

}

// Função Limpar produto
function limpar() {
    // Limpar caixa de texto "Qtde."
    alert("Olá mundo!");
}