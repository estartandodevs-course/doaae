# Documentação DoaAê!

# Nossa Stack

<img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>

## Como acessar

- [Produção](doaae.netlify.app/)

### `yarn start`

Executa o projeto em modo de desenvolvimento.
Abre [http://localhost:3000](http://localhost:3000) para ver o projeto no navegador.

A página vai recarregar quando você salvar as alterações no código.\
Você também consegue ver os erros de código no console.

### `yarn build`

Constrói a aplicação na pasta `build`.\

## Sumário
- Aplicação DoaAê!
  * Fluxo da Aplicação
      - 1. Splashscreen
      - 2 Formulário de Login
      - 3. Formulário de Cadastro
      - 4. Fluxo do doador
        * 4.1 Tela Home
        * 4.2 Tela de resultados de busca
        * 4.3 Tela de navegação pelo mapa
        * 4.4 Perfil da instituição
        * 4.5 Formulário de agendamento de doação
      - 5. Fluxo da instituição
        * 5.1 Tela Home

---

# Aplicação DoaAê!

Este projeto envolveu a criação de um sistema web para solucionar o problema decorrente da falta de comunicação entre as partes envolvidas no processo de doação. Ao realizarmos uma pesquisa de opinião, ficou notável a alta complexidade do fluxo de doação que algumas instituições beneficentes empregam. Muita das vezes, o pouco contato entre o doador e a instituições acarreta na desistência da doação antes mesmo do doador entrar em contato com a instituição.

Sabendo disso, buscou-se otimizar o processo de agendamento de doação e o contato entre doador e instituição. Através de uma interface intuitiva e simples de usar, o usuário pode pesquisar por uma instituição cujo foco de ações condiz com o objeto de doação do doador. E então, visitando o perfil da instituição, o usuário poderá saber mais sobre a instituição, ver as ações que aquela instituição já realizou e preencher um formulário agendar para agendar uma doação.

Da outra parte, a instituição pode visualizar quais doadores agendaram uma doação e entrar em contato com eles. Além disso, a instituição também pode cadastrar novas ações para atualizar o feed do perfil.

---

## Fluxo da Aplicação
#### 1. Splashscreen
A Splashscreen é a tela de primeiro contato do usuário com a aplicação do DoaAê!. Nela são exibidos o logotipo do projeto e algumas informações importantes para cativar o usuário. Esta tela é exibida durante o carregamento da aplicação e é exibida por no mínimo 5 segundos.

#### 2 Formulário de Login
O formulário de Login é uma tela onde o usuário é requisitado a inserir suas credenciais para acessar sua conta. Dois inputs de texto são exibidos com o rótulo de "email" e "senha", e um link para redefinição de senha caso o usuário não se lembre dela. Há também dois botões, um para submeter o formulário e outro para visualizar as instituições como convidado. Este último botão redireciona o usuário para a tela Home, mas sem os recursos que um usuário *logado* teria, ou seja, o usuário que entrou como convidado não tem acesso ao painel de edição de perfil, tampouco pode realizar um agendamento com alguma instituição. Suas ações são restritamente de busca e visualização de instituições cadastradas.
Há também um link para a tela de cadastro, caso o usuário ainda não esteja registrado no DoaAê!

#### 3. Formulário de Cadastro
O formulário de cadastro consiste em duas etapas: primeiro define-se o tipo de usuário que está realizando o cadastro, e então são solicitados seus dados. Isso acontece pelo fato de que os dados solicitados para o cadastro de usuário comum e de instituição são diferentes.
Por conta disso, na tela do formulário de cadastro há dois cards e um texto solicitando que o usuário selecione o card que condiz com seu tipo de uso no aplicativo: como doador ou como instituição. Cada card contém uma lista de ações que cada tipo de usuário realiza dentro do DoaAê! para facilitar o entendimento do usuário.
Após escolhido o tipo de usuário, o sistema exibe um formulário de cadastro para finalizar o registro, alertando ao usuário caso algum input seja inserido de forma incorreta, como por exemplo, caso o campo de senha e de confirmação de senha difiram entre si.

#### 4. Fluxo do doador
##### 4.1 Tela Home
A tela Home do doador exibe um *header* padrão com o nome da página, um botão para *deslogar* e um ícone com sua foto de perfil que redireciona para a tela onde o usuário pode alterar seus dados e adicionar uma foto de perfil
A tela também possui um input de busca, onde o usuário poderá realizar uma busca por instituições baseado no nome delas.
Há um botão que redireciona o usuário à tela de navegação pelo mapa, onde o usuário poderá encontrar as instituições que estão próximas à ele ou navegar pelo mapa para encontrar outras instituições.
Por fim, há uma lista de botões com as categorias de instituições. Estes botões redirecionam o usuário para a mesma tela que o input de busca, mas cada botão realiza uma filtragem baseado em sua categoria, podendo ser, por exemplo, roupas, alimento, dinheiro, etc.

##### 4.2 Tela de resultados de busca
Como dito anteriormente, esta tela exibe os resultados das buscas e das filtragens realizadas na tela Home. O sistema da DoaAê! filtra no seu banco de dados as instituições cadastradas cujas categorias ou nome condiz com os filtros aplicados pelo usuário.
Nesta tela são exibidos diversos cards, cada um contendo informações básicas de cada instituição como seu nome, suas categorias de doação, seu endereço e seus dias de funcionamento.
Há também uma *badge* que cada card pode exibir caso a instituição seja verificada pelo DoaAê!. Isso foi implementado a fim de evitar fraudes e golpes, onde uma instituição recém cadastrada venha a se passar por outra ou tentar aplicar algum golpe nos usuários. Cada instituição poderá solicitar sua verificação para o DoaAê! e, caso seja aceita, seu card exibirá uma badge de "verificado", confirmando ao usuário que aquela instituição é confiável.

##### 4.3 Tela de navegação pelo mapa
Nesta tela, o usuário tem acesso à um mapa mostrando as instituições próximas à sua localidade. Assim como em outras aplicações, o usuário poderá navegar pelo mapa e encontrar outros "pins" indicando outras instituições.
Ao clicar em um dos "pins", é exibido um modal contendo as mesmas informações que o usuário receberia na tela de resultados de busca. E então, o usuário pode clicar no botão para visitar o perfil da instituição e conhecer melhor sobre ela.

##### 4.4 Perfil da instituição
O perfil da instituição é uma tela onde o usuário doador entenderá melhor do funcionamento daquela instituição e verá suas últimas ações, seu endereço, seus meios de contato, etc.
Há na tela, uma capa, uma foto de perfil, o nome da instituição, suas categorias e sua avaliação. E então, há dois campos de texto contendo o endereço da instituição e um breve texto contendo mais informações sobre a história ou a missão e valores da instituição.
Então, são mostradas ao usuário as três últimas ações que a instituição realizou e um link para o usuário visualizar outras ações mais antigas. Cada card de uma ação carrega o título da ação, uma foto dela e um botão para ver mais. Ao clicar nesse botão, são mostradas mais informações sobre aquela ação.
Há também um card perguntando se o usuário deseja agendar uma doação com aquela instituição com um botão que redireciona para o formulário de agendamento. E por fim, no *footer* da página, há mais informações para contato com aquela instituição

##### 4.5 Formulário de agendamento de doação
O formulário de agendamento é a última etapa do *golden path* do DoaAê!, nele o usuário é solicitado a inserir alguns dados informando o tipo de doação, alguns detalhes sobre a doação, se ele deseja compartilhar o seu número de telefone para posterior contato da instituição e a data em que ele deseja levar a doação.
Após preencher o formulário, o usuário então clica no botão e o submete, sendo levado à tela de conclusão, onde ele poderá retornar à tela Home.

