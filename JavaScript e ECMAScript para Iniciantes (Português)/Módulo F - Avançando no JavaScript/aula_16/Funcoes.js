/*
Q01: Conseguiu simplificar seus códigos com o
uso de Array?
R: Tranquilamente!

Q02: Sabe colocar um array em ordem usando
apenas uma chamada de função?
R: Sim, utilizando a função sort() em um array,
porém lembrando que o sort() sem passagem de
parâmetros vai ordenar como se o vetor fosse
com base na tabela Unicode. Para ordenar
números de ordem crescente, deve-se passar
a função function(a,b) {return a-b} como
parâmetro ou a função function(a,b) {return b-a}
caso você queira ordenar em ordem decrescente.

Q03: Lembra como disparar uma função simples
quando apertamos um botão?
R: Sim! Utilizando onclick dentro da tag do botão html com chamada
da função desejada ou adicionando um "ouvinte de eventos"
(addEventListener) no elemento DOM.

Q04: Quer aprender mais sobre funções?
R: SIM! Sempre!
-----------------------------------------------------

- Funções

Toda função precisa ter uma CHAMADA. Essa chamada
pode ocorrer de forma verbalizada ou automatizada.
Faz parte da chamada da função a passagem de 
PARÂMETROS de entrada, aonde você informa certos
valores que serão necessários durante a execução
da função.

Toda a função também possuí uma AÇÃO, que são
os passos, os comandos, necessários para retornar
um resultado. E como já mencionado, após o fim das
ações da função, ocorre um RETORNO com o resultado
esperado.

Nem todas as funções precisam de parâmetros, bem
como nem todas as funções precisam retornar algum
valor.

- Definição técnica:

Funções são ações executadas assim que são
chamadas ou em decorrência de algum evento.

Uma função PODE receber parâmetros
e retornar um resultado.

Exemplos:

function ação() {
    bloco sem retorno
}

A função acima é completamente válida,
ela apenas não recebe nenhum parâmetro,
nem retorna nenhum valor. Mas ela pode sim
ser chamada.

function ação(param) {
    bloco
    return res
}

Agora, já a função acima, pede parâmetros
e também retorna um resultado.

ação(5) - Chamada da função acima.
A passagem do 5 na chamada da função ação
é uma passagem de parâmetro. O 5 neste caso é
chamado de parâmetro real. O parâmetro dentro
dos parênteses é chamado de parâmetro formal.

Exemplo 2:

function parimp(n) {
    if ((n % 2) == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimp(11)
*/