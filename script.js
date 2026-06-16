// Mensagem ao carregar o site
console.log("Site AGRINHO 2026 carregado com sucesso!");

// Mensagem de boas-vindas
window.alert("Bem-vindo ao site Agro forte, futuro sustentável!");

// Seleciona o botão do formulário
const botao = document.querySelector("button");

// Função ao clicar no botão
botao.addEventListener("click", function(event) {

    // Evita envio automático do formulário
    event.preventDefault();

    // Captura o valor do campo nome
    const nome = document.getElementById("nome").value;

    // Verifica se o usuário digitou algo
    if (nome === "") {

        alert("Por favor, digite seu nome.");

    } else {

        alert("Mensagem enviada com sucesso, " + nome + "!");
    }
});
