let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

// console.log(valores) // A maneira não-formatada.

/* A maneira brute force
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


// A maneira simplificada
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/


// A maneira AINDA MAIS simplificada, do JavaScript,
// otimizada para vetores e objetos.
for(let pos in valores) { // Obs.: Funciona tanto let quanto var.
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}