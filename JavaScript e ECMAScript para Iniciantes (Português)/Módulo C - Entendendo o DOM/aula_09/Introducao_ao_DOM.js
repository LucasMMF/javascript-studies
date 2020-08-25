/*
Q01: Qual é a diferença entre usar =, == e === em
códigos escritos em JS?
R: A diferença entre =, == e === é que o = é um operador
de atribuição, ou seja, uma variável "recebe" um dado.
Exemplo: var x = 3. Neste caso, não significa que x é igual
a 3, mas sim que a variável x está recebendo e armazenando
o valor 3.

Já o operador == é o operador de igualdade, ele verifica
se dois valores são iguais. Porém ele não verifica
o tipo dos dados. Portanto, 5 == 5 é verdadeiro, tanto como
5 == '5' também é verdadeiro. No segundo exemplo,
mesmo que o os dois sejam de tipos de dados diferentes,
o primeiro 5 sendo um Number e o segundo sendo uma String,
eles ainda sim possuem o mesmo valor, que é 5.

Por fim o operador === é o operador de igualdade estrita,
ele também faz uma verificação de igualdade assim 
como o ==, porém ele também verifica se o tipo dos dados
são iguais. No caso do ===, a expressão 5 === '5' é
falsa, pois os dados possuem tipos diferentes.
Já a expressão 5 === 5 é verdadeira, pois ambos os dados
possuem o mesmo tipo e o mesmo valor.

Q02: Em uma mesma expressão, temos os operadores || e
&&. Quem eu resolvo primeiro?
R: Na ordem de precedência, primeiro é resolvido o &&
para depois resolver o ||.

Q03: Sabe usar o operador ternário para colocar um entre
dois valores em uma variável?
R: Sim, você realiza o teste lógico primeiro e depois
designa um valor para caso o resultado seja verdadeiro, 
por fim um outro valor para caso o resultado seja falso.
Exemplo:
compra = compra >= 300.00 ? compra - compra * 0.15 : compra

No exemplo acima, se a compra for maior ou igual a
300 reais, é aplicado um desconto de 15% sobre a
compra, caso contrário o valor da compra continua
o mesmo.

-----------------------------------------------------

- O que é DOM?

É um acrônimo para Document Object Model. Um modelo de
objetos para documentos. Resumidamente é um conjunto de
objetos dentro do seu navegador que dá acesso aos
componentes internos do seu website. Ele não funciona
no node.js, ele apenas está presente quando um código
JavaScript é executado dentro do navegador.

- Árvore DOM:

A árvore DOM do nosso código html atual é:

            [window]
          /    |    \
[location][document][history]
              |
            [html]
          /       \
    [head]         [body]
   /      \          |
[meta]    [title]    |
                     |
                   /  \-----------
                 / |   \         |
               /   |    \        |
             [h1] [p]    [p]   [div]
                          |
                          |
                      [strong] 

- Selecionando:

Você pode selecionar elementos da árvore DOM para
poder navegar através dela.

por Marca    -> getElementsByTagName()
por ID       -> getElementByID()
por Nome     -> getElementsByName()
por Classe   -> getElementsByClassName()
por Seletor  -> querySelector() / querySelectorAll()

*/