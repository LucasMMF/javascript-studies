// Crie uma tela com um <input> que deve receber o nome de um usuário
// no GitHub. Após digitar o nome do usuário e clicar no botão buscar
// a aplicação deve buscar pela API do GitHub (conforme URL abaixo)
// os dados de repositórios do usuário e mostrá-los em tela:

// URL de exemplo: https://api.github.com/users/diego3g/repos

// Basta alterar "diego3g" pelo nome do usuário.

// Depois de preencher o input e adicionar, uma lista ul li
// deve aparecer com os repositórios do usuário selecionado.

function renderizarRepositorios(repositorios) {
    listElement.innerHTML = '';

    if (repositorios.length === 0) {
        const textElement = document.createTextNode('Este usuário ainda não possui repositórios.');
        const liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    } else {
        for (repo of repositorios) {
            const textElement = document.createTextNode(repo.name);
            const liElement = document.createElement('li');
    
            liElement.appendChild(textElement);
            listElement.appendChild(liElement);
        }
    }
}

function listarRepositorios() {
    var usuario = inputElement.value;

    if (usuario === "") {
        alert('Por favor, digite o nome do usuário antes de realizar a busca.');
        return;
    }

    axios.get(`https://api.github.com/users/${usuario}/repos`)
        .then(function(response) {
            paragraphElement.innerHTML = `Repositórios de ${usuario}:`;
            renderizarRepositorios(response.data);
        })
        .catch(function(error) {
            if (error.response.status === 404) {
                paragraphElement.innerHTML = 'Este usuário não foi encontrado! Tente outro usuário.';
                listElement.innerHTML = '';
            }
        });
}

var inputElement = document.querySelector('#usuario');
var paragraphElement = document.querySelector('#repositorios p');
var listElement = document.querySelector('#repositorios ul');

var botaoBuscarRepositorio = document.querySelector('#busca-repositorios');
botaoBuscarRepositorio.onclick = listarRepositorios;
