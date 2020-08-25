/*
Q01: Para que serve o operador % em JS? Seria para
calcular porcentagem?
R: O operador % serve para obter o resto de uma
divisão inteira.

Q02: 6 + 4 / 2 é igual a 5 ou 8?
R: 4 / 2 será executado primeiro, em seguida
teremos a soma de 6 com o resultado da divisão.
4 / 2 = 2 + 6 = 8. A expressão acima é igual a 8.

Q03: Se uma variável n está valendo 10 e executamos um
n += 5, qual será seu novo valor?
R: n += 5 é o mesmo que n = n + 5, ou seja,
estamos somando 5 com o valor que n já possui, que
neste caso é 10. Portanto, o novo valor de n
será igual a 15.

Q04: Para que servem os operadores ++ e --?
R: ++ e -- são operadores de incrementação e
decrementação respectivamente. Eles somam ou
subtraem 1 de uma variável. Por exemplo,
se temos n = 21, e realizarmos o comando n++,
n passará a valer 22, pois foi adicionado 1 a n.
Se, após isso, realizarmos n--, n voltará a valer 21, 
pois foi subtraido 1 de n.

Ou seja, n++ é a mesma coisa que n = n + 1
e n-- é a mesma coisa que n = n - 1.

-----------------------------------------------------

- Relacionais:

5  >  2 -> true
7  <  4 -> false
8  >= 8 -> true
9  <= 7 -> false
5  == 5 -> true
4  != 4 -> false

Welcome to Node.js v12.16.3.      
Type ".help" for more information.
> 5 > 2
true
> 8 < 4
false
> var a = 8
undefined
> var b = 15
undefined
> a > b
false
> a < b
true
> a <= b - 10
false
> a == b
false
> a != b
true
> preço = 250.30
250.3
> idade = 24
24
> curso = 'JavaScript'
'JavaScript'
> n1 = 21
21
> n2 = 33
33
> preço >= 200.50 // O preço é maior ou igual a 200.50?
true
> idade < 18 // A idade é menor do que 18?
false
> curso == 'JavaScript' // O curso é igual a JavaScript?
true
> n1 != n2 // n1 é diferente de n2?
true

Obs.: Quando temos operadores relacionais e aritméticos
numa mesma expressão (ex.: a <= b - 10), primeiro
executamos os operadores aritméticos para depois
executarmos os operadores relacionais.

- Identidade:

5 ==   5    -> true
5 ==  '5'   -> true

// Operador de identidade ou igualdade estrita
5 === '5'   -> false
5 ===  5    -> true

> 5 == 5
true
> 5 == '5'
true
> var x = 5
undefined
> var y = '5'
undefined
> typeof(x)
'number'
> typeof(y)
'string'
> x == y
true
> x === y
false
> x != y
false
> x !== y
true

-----------------------------------------------------

- Lógicos:

!   -> negação
&&  -> conjunção  (e)
||  -> disjunções (ou)

- Negação:

  -> true  -> false
!
  -> false -> true


- Conjunção:

true       true   -> true
true       false  -> false
false  &&  true   -> false
false      false  -> false


- Disjunção:

true       true   -> true
true       false  -> true
false  ||  true   -> true
false      false  -> false

> var a = 5
undefined
> var b = 8
undefined
> true && false
false
> true && true
true
> false || false
false
> true || false
true
> true || true
true
> !true
false
> !false
true
> a > b && b % 2 == 0
false
> a <= b || b / 2 == 2
true

Obs.: Quando temos operadores lógicos, relacionais e
aritméticos numa mesma expressão (ex.: a > b && b % 2 == 0), 
primeiro executamos os operadores aritméticos para depois
executarmos os operadores relacionais e por fim executarmos
os operadores lógicos.

Obs. 2: Caso !, && e || estejam na mesma expressão,
a ordem de execução é primeiro a negação (!), depois a
conjunção (&&) e por fim a disjunção (||).

> var idade = 24
undefined
> var estado = 'RJ'
undefined
> var salario = 10000
undefined
> var sexo = 'M'
undefined
// A idade está entre 15 e 17?
> idade >= 15 && idade <= 17 
false
// O estado é RJ ou SP?
> estado == 'RJ' || estado == 'SP'
true
// O salário é acima de 1500 e não é homem?
> salario > 1500 && sexo != 'M'
false

- Precedência:

1 - () ** / ...
2 - > < >= ...
3 - !
4 - &&
5 - ||

Relembrando...
- Ordem de precedência dos operadores aritméticos:

1 - ()
2 - **
3 - * / %
4 - + -

-----------------------------------------------------

- Ternário:

teste ? true : false

teste = teste lógico qualquer.
true = o que acontece se o resultado for verdadeiro?
false = o que acontece se o resultado for falso?

média >= 7.0 ? "Aprovado" : "Reprovado"

> var media = 5.5
undefined
> media > 7 ? 'APROVADO' : 'REPROVADO'
'REPROVADO'
> media += 3
8.5
> media
8.5
> media > 7 ? 'APROVADO' : 'REPROVADO'
'APROVADO'

> var x = 8
undefined
> var res = x % 2 == 0 ? 5 : 9
undefined
> x
8
> res
5
> var idade = 19
undefined
> var r = idade >= 18 ? 'MAIOR' : 'MENOR'
undefined
> r
'MAIOR'

Obs.: O operador ternário sempre será o ultimo a ser
executado numa expressão.

*/