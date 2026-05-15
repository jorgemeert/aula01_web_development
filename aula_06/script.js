// Pega todo o HMTL QUE ESTÁ LÁ E COLOCA NA VÁRIAVEL!
const btnAddCard = document.getElementById("addCard");
// váriavel que contém o elemento que será adicionado
let card = '<div class="produto"></div>';
// contador de 'bolinhas'
let totalProdutos = 0;
let podutos = '';

//função do clique - elemento.addEventListener(evento, funcao);
btnAddCard.addEventListener("click", () => {
    // contador de cliques

    totalProdutos = totalProdutos + 1;
    produtos = '';
    //Inicio do contador, condição ; adicionar mais 1 a cada volta
    for (let contador = 0; contador < totalProdutos; contador++) {
        produtos = produtos + card;

    }
    let carrinho = document.getElementById("carrinho");


    carrinho.innerHTML = produtos;

})



// identificou o clique
const btnDark = document.getElementById("darkMode");

// adicionou o evento de click no elemento
btnDark.addEventListener("click", () => {
    //selecionou o elemento "body" do HTML
    const fundo = document.querySelector("body");

    //add classe dark no elemento
    fundo.classList.add('dark');

})