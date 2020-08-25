/*
Q01: Sabe mudar a cor de fundo
de um site dinamicamente, usando JS?
R: Sim, podemos por exemplo adquirir
a hora atual do computador do cliente
e utilizar esta hora numa condição composta
para alterar dinamicamente a cor de fundo.
Alterando o valor de document.body.style.background
dentro do bloco da condição.

Q02: Consegue inserir uma imagem
dentro do seu site sem ter a tag
<img> previamente criada?
R: Sim, utiliza-se o método
createElement, de documento, passando o
parâmetro de 'img' para a criação da tag.
Após isso, é necessário definir os atributos
da img e por fim utilizar o comando
appendChild, passando o objeto da tag img
criado, para que seja incluída a tag
no documento HTML.

Q03: Já treinou bastante o uso de
condições simples, compostas,
aninhadas e múltiplas?
R: Sim!

-----------------------------------------------------

- Função ComerPizza()

function comerPizza() {
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
}

- Programar é...

Utilizar um algoritmo para sair de um ponto A
e chegar até um ponto B. Para isso, utilizamos
vários meios, várias estruturas de controle.

- Estruturas de controle

- Sequências

Viajamos do ponto A para o ponto B executando
tarefas SEQUENCIALMENTE até chegarmos ao objetivo.

- Condições

Viajamos do ponto A para o ponto B executando 
tarefas até chegarmos a um DESVIO. Neste desvio
é testada uma CONDIÇÃO, este teste lógico possui
duas possibilidades, verdadeiro ou falso. De acordo
com este resultado, é executado um bloco ou outro.
E depois, retornamos ao fluxo normal de execução
do programa.

- Repetições/Laços/Iterações

Uma repetição funciona similarmente como uma
condição. Ele irá testar uma expressão. Assim
como as condições, este teste poderá ser verdadeiro
ou falso. Porém o comportamento é um pouco diferenciado.
Se o teste lógico for verdadeiro, ele executará
o bloco porém após isso ele não irá seguir imediatamente
o fluxo normal de execução até o fim do programa.

Ao invés disso, ele irá retornar, irá fazer um loop, um
laço, uma repetição. Voltando para a expressão ele testará
novamente ela. Caso ela seja verdadeira novamente, ele irá
executar o mesmo bloco novamente e irá realizar outro loop
de volta para a expressão. Novamente irá testar a expressão,
se for verdadeira, irá mais uma vez executar o bloco e então
retornar a expressão. E assim sucessivamente enquanto a
condição for verdadeira.

A partir do momento que a expressão não for mais verdadeira
o loop é quebrado e o fluxo normal do programa é seguido novamente.

Para executar o processo escrito acima, utilizamos:

while (condição) {
    bloco
}

function comerPizza() {
    while (temFatia()) {
        comerFatia()
    }
}

A estrutura while é classificada como
estrutura de repetição com teste lógico no início.
Isso pois ele realiza o teste, sendo verdadeiro,
ele executa o bloco.

Porém existem outras possibilidades, ao invés de realizar
o teste lógico no início, podemos realizar a estrutura
ao contrário. Primeiro executando o bloco, depois realizando
o teste lógico.

do {
    bloco
} while (condição)

E estas são as duas primeiras estruturas de repetição.
A while é a estrutura de repetição com teste lógico no início,
enquanto que a do-while é a estrutura de repetição com
teste lógico no final.

tl;dr:

- Estrutura de repetição com teste lógico no início:
while (condição) {
    bloco
}

- Estrutura de repetição com teste lógico no fim:
do {
    bloco
} while (condição)

*/