/*
Q01: Como é possível guardar o valor digitado em um
prompt() dentro de uma variável?
R: Fazendo uma atribuição do valor para uma variável
utilizando o sinal de igual. Por exemplo:

var nome = window.prompt('Qual é o seu nome?')

ou

var idade
idade = window.prompt('Quantos anos você tem?')

Q02: Como fazer com que um número digitado em um
prompt() possa ser usado em cálculos?
R: A função prompt() retorna uma String. Portanto,
para com que esse valor possa ser utilizado em cálculos,
é necessário transformá-lo em um dado do tipo Number,
seja ele Inteiro ou Real.

Para isso utilizamos o comando de parse:

Number.parseInt(), para converter para Inteiro.
Number.parseFloat(), para converter para Real.
Number() para permitir que o JS decida se vai converter
para Inteiro ou para Real.

Q03: Como transformar um texto todo para letras
MAIÚSCULAS?
R: Utilizando a função .toUpperCase() da seguinte maneira:

s.toUpperCase(), onde s é a String que irá ser transformada
para letras maiúsculas.

Q04: Como mostrar um número formatado como um
valor monetário?
R: Utilizando a função .toLocaleString() e informando
os parâmetros. Por exemplo:

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

No exemplo acima, o número será formatado no formato da lingua
Portuguesa e com a formatação da nossa moeda, o Real.
Ou seja, R$ [número formatado].

-----------------------------------------------------

- Operadores:

Aritméticos
Atribuição
Relacionais
Lógicos
Ternário


- Aritméticos

5  +  2 -> 7   - soma
5  -  2 -> 3   - subtração
5  *  2 -> 10  - multiplicação
5  /  2 -> 2.5 - divisão real
5  %  2 -> 1   - resto da divisão inteira
5  ** 2 -> 25  - potência

>>>ATENÇÃO<<<

Assim como na matemática, a operadores aritméticos possuem
uma ordem de precedência. Na operação 5 + 3 / 2, a divisão
tem precedência sobre a soma e, portanto, será executada
primeiro. Depois será feita a soma. Ou seja, o resultado
de 5 + 3 / 2 não é 4, mas sim 6.5.

-----------------------------------------------------

Welcome to Node.js v12.16.3.      
Type ".help" for more information.
> 5 + 2
7
> 9 % 2
1
> 9 / 2
4.5
> 5 + 3 / 2
6.5
> 5 + / 2
5 + / 2
    ^

Uncaught SyntaxError: Invalid regular expression: missing /

-----------------------------------------------------

No caso acima foi demonstrado um erro de SINTAXE. O último
comando foi escrito de maneira errada com relação a sua 
sintaxe, por isso o JS acusou erro. Porém existem
erros de sintaxe e erros de lógica/aritmética.

Se você quiser a divisão de 3 por 2 e a soma do resultado
com 5, a expressão 5 + 3 / 2 está correta.
Porém, se você quer a média da soma de 5 + 3, então a expressão
5 + 3 / 2 está logicamente incorreta.

Supondo que você queira a média da soma de 5 + 3 com a
mesma equação, uma solução para isso seria:

(5 + 3) / 2

Esta solução é a mesma solução aplicada na matemática.
Os parênteses possuem ordem de precedência maior que qualquer
outro operador. Tudo que estiver dentro do parentêses será
executado primeiro para que, depois, seja executado o que
está fora do parênteses.

> 5 + 3 / 2
6.5
> (5 + 3) / 2
4

-----------------------------------------------------

- Ordem de precedência dos operadores aritméticos:

1 - ()
2 - **
3 - * / %
4 - + -

Caso operadores com o mesmo grau de precedência estejam
na mesma expressão, a ordem de execução para
estes operadores será da esquerda para a direita.

-----------------------------------------------------

- Atribuição Simples

var a = 5 + 3 (variável a recebe o resultado de 5 + 3 = 8)
var b = a % 5 (variável b recebe o resultado de a % 5 = 3)
var c = 5 * b ** 2 (variável c recebe o resultado de 5 * b ** 2 = 45, onde b ao quadrado é executado antes da multiplicação com 5).
var d = 10 - a / 2 (variável d recebe o resultado de 10 - a / 2 = 6, onde a / 2 é executado primeiro)
var e = 6 * 2 / d (variável e recebe o resultado de 6 * 2 / d = 2, neste caso todos os operadores estão no mesmo grau de precedência, portanto a execução é feita da esquerda para a direita.)
var f = b % e + 4 / e (variável f recebe o resultado de b % e + 4 / e = 3, neste caso, b % e é executado primeiro, seguido de 4 / e, terminando com a soma dos dois resultados)


> var a = 5 + 3
undefined
> a
8
> var b = a % 5
undefined
> b
3
> var c = 5 * b ** 2
undefined
> c
45
> var d = 10 - a / 2
undefined
> d
6
> var e = 6 * 2 / d
undefined
> e
2
> var f = b % e + 4 / e
undefined
> f
3

-----------------------------------------------------

- Auto-atribuições

var n = 3
n = n + 4
n = n - 5
n = n * 4
n = n / 2
n = n ** 2
n = n % 5

> var n = 3
undefined
> n
3
> n = n + 4
7
> n = n - 5
2
> n = n * 4
8
> n = n / 2
4
> n = n ** 2
16
> n = n % 5
1

- Simplificando

n += 4
n -= 5
n *= 4
n /= 2
n **= 2
n %= 5

As simplificações acima apenas são válidas para casos
onde está ocorrendo uma auto-atribuição, ou seja,
onde uma variável recebe o valor dela mesma após uma
operação. Funciona para n = n + 4, porém não funcionaria
se fosse n = x + 4, pois x não é a própria variável n.

> var num = 8
undefined
> num
8
> num += 2
10
> num
10
> num %= 2
0
> num = 3
3
> num **= 2
9

>>>Utilizando com os exemplos anteriores...<<<
> var num = 3
undefined
> num
3
> num += 4
7
> num -= 5
2
> num *= 4
8
> num /= 2
4
> num **= 2
16
> num %= 5
1

>>>>>>>Obs.:<<<<<<<
num = x + 2 não pode ser simplificado, porém,
num = num + x pode, o mesmo vale para os outros operadores.

> var x = 2
undefined
> num *= x
2

Isso porque o que não é válido é usar a simplificação
dessas operações aritméticas para expressões que não
são auto-atribuições, ou seja, onde a própria variável não
participa da expressão. É necessário que a variável
participe da expressão para que sejam feitas essas
simplificações.

-----------------------------------------------------

- Incremento

var x = 5
x = x + 1 -> x += 1 -> x++
x = x - 1 -> x -= 1 -> x--

> var n = 10
undefined
> n
10
> n++
10
> n
11
> n--
11
> n
10
> n
10
> ++n
11
> --n
10

*/