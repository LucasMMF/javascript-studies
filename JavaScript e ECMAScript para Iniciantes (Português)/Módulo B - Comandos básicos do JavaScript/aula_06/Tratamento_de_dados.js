/*
Q01: O que é uma variável?
R: Uma variável em programação é um espaço de memória
que armazena um dado temporariamente, durante a 
duração da execução de um programa.
Possuí um tipo de dado e um identificador. No
JavaScript é possível declarar uma variável
sem informar qual é o tipo de dado dela.
Informando apenas qual é o seu identificador.

Q02: Como declarar uma variável numérica Inteira 
ou Real usando JS?
R: var num = x, onde var é a palavra reservada para
a criação de variáveis, num é o identificador
da variável e por fim x é o número inteiro ou
real que a variável está recebendo. No JS,
não existem tipos diferentes para Inteiros e Reais,
podendo ambos serem considerados Number (Numérico).
Além disso, não existe declaração de tipos de dados
para uma variável em Java. Ela começa como um
objeto que pode receber qualquer tipo de dado.

Ou seja, no exemplo acima, podemos ter tanto
var num = 2, quanto
var num = 2.5, ambos são válidos.
Também poderia ser usado let ou const ao invés
de var.

Q03: Quais são os tipos primitivos do JS?
R: Number, String e Boolean. Além desses, também
temos: Infinity e NaN que fazem parte do Number,
Null (nulo), Undefined (não definido),
Object (objeto), Array (vetor) que faz parte 
de Object e também function (função).

Para verificar o tipo de um operando,
pode-se utilizar o comando typeof.

Q04: O que significa colocar o valor null dentro
de uma variável?
R: Colocar o valor null em uma variável significa
que você está anulando o valor daquela variável,
ou seja, você está eliminando/substituindo
qualquer valor que pudesse estar anteriormente
naquela variável e está colocando null em seu
lugar.


- Formatação de Strings.

Welcome to Node.js v12.16.3.
Type ".help" for more information.
> var s = 'JavaScript'
undefined
> s
'JavaScript'
> 'Eu estou estudando s'
'Eu estou estudando s'
> 'Eu estou estudando ' + s
'Eu estou estudando JavaScript'

-----------------------------------------------------

> nome = 'Lucas Mateus'
'Lucas Mateus'
> idade = 24
24
> nota = 9.3
9.3
> nome
'Lucas Mateus'
> idade
24
> nota
9.3
> 'O aluno ' + nome + ' com ' + idade + ' anos tirou nota ' + nota
'O aluno Lucas Mateus com 24 anos tirou nota 9.3'

- O que foi usado acima:
var s = 'JavaScript'
'Eu estou aprendendo s' // Não faz interpolação.
'Eu estou aprendendo ' + s // Usa concatenação.

Em versões mais recentes do JS, podemos utilizar
template strings, cuja sintaxe é dada da seguinte forma:

`Eu estou aprendendo ${s}` // Usa template string.

-----------------------------------------------------

> `O aluno ${nome} com ${idade} anos tirou ${nota}`
'O aluno Lucas Mateus com 24 anos tirou 9.3'

-----------------------------------------------------
- Extras:

s.length // Quantos caracteres a string tem
s.toUpperCase() // Transforma tudo para 'MAIÚSCULAS'
s.toLowerCase() // Transforma tudo para 'minúsculas'

-----------------------------------------------------
- Formatação de números:

Welcome to Node.js v12.16.3.
Type ".help" for more information.
> var n1 = 1545.5
undefined
> n1
1545.5
> n1.toFixed(2)
'1545.50'
> n1.toFixed(2).replace('.', ',')
'1545,50'
> n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
'R$ 1,545.50'
> n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
'US$ 1,545.50'
> n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})
'€ 1,545.50'

var n1 = 1543.5 // Variável do número.
n1 // O número em si, sem formatação.
n1.toFixed(2) // Mostra dois números após a vírgula.
n1.toFixed(2).replace('.', ',') // Substitui ponto por vírgula.

// Formata automaticamente um número para um formato de exibição de moeda, aceitando diversos tipos.
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})


*/