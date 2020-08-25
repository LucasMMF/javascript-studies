/*
Q01: Já sabe organizar suas pastas com VSCode?
R: Sim, para abrir um projeto, basta abrir uma pasta (a escolha do desenvolvedor)
com a opção File->Open folder (alternativamente, pressione CTRL+K+O)
e utilizar esta pasta designada como a pasta do projeto.
Passando o mouse em cima da pasta raiz que você está, você pode criar
novas pastas e arquivos. Além deste método, também é possível clicar com a
direita do mouse para fazer o mesmo. Arrastando arquivos para dentro de uma
pasta, você consegue mover os arquivos para dentro da pasta selecionada.
O mesmo vale para outras pastas.

Q02: O Node.js está instalado no seu computador?
R: Sim, está instalado. O Node.js serve para permitir que o JavaScript seja
executado fora do navegador, de uma forma Server-Side.

Q03: Sabe diferenciar HTML5, CSS3 e JS dentro de um código?
R: Sim, HTML5 é responsável pelo conteúdo da página e é mantido dentro do head
e do body. O CSS3 é responsável pelo estilo da página, e é mantido ou em um
arquivo CSS (recomendável) ou em uma tag de estilo (style). E por fim o
JavaScript é responsável pela interação da página, e é mantido ou em um
arquivo JS (recomendável) ou em uma tag de script, que geralmente é localizada 
no fim da tag body do HTML5.

Q04: Sabe disparar alertas, confirmações e perguntas?
R: Sim. 
Para disparar alertas: window.alert('')
Para disparar confirmações: window.confirm('')
Para disparar perguntas:  window.prompt('')

- Declaração de variáveis
Ocorre da seguinte forma: var nome_da_variavel
Ex.:
var n1 = 5
var n2 = 8.5
var n3 = 15

Obs.: No JS moderno, também é possível utilizar let
let n1 = 5
let n2 = 8.5
let n3 = 15

No caso acima, estavamos declarando variáveis e também atribuindo valores a elas.
A variável n1 recebe 5, n2 recebe 8.5 e n3 recebe 15. Lembrando que um único =
na programação significa "recebe" e não o tradicional "igual" que estamos acostumados.
Também é possível apenas declarar as variáveis sem atribuir nenhum valor a elas.
Ex.:
var n1
var n2
var n3

No caso acima, elas não possuem nenhum valor definido.

Obs.: No JavaScript, = é recebe ou atribuição, == é igualdade ou seja, compara
dois elementos independentemente do tipo da variável deles. Exemplo:
2 == "2" é verdadeiro, pois mesmo que "2" seja uma string, o valor dos dois
elementos é o mesmo. Já === é igualdade estrita, onde você compara dois elementos
tanto no valor deles quanto no tipo da variável deles.
No caso, 2 === "2" é falso, pois mesmo que ambos os elementos possuam o valor 2
eles são de tipos diferentes.

Também poderiamos ter criado variáveis que aceitam um tipo diferente de dados:

var s1 = "JavaScript"
var s2 = 'Curso em Vídeo'
var s3 = `Guanabara`

Acima temos um exemplo de Strings, que são um tipo diferente dos tipos numéricos 
que vimos anteriormente. Podemos definir uma String de três maneiras no JavaScript.
Com aspas duplas (""), apóstrofe/aspas simples ('') ou crase (``). Existem diferenças
entre cada uma delas, elas serão abordadas ao longo do curso.

- Identificadores
O nome de uma variável é chamado de identificador, existem regras para a nomenclatura
de um identificador:
- Podem começar com letra, $ ou _ (difícil usar $ ou _, mas é possível).

- Não podem começar com números (ex.: 1S é inválido).

- É possível usar letras ou números (ex.: dado2 é válido).

- É possível utilizar acentos e símbolos no JavaScript.

- Não podem conter espaços (ex.: variavel a é inválido, variavel_a é válido).

- Não podem ser palavras reservadas da linguagem (ex.: var não pode ser identificador de variável).

Terminal e resultados no node.js:
Welcome to Node.js v12.16.3.
Type ".help" for more information.
> var idade = 18
undefined
> var salário = 1550.35
undefined
> var sexo = "M"
undefined
> idade
18
> salario
Uncaught ReferenceError: salario is not defined
> salário
1550.35
> sexo
'M'
> .exit

-----------------------------------------------------
Welcome to Node.js v12.16.3.
Type ".help" for more information.
> var n1 = 8
undefined
> var n2 = 5
undefined
> n1
8
> n2
5
> n1 + n2
13

- Dicas para escolher nomes de variáveis

- Maiúsculas e minúsculas fazem diferença. Se você criar uma variável
chamada a, por exemplo var a, e depois tentar chamar pela variável A,
o compilador irá acusar erro. Poís a variável definida foi o a minúsculo
e não o A maiúsculo. Ou seja, linguagens são CASE SENSITIVE, conseguem
distinguir maiúsculas e minúsculas de um identificador de uma variável.

- Tente escolher nomes coerentes para as variáveis. Não use n1 para nome,
n2 para endereço, n3 para telefone. Use nome para nome, end ou endereco para
endereço e tel ou telefone para telefone.

- Evite se tornar um "programador alfabeto" que utiliza apenas a, b, c, d, e, etc...
ou seja, apenas letras, como nome de variável. Também não se torne um
"programador contador" que utiliza apenas n1, n2, n3, n4, n5 como nome de variável.

- Tipos de dados

- number: 5, 18, -12, 0.5, -15.9, 3.14, 8.0
Que são os tipos numéricos.

Obs.: Os tipos acima, em outras linguagens de programação, são
divididos em dois tipos diferentes. Ambos numéricos, porém o fator que
define qual é qual é se ele possui ponto (ou virgula) ou não, ou seja,
se ele é um número decimal ou não. Com isso em mente, em outras linguagens
temos:

integers ou int (inteiros): 5, 18, -12
float (reais, decimais): -15.9, 3.14, 8.0

No JavaScript, ambos os tipos são Number, são tipos numéricos.

- string: "Google" 'JavaScript' `Maria`
Que são cadeias de caracteres.

- boolean: true, false
Que são verdadeiro e falso respectivamente, valores booleanos, ou lógicos.

Obs.: Em outras linguagens, 0 e 1 são falso e verdadeiro respectivamente.
No JavaScript, 0 e 1 também podem ser considerados falso e verdadeiro,
porém o tipo boolean é um tipo distinto de 0 e 1 e, portanto, não
contém 0 e 1 por si só. Numa comparação de 1 === true, o resultado
seria falso pois 1 é number e true é boolean.

Estes 3 tipos, number, string e boolean, 
são os três tipos primitivos primordiais no JS.

Porém o JS também possui muitos outros tipos primitivos, estes sendo:

number (Numérico)
    - Infinity (Infinito, valor interno do number)
    - NaN (Not a Number, valor interno do number)
string (cadeia de caracteres)
boolean (booleano/lógico)
null (nulo)
undefined (não definido)
object (objeto)
    - Array (vetor)
function

typeof - diz para você qual é o tipo da variável.

Terminal e resultados no node.js
Welcome to Node.js v12.16.3.
Type ".help" for more information.
> var n = 200
undefined
> n
200
> typeof n
'number'
> n = "Google"
'Google'
// Essa operação acima, de n = "Google" é valida no JavaScript, 
// pois não temos um tipo fixo de dados para uma variável, 
// todas são apenas "var" ou "let" ao invés de int, float, string.
// Em outras linguagens, isto não seria possível.
> typeof n
'string'
> typeof 6
'number'
> typeof 6.5
'number'
> typeof "6.5"
'string'
> typeof []
'object'
> typeof {}
'object'
> typeof function(){}
'function'
> typeof undefined
'undefined'
> typeof NaN
'number'
> typeof Infinity
'number'
> typeof null
'object'
*/