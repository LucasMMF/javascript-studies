var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    if(todoText === "") {
        alert('Por favor preencha a caixa de texto antes de clicar em adicionar!');
        return 0;
    }

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
}

buttonElement.onclick = addTodo;
