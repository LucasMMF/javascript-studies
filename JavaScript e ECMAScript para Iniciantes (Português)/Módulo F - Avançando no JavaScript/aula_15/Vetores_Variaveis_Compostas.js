/*
Q01: Já treinou bastante o uso das estruturas
de repetição while, do..while e for?
R: Sim!

Q02: Aprendeu como manipular objetos
de formulários HTML usando JS?
R: Sim!!

Q03: Seria bom tornar seus códigos menores e
mais simplificados?
R: Sempre!

Q04: Você é daquele tipo de pessoa que
ouviu alguém dizer que "usar array é difícil"?
R: Já ouvi outras pessoas dizendo isso, porém
nunca tive muita dificuldade no uso e no
entendimento de arrays.

-----------------------------------------------------

- Variáveis

Variáveis simples só conseguem
armazenar um valor por vez.

Variáveis compostas devem ser capazes
de armazenar vários valores em uma
mesma estrutura.

Variáveis compostas, também conhecidas como
array ou vetor, são variáveis que são capazes
de armazenar multiplos valores.

Ex.: a = [2, 9, 5]

No caso acima, temos um vetor a, que possui 3 elementos.
Um elemento de um vetor, é um par que agrupa o espaço
da memória, o valor (também conhecido como conteúdo)
 colocado dentro dele e o índice (também conhecido 
como chave ou posição).

Voltando ao exemplo acima, temos um vetor a, com
3 elementos. No índice 0 temos armazenado o valor 2. 
No índice 1 temos armazenado o valor 9 e
no índice 2 temos armazenado o valor 5.

Exemplo em JS:

let num = [5, 8, 4]

Num
 __________________
|  5  |  8  |  4  |
|____|_____|_____|
  0     1     2


num[3] = 6
num.push(7)

 ______________________________
|  5  |  8  |  4  |  6  |  7  |
|____|_____|_____|_____|_____|
  0     1     2     3     4

num.length

O num.length, no JavaScript, é um atributo que armazena
a quantidade de elementos que um array possuí.
No caso acima, o num.length é iguala 5. Pois o
vetor possuí 5 elementos.

num.sort()

Sort é um método de ordenação. Ele irá ordenar
o vetor e colocar ele em ordem crescente.

OBS.: O sort precisa de uma função como parâmetro
para ordenar NÚMEROS. Caso contrário, o sort
irá considerar o array como sendo um array de
strings e irá ordenar com base no Unicode.
Ou seja, se aparecer 300 e 4, o 4 virá depois
do 300 com base na ordem do Unicode.

Para que o sort ordene os números na ordem
crescente, é preciso passar como parâmetro
a função function(a,b) {return a-b}.

Para que o sort ordene números em ordem decrescente,
é preciso passar como parâmetro a função
function(a,b) {return b-a}

 ______________________________
|  4  |  5  |  6  |  7  |  8  |
|____|_____|_____|_____|_____|
  0     1     2     3     4

num.indexOf(x)

Retorna o índice onde o valor se encontra
no vetor. Caso o valor informado em x
não esteja no vetor, o método retorna
-1 para indicar que o valor não foi encontrado.
*/