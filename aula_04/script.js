const btnEscreve = document.getElementById("btnAlerta");
// VARIAVEL PARA QUANDO O BOTÃO FOR CLICADO


// EVENTO DE CLICK NO BOTÃO, FUNCÃO - CRIANDO UMA FUNÇÃO
btnEscreve.addEventListener("click", () => /* NOVA FUNÇÃO*/ {
    // BLOCO QUE SERÁ FEITO QUANDO O "CLICK" FOR ACIONADO
    let nome = document.getElementById("txtNome").value;
    let idade = document.getElementById("txtIdade").value;

    document.getElementById("tituloNome").innerHTML = 'Seu nome é ' + nome + 'E sua idade ' + idade;
});