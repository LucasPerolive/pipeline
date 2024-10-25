// Lista de contas com URLs
const contas = [
    { nome: "Azul", id: 1, url: "https://www.example.com/conta1" },
    { nome: "Laranja", id: 2, url: "https://www.example.com/conta2" },
    { nome: "Branco", id: 3, url: "https://www.example.com/conta3" },
    { nome: "Conta 4", id: 4, url: "https://www.example.com/conta4" },
    { nome: "Conta 5", id: 5, url: "https://www.example.com/conta5" },
    { nome: "Conta 6", id: 6, url: "https://www.example.com/conta6" },
    { nome: "Conta 7", id: 7, url: "https://www.example.com/conta7" },
    { nome: "Conta 8", id: 8, url: "https://www.example.com/conta8" },
    { nome: "Conta 9", id: 9, url: "https://www.example.com/conta9" },
    { nome: "Conta 10", id: 10, url: "https://www.example.com/conta10" },
    { nome: "Conta 11", id: 11, url: "https://www.example.com/conta11" },
    { nome: "Conta 12", id: 12, url: "https://www.example.com/conta12" },
    { nome: "Conta 13", id: 13, url: "https://www.example.com/conta13" },
    { nome: "Conta 14", id: 14, url: "https://www.example.com/conta14" },
    { nome: "Conta 15", id: 15, url: "https://www.example.com/conta15" }
];

// Referência à lista de contas no HTML
const listaContas = document.getElementById('lista-contas');
const pesquisaInput = document.getElementById('pesquisa');
let contaSelecionada = null;

// Função para gerar os itens da lista de contas
function gerarListaContas(filtro = '') {
    listaContas.innerHTML = ''; // Limpa a lista antes de gerar

    // Filtra as contas de acordo com o filtro de pesquisa
    const contasFiltradas = contas.filter(conta => 
        conta.nome.toLowerCase().includes(filtro.toLowerCase())
    );

    // Ordena as contas filtradas por nome em ordem alfabética
    contasFiltradas.sort((a, b) => a.nome.localeCompare(b.nome));

    // Gera a lista de contas
    contasFiltradas.forEach(conta => {
        const listItem = document.createElement('li');
        // Usando innerHTML para permitir a quebra de linha
        listItem.innerHTML = `${conta.nome}<br>(ID: ${conta.id})`; 
        listItem.classList.add('conta');
        listItem.dataset.url = conta.url; // Armazena a URL da conta no atributo data

        // Evento de clique para selecionar uma conta
        listItem.addEventListener('click', () => {
            // Remove a classe de seleção da conta anterior (se houver)
            if (contaSelecionada) {
                contaSelecionada.classList.remove('conta-selecionada');
            }
            
            // Marca a conta atual como selecionada
            listItem.classList.add('conta-selecionada');
            contaSelecionada = listItem; // Atualiza a conta selecionada
        });

        listaContas.appendChild(listItem);
    });
}

// Gera a lista inicial
gerarListaContas();

// Evento para pesquisar contas
pesquisaInput.addEventListener('input', () => {
    gerarListaContas(pesquisaInput.value); // Filtra a lista com base na pesquisa
    contaSelecionada = null; // Reseta a conta selecionada ao pesquisar
});

// Ação ao clicar no botão "Acessar"
const acessarBtn = document.getElementById('acessar-btn');
acessarBtn.addEventListener('click', () => {
    if (contaSelecionada) {
        const url = contaSelecionada.dataset.url; // Obtém a URL da conta selecionada
        window.open(url, '_blank'); // Abre a URL em uma nova aba
    } else {
        alert('Por favor, selecione uma conta!'); // Alerta se nenhuma conta foi selecionada
    }
});
