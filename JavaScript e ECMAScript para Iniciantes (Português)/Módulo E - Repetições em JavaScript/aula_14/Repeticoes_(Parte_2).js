/*
Q01: O que faço se quiser fazer uma
determinada atividade acontecer
várias vezes?
R: Utilizo a estrutura de repetição,
também conhecida como laço ou iteração.
Nesta estrutura, as atividades
irão ser repetidas várias vezes,
até que a condição para a repetição
seja falsa.

Q02: Sabe diferenciar as estruturas
de condição e as estruturas de
repetição?
R: Sim, uma estrutura de condição
irá realizar um teste lógico e
então executar um bloco caso este
teste seja verdadeiro, ou não
executar o bloco caso seja falso.
Após isso seguirá o fluxo normal
de execução do programa.

Já uma estrutura de repetição irá
também realizar um teste lógico,
podendo este teste ser antes ou 
depois do bloco, após a execução
do bloco, ocorrerá um retorno
ao inicio da estrutura de
repetição, ou seja, ocorrerá
um loop. Em algum ponto
(inicio ou fim do bloco) será
realizado o teste lógico novamente
e caso seja verdadeiro irá
repetir o mesmo processo novamente.
Apenas saindo desta repetição
quando o teste lógico resultar
em falso, seguindo então o fluxo
normal de execução do programa.

Q03: Consegue dizer a diferença
entre as estruturas while e a do..while?
R: Sim, while irá realizar o teste lógico
no inicio, sendo considerada uma
estrutura de repetição com teste lógico no inicio.
Caso o teste seja verdadeiro, irá executar o
bloco e ao final retornar para mais um teste lógico.

Já a do..while irá realizar o teste lógico
no final, após o bloco.
Sendo considerada uma
estrutura de repetição com teste lógico no final.
Esta estrutura irá primeiro executar o bloco ao menos
uma vez, para depois realizar o teste lógico.
Se o resultado for verdadeiro, irá retornar para o
inicio da estrutura e executar novamente o bloco,
caso seja falso seguirá o fluxo normal do programa.

-----------------------------------------------------

- Estrutura de repetição com variável de controle.

Representada por um hexagono irregular. Neste hexagono,
são feitas três coisas, a inicialização, um teste lógico
e um incremento. Na primeira passagem ela faz a inicialização
e um teste lógico, sendo este teste verdadeiro, é executado
o bloco, feito o bloco ele irá automáticamente retornar.

Porém no momento do loop, ele irá realizar um incremento.
Com o incremento feito, é realizado o teste lógico novamente,
sendo verdadeiro, novamente o bloco será executado e o loop
será realizado novamente. E assim sucessivamente, até
que o teste lógico for falso. Encerrando o loop e seguindo
o fluxo normal de execução do programa.

for (inicio; teste; incr) {
   bloco 
}

var c = 1

while (c <= 10) {
    bloco
    c++ // c = c + 1
}

for (var c = 1; c <= 10; c++) {
    bloco
}

*/