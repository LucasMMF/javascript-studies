let valores = []

function inLista(valor) {
    if(valores.indexOf(Number(valor)) != -1) {
        return true
    } else {
        return false
    }
}

function verificaValor(valor) {
    if (Number(valor) > 100 || Number(valor) < 1) {
        return true
    } else {
        return inLista(valor)
    }
}

function somarVetor(vetor) {
    let s = 0

    for (let i in vetor) {
        s += vetor[i]
    }

    return s
}

function adicionar() {
    let num = document.querySelector('input#txtnum')
    let lista = document.querySelector('select#flista')
    let res = document.querySelector('div#res')

    if(num.value.length == 0 || verificaValor(num.value)) {
        window.alert('Valor inválido ou já encontrado na lista!')
    } else {
        let item = document.createElement('option')
        valores.push(Number(num.value))
        item.text = `Valor ${valores[valores.length-1]} foi adicionado.`
        item.value = `fl${valores.length}`
        lista.appendChild(item)
    }
    num.value = ''
    res.innerHTML = ''
    num.focus() // Trás o foco ao elemento.
}

function analisar() {
    let lista = document.querySelector('select#flista')
    let res = document.querySelector('div#res')

    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        valores.sort(function(a, b) {return a-b})
        soma = somarVetor(valores)
        media = soma / valores.length

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${valores[valores.length-1]}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${valores[0]}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}

function limpar() {
    let num = document.querySelector('input#txtnum')
    let lista = document.querySelector('select#flista')
    let res = document.querySelector('div#res')
    num.value = ''
    lista.innerHTML = ''
    valores = []
    res.innerHTML = ''
    num.focus()
}