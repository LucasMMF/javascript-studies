function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''

        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')

            item.text = `${n} x ${i} = ${n * i}`
            item.value = `tab${i}`
            // Ou item.setAttribute('value', `tab${i}`)
            // Obs.: setAttribute tem algumas peculiaridades
            // o recomendado � mesmo realizar o set de atributos
            // com variavel.atributo. Nem sempre, mas � recomend�vel.
            // Pesquisar mais sobre diferen�a entre
            // vari�vel.atributo vs vari�vel.setAtribute().
            tab.appendChild(item)
        }
    }
}