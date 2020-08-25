/*
Q01: Consegue citar três eventos que podem
acontecer com elementos DOM de um site?
R: Primeiro um exemplo de evento com mouse,
o mouseenter, onde se o mouse entrar em um
elemento, é disparado um evento.

Segundo, um exemplo de evento de foco,
o focus, onde é disparado um evento quando
um elemento entra em foco.

E por último, um exemplo de evento de teclado,
o keydown, onde é disparado um evento quando
uma tecla qualquer do teclado é pressionada.

Q02: O que é uma função? Como criar funções em JS?
R: É um conjunto de código que apenas é executado quando
algum tipo de evento ocorrer. No JS, é necessário ter
um bloco (delimitado por {}), colocando a palavra reservada
function antes do bloco, e então dar um nome a esta função,
este nome sendo algum tipo de ação que esta função irá realizar.
Com a opção, também, de passar parâmetros para esta função,
dentro dos parênteses.

Ex.:
function ação(param) {
    bloco
}

Q03: Sabe como pegar os valores de caixas de
texto e fazer cálculos com eles?
R: Primeiramente, você irá selecionar as caixas de texto
através de um método seletor (getElementById, querySelector, etc).
Com os elementos selecionados, você irá pegar os value deles e irá
atribuir estes valores a variáveis. No caso, como é uma questão
de cálculos com valores numéricos, é necessário converter
os valores dos elementos para Number antes de atribuir 
estes valores as suas respectivas variáveis.

Para converter, pode-se usar Number() ou Number.parseInt() ou
Number.parseFloat(), dependendo do tipo de cálculo que você
irá realizar.

Após ter convertido os valores para números, é possível realizar
cálculos com eles sem nenhum problema.

-----------------------------------------------------

- Sequências
Códigos sequênciais executam um código após o outro,
de cima para baixo, da esquerda para a direita.

- Condições em JS (parte 1)
Condições, também conhecidas como desvio condicional,
fazem parte dos fundamentos da programação.
Todas as linguagens de programação ditas imperativas
(linguagens mais populares na atualidade, 2019-2020),
possuem vários tipos de condições e o JS também possui
este tipo de estrutura.


Uma condição pode ser representada com um losango,
que demonstra uma bifurcação entre dois caminhos.

Ex.:

         V------<>------V
      [true]           [false]
        |                 |
        ------->()<-------
                |
                |
                |
                V

Após um dos lados serem executados, eles se
encontrarão novamente e continuarão o fluxo
de execução do programa.

Para representar a estrutura acima no JS
utilizaremos:

* A palavraa if com uma (condição), que significa "se," 
é o mesmo que o losango acima.

* Um bloco, que é representativo do retângulo true (verdadeiro).

* A palavra else, que significa "Se não," que seria o caminho
alternativo do losango acima.

* Outro bloco, que é representativo do retângulo false (falso).

-----------------------------------------------------

- Tipos de condição

Condição simples:

if (condição) {
    true
}

Condição composta:

if (condição) {
    true
} else {
    false
}

-----------------------------------------------------

- Desafio:

Recriar o exercício 9 em forma de site!

*/