var agora = new Date()
var hora = agora.getHours()
// Obs.: Pega a hora do sistema que está executando
// o script. Se for um JS executando Client-Side,
// é a hora do computador da pessoa, ou seja, do usuário.
// Se for um Node.JS executando Server-Side, 
// então é a hora do servidor.

console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 5) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}