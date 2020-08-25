// Crie uma função que recebe a idade de um usuário e retorna uma
// Promise que depois de 2 segundos retornará se o usuário é
// maior ou não que 18 anos. Se o usuário tiver mais que 18 anos de
// idade o resultado deve cair no .then, caso contrário, no .catch

function checaIdade(idade) {
    // Retorna uma promise
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            return (idade >= 18) ? resolve() : reject();
        }, 2000);
    });
}

function verificar() {
    var inputIdade = document.querySelector('#d-idade #idade');
    
    if (inputIdade.value === "") {
        alert('Por favor, digite a idade no campo de texto.');
    } else {
        var idade = Number(inputIdade.value);

        checaIdade(idade)
            .then(function() {
                console.log("Maior que 18");
            })
            .catch(function() {
                console.log("Menor que 18");
            });
    }
}

var buttonIdade = document.querySelector('#d-idade #verifica-idade');
buttonIdade.onclick = verificar;
