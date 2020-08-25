/*
Primeiramente iremos definir, resumidamente, 
o que é cliente e servidor.

- Client x Server (Cliente x Servidor)

Primeiramente precisamos definir: O que é um Cliente?
Em termos de internet, um Cliente é qualquer aparelho
que acessa um arquivo de um servidor. Seja este aparelho
um celular, um desktop (computador de mesa), um notebook,
um laptop... Uma TV... Qualquer aparelho que consiga se
conectar com a internet pode ser considerado um Cliente.

Um Cliente utiliza serviços que são fornecidos por um
Servidor, este Servidor fornece dados para o uso do Cliente. 
Por exemplo no caso do youtube, você estaria utilizando 
os serviços dos Servidores, máquinas de alta potência, 
do youtube para poder assistir vídeos, estes vídeos, 
são dados que o Servidor do youtube fornece para o Cliente.
Obs.: Um Cliente pode acessar dados de multiplos servidores.

Para que o Cliente possa fazer o acesso dos dados do Servidor,
é necessário o uso de um Browser (Navegador).
O Cliente utiliza um Navegador, como por exemplo o Google Chrome,
para requisitar dados de um Servidor. 
Para requisitar estes dados, o Cliente deve digitar 
a URL, um nome que representa o *endereço* 
do Servidor na internet.
Este nome, esta URL, digitada irá para a infraestrutura
da internet, e o Cliente será redirecionado para o Servidor.

Existe uma variedade de tecnologias e nomenclaturas para
definir como a infraestrutura da internet funciona,
mas de forma resumida, se você digitar o nome, a URL,
do Servidor corretamente no navegador, 
você concerteza irá ser redirecionado para o Servidor desejado.

Este Servidor é similar aos Clientes, ele possui uma OS
(Operating System, também conhecido como SO - Sistema Operacional),
ele possui pastas, diretórios e arquivos.
Os arquivos são o que o Cliente está buscando. Podem estes serem
arquivos de fotos, textos, vídeos e na maioria das vezes são
documentos HTML.

Na hora que você solicita o arquivo ao Servidor, ele te envia
uma cópia do arquivo para o Cliente através do Navegador.
O Navegador irá a partir dai, começar a trabalhar para gerar
o efeito visual, o site, e toda a sua aparência para o Cliente.

De forma resumida, é assim que a internet funciona.
Temos Clientes que desejam arquivos que são enviados pelos
Servidores. Ou seja, temos tecnologias para Clientes e para
Servidores.

O JavaScript surgiu como uma tecnologia para Clientes,
hoje em dia ele também funciona para Servidores.
Porém este curso irá focar no uso do JavaScript para Clientes,
ou seja, iremos trabalhar o JavaScript como uma tecnologia
Client-Side (lado do Cliente), que é o forte do JavaScript.



Algo importante de se entender, juntamente com o JavaScript,
são as tecnologias relacionadas.

- Websites:
Websites, em sua grande maioria, são compostos por três
tecnologias Client-Side. Temos o HTML, responsável pelo
conteúdo, pela estrutura do site. O CSS, responsável pelo
design, pela aparência, do estilo do site. E temos o JavaScript,
responsável pelas integrações e interações.

Comandos da aula:
Clicando com a direita em um site, selecione "Inspecionar"
(Ou, pressione Ctrl+shift+I), para requisitar as DevTools.
Ferramentas que permitem que você inspecione o código
de um site.

Clicando nos três pontos que estão no topo a direita,
que são as opções de customização e controle,
você pode selecionar o modo de exibição das DevTools no Dock side.

Ainda nas opções de customização e controle, você pode selecionar
os settings (configurações) e descer com a barra de rolagem
na aba de preferências para desabilitar o JavaScript de um site.

// Gerou um popup no google com a mensagem.
alert('Olá, mundo!');

// Mudou a cor de fundo do site do google.
document.body.style.background = 'black';

// Mudou a cor da logo da google para preto e branco.
document.querySelector('img#hplogo').style.filter = 'grayscale(100%)';

// Sumiu com a logo da google.
document.querySelector('img#hplogo').style.visibility = 'hidden';
*/