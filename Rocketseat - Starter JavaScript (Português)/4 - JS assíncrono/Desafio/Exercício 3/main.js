// A partir do resultado do exemplo anterior adicione um indicador
// de carregamento em tela no lugar
// da lista apenas enquanto a requisição estiver acontecendo:
// <li>Carregando...</li>
// Além disso, adicione uma mensagem de erro em tela caso o usuário
// no GitHub não exista.
// Dica: Quando o usuário não existe, a rquisição irá cair no .catch
// com código de erro 404.

function renderizarRepositorios(repositorios, usuario) {
    paragraphElement.innerHTML = `Repositórios de ${usuario}:`;

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

function renderizarLoading() {
    paragraphElement.innerHTML = "";
    listElement.innerHTML = "";

    var textElement = document.createTextNode('Carregando...');

    paragraphElement.appendChild(textElement);
}

function renderizarErro(status) {
    paragraphElement.innerHTML = "";

    if(status === 404) {
        var textElement = document.createTextNode('Este usuário não foi encontrado! Tente outro usuário.');
    
        paragraphElement.appendChild(textElement);
    }
}

function listarRepositorios() {
    var usuario = inputElement.value;

    if (usuario === "") {
        alert('Por favor, digite o nome do usuário antes de realizar a busca.');
        return;
    }

    renderizarLoading();

    // Paginação (per_page): https://developer.github.com/v3/#pagination
    axios.get(`https://api.github.com/users/${usuario}/repos?per_page=100`)
        .then(function(response) {
            renderizarRepositorios(response.data, usuario);
        })
        .catch(function(error) {
            renderizarErro(error.response.status);
        });
}

var inputElement = document.querySelector('#usuario');
var paragraphElement = document.querySelector('#repositorios p');
var listElement = document.querySelector('#repositorios ul');

var botaoBuscarRepositorio = document.querySelector('#busca-repositorios');
botaoBuscarRepositorio.onclick = listarRepositorios;
