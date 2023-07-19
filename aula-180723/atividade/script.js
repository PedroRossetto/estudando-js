// Crie uma função em JavaScript que recebe um vetor de objetos representando alunos e monte uma tabela HTML dinamicamente com base nesses dados. 
// Cada objeto no vetor representa um aluno e possui as propriedades "nome", "idade" e "nota". 
const alunos = [
    {
        nome: "Pedro",
        idade: "16",
        nota: "80"
    },
    {
        nome: "Sara",
        idade: "41",
        nota: "32"
    },
    {
        nome: "Juana",
        idade: "23",
        nota: "54"
    },
    {
        nome: "Jose",
        idade: "64",
        nota: "32"
    },
    {
        nome: "Maria",
        idade: "35",
        nota: "51"
    },
    {
        nome: "Joao",
        idade: "25",
        nota: "67"
    }
];

function inicializaTabela() {
    const tabela = document.querySelector("#tabelaalunos");
    for(let aluno of alunos) {
        tabela.innerHTML += `
        <tr>
            <td>${aluno.nome}</td>
            <td>${aluno.idade}</td>
            <td>${aluno.nota}</td>
        <tr>
        `;
    }
}

inicializaTabela();



// Sua tarefa é percorrer o vetor de objetos e gerar uma tabela no formato HTML, exibindo os dados de cada aluno em linhas separadas. 

// Cada linha da tabela deve conter três colunas: uma para o nome, outra para a idade e a última para a nota do aluno. 

// Certifique-se de que a tabela gerada seja exibida corretamente no documento HTML.