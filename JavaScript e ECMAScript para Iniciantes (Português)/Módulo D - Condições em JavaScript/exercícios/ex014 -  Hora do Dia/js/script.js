function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var msg = document.getElementById('d-msg')
    var img = document.querySelector('img#i-img')

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora < 12) {
        img.src = img.src.replace('manha', 'manha')
        img.alt = "imagem do amanhecer"
        document.body.style.background = '#e2cd9f'
    } else if (hora <= 18) {
        img.src = img.src.replace('manha', 'tarde')
        img.alt = "imagem do entardecer"
        document.body.style.background = '#b9846f'
    } else {
        img.src = img.src.replace('manha', 'noite')
        img.alt = "imagem do anoitecer"
        document.body.style.background = '#1d2e34'
    }
}


