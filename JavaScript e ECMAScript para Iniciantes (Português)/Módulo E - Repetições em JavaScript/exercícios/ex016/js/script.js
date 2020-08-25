var btncontar = document.querySelector('input#btncontar')

btncontar.addEventListener('click', contar)

function contar() {
    var inicio = document.querySelector('input#txtini').value
    var final = document.querySelector('input#txtfim').value
    var passos = document.querySelector('input#txtpassos').value    
    var res = document.querySelector('div#res')
    var contagem = ''

    if (inicio.length == 0 || final.length == 0 || passos.length == 0) {
        res.innerHTML = 'Impossí­vel contar!'
    } else {
        inicio = Number(inicio)
        final = Number(final)
        passos = Number(passos)

        if (passos <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passos = 1
        }

        if (inicio < final) {
            while (inicio <= final) {
                contagem += `${inicio} \u{1F449} `
                inicio += passos
            }
        } else {
            while (inicio >= final) {
                contagem += `${inicio} \u{1F449} `
                inicio -= passos
            }
        }
        contagem += ` \u{1F3C1}`
        
        res.innerHTML = 'Contando:'
        res.innerHTML += `<p>${contagem}</p>`
    }
}