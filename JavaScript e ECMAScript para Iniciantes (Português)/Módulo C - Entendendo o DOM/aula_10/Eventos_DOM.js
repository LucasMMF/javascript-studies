/*
Q01: O que significa a sigla DOM?
R: Significa Document Object Model, ele é um conjunto
de objetos, dentro do navegador, que vai dar acesso
aos componentes internos de um website. Sem o DOM,
teriamos muita dificuldade para poder acessar
os elementos de uma página.

Q02: Sabe montar a árvore DOM de um site simples?
R: Sim, ela começa da raiz, que dentro do navegador
é a window. Tudo dentro do JS está dentro de um elemento
chamado window (que é a janela do navegador). Dentro do
window, temos vários outros elementos. Como por exemplo
o location (localização do site, URL, página atual, 
página anterior, etc), document (documento atual sendo utilizado
no navegador) e history (guarda de onde você veio, para onde 
você vai, que facilita a navegação dentro do site) 
entre outros elementos.

Cada um desses elementos acima vai tendo elementos Child (filhos),
que herdam atributos e métodos dos pais mas que também possuem os 
seus próprios atributos e métodos.
Por exemplo, o elemento Document vai ter como Child o elemento html,
que é justamente a parte html do site. O próprio html em si, 
possui duas Children, o head e o body. E claro, no caso de head e body, 
eles também terão suas próprias Children, como no caso do head que 
possui  as tags meta, title, e etc. E no caso do body as tags div, h1, 
p e etc. No caso das tags, uma árvore DOM pode possuir multiplos 
elementos tags. Por exemplo, no site que criamos na aula anterior,
possuimos duas tags p. O elemento body portanto possui duas Children p,
dois elementos p que herdam de body. E as próprias tags podem possuir 
Child, um dos elementos p possui uma tag strong, essa tag strong, 
na árvore DOM, é um elemento Child de p.

Q03: O que são os elementos Parent e os elementos 
Child em uma árvore DOM?
R: Parent e Child são termos usados para explicar o relacionamento 
entre os nós da árvore DOM. Numa árvore, o nó que está no topo
absoluto é chamado raiz (ou nó raiz).
Cada nó da árvore (exceto o raiz), possui ao menos um nó 
Parent (pai). Cada nó pode possuir inúmeros nós Child.
Siblings (irmãos ou irmãs) são nós que possuem o mesmo Parent.
Elementos Child herdam atributos e métodos de elementos Parent.

Você é capaz de selecionar elementos na árvore DOM para poder
navegar entre os elementos da árvore. Para isso, é necessário
que você saiba quais são os nós Parents e quais são os nós Child,
para que assim, você possa navegar entre os nós.

Q04: Quais são os cinco principais métodos de selecionar
elementos DOM dentro do JS?
R: Por marca (tag), por ID, por nome, por classe e por seletor.
Se o método seletor estiver no plural, ele irá retornar
uma lista de nós. Se estiver no singular, ele irá retornar
um único nó.

-----------------------------------------------------

- Eventos DOM

Eventos são qualquer coisa que possa acontecer com um elemento,
por exemplo, eventos de mouse. Quando o mouse entra dentro de um
elemento, pode ser disparado um Evento mouseenter. Movendo o mouse
por dentro de um elemento, pode ser disparado durante a duração
do movimento o evento mousemove. Quando o mouse é pressionado
e segurado, pode ser disparado evento mousedown, 
ao soltar o botão do mouse, pode ser disparado o evento mouseup. 
E também temos o evento click, que é disparado após a ação completa
de pressionar e soltar o botão do mouse. E ao sair de dentro
do elemento com o mouse, pode ser disparado o evento mouseout.

-----------------------------------------------------

- Funções

Conjunto de códigos que vão ser executadas apenas quando um
evento ocorrer. Por exemplo, imagine que temos um bloco com
10 linhas. Essas 10 linhas não serão executadas automáticamente.
Digamos que este bloco apenas irá ocorrer quando for realizado
um click na div, ou seja, apenas quando for realizado este evento.

Para que isso ocorra, devemos colocar estas linhas de código
dentro de um bloco (delimitado por {}). Este bloco, devemos
nomear este bloco como uma function. Colocando a palavra 
reservada function antes do bloco. No JS, temos funções anônimas,
ou seja, funções sem nomes. Porém, para que um método possa funcionar
precisamos dar um nome a esta função, geralmente este nome é uma
ação que podemos realizar. E opcionalmente, podemos colocar dentro
dos parênteses alguns parâmetros, podem ser um ou vários.

Ex.:
function ação(param) {
    bloco
}
*/