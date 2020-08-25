/*
Q01: Já sabe como usar a extensão Node Exec
no VSCode?
R: Sim, primeiro deve-se instalar a extensão
através do VSCode, na aba de extensões
(localizada na parte esquerda do programa, os 4 blocos).
Depois, deve-se ativar (enable) a extensão, caso já não
esteja ativada, e por fim deve-se executar ela utilizando
o comando F8.

Q02: Sabe criar uma condição em seu programa JS?
R: Sim, utiliza-se a estrutura if, com a condição
entre parênteses, e então um bloco de código.
Também podendo opcionalmente colocar um else e outro
bloco de código.

No caso do JavaScript, temos algumas
particularidades com relação a certos operadores.
Como por exemplo a igualdade (==). No caso do ==,
ele apenas compara os valores, sem se importar com
o tipo de dados. Enquanto que a igualdade restrita
verifica não apenas o valor do dado, mas também o
seu tipo.

Exemplos:
3 == 3 é verdadeiro.
3 == '3' é verdadeiro.
3 == 4 é falso.
3 == '4' é falso.

3 === 3 é verdadeiro.
3 === '3' é falso.
3 === 4 é falso.
3 === '4' é falso.

3 >= '2' é verdadeiro.

Q03: Consegue diferenciar condições simples
e as condições compostas?
R: Sim, condições simples são condições que
apenas contém o if. Sem utilizar else. Já 
condições compostas são condições que utilizam
if e else.

-----------------------------------------------------

- Condições Aninhadas

É quando eu coloco um if dentro de outro if. A quantidade
de ifs dentro de outros ifs é, em tese, ilimitada. Porém
deve-se tomar cuidado com a LEGIBILIDADE do código ao
usar condições aninhadas. Um embaranhado de if-elses pode
deixar o código difícil de se entender, o que não é uma
boa prática.

if (cond1) {
    bloco1
} else {
    if(cond2) {
        bloco2
    } else{
        bloco3
    }
}

- Condição Múltipla

A condição múltipla existe para testar múltiplos valores
fixos, diferente do if-else, onde se podem testar
intervalos de valores. Nesta estrutura, temos uma
expressão, e desta expressão testamos vários valores
antes de retornarmos ao fluxo normal do programa.

Esta estrutura é representada da seguinte maneira:

switch (expressão) {
    case valor 1:
        código 1
        break
    
    case valor 2:
        código 2
        break

    case valor 3:
        código 3
        break

    default:
        código default
        break
}

É NECESSÁRIO utilizar break apos cada
case em uma estrutura switch. Com exceção
do default, que é opcional, e em casos
específicos (avançado).

*/