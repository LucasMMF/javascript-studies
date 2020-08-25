function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        // Obs.: Verifica??o tern?ria:
        // genero = fSex[0].checked ? 'Masculino' : 'Feminino'

        if (fSex[0].checked) {
            genero = 'Homem'
            
            if (idade >= 0 && idade < 10) {
                // Crianca
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // Crianca
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}