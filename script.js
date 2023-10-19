//Aluna: Ana Carolina Reis

var cadastros = [];

// Função que pega os valores do formulário:
function salvarCadastro() {
    const nome = document.getElementById("nome").value
    const cpf = document.getElementById("cpf").value
// Uso da biblioteca Moment.js para formatar datas:
    const datanascimento = moment(document.getElementById("datanascimento").value).format('DD-MM-YYYY')
    const vacina = document.getElementById("vacina").value
// Uso da biblioteca Moment.js para formatar datas:
    const datavacina = moment(document.getElementById("datavacina").value).format('DD-MM-YYYY')

// Formatação de datas pelo Moment.js e adição de 30 dias a data da vacina para formar a data de retorno:
    const dataRetorno = moment(datavacina, 'DD-MM-YYYY').add(30, 'days').format('DD-MM-YYYY');

// Adiciona os valores do formulário no Vetor cadastros:
    cadastros.push({nome, cpf, datanascimento, vacina, datavacina, dataRetorno});

// Limpa as informações do formulário:
    document.getElementById("form_cadastro").reset(); 

    alert("Cadastro realizado com sucesso!");

// Uso da função
    atualizarLista();
}

// Criação de função para trazer as informações do Vetor para a tabela criada no HTML:
function atualizarLista(){
    var corpoTabela = document.getElementById("corpotabela");

// Limpa as informações do corpo da tabela:
    corpoTabela.innerHTML = "";

// Laço de repetição para percorrer os itens do vetor:
    for (var i = 0; i < cadastros.length; i++) {
// Seleciona o item do vetor por meio do índice:
        var registro = cadastros[i];

// Criação de linha na tabela:
        var linha = document.createElement("tr");

// Criação de campos:
        var campoNome = document.createElement("td");
        var campoCPF = document.createElement("td");
        var campoDataNascimento = document.createElement("td");
        var campoVacina = document.createElement("td");
        var campoDataVacina = document.createElement("td");
        var campoDataRetorno = document.createElement("td");

// Preenchimento dos campos com os devidos dados:
        campoNome.textContent = registro.nome;
        campoCPF.textContent = registro.cpf;
        campoDataNascimento.textContent = registro.datanascimento;
        campoVacina.textContent = registro.vacina;
        campoDataVacina.textContent = registro.datavacina;
        campoDataRetorno.textContent = registro.dataRetorno;

// Adiciona os campos preenchidos na linha criada:
        linha.appendChild(campoNome);
        linha.appendChild(campoCPF);
        linha.appendChild(campoDataNascimento);
        linha.appendChild(campoVacina);
        linha.appendChild(campoDataVacina);
        linha.appendChild(campoDataRetorno);

// Adiciona a linha com os campos preenchidos no corpo da tabela:
        corpoTabela.appendChild(linha);
    }
}
