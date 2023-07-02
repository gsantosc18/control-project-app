# control-project-app
Projeto para desenvolvimento da matéria de Frameworks

[Visite a página no Github Pages](https://gsantosc18.github.io/control-project-app/)

## Qual é o tema da aplicação web referente ao projeto da disciplina?
Auxiliar no gerenciamento de projetos e suas atividades.

## Quais são as principais funcionalidades desta aplicação web a ser desenvolvida?
- Manter registros de projetos
  - Listar
  - Criar
  - Alterar
  - Apagar
- Manter registro de atividades
  - Listar
  - Criar
  - Alterar
  - Apagar

Os projetos terão os campos:
- Nome
- Descrição
- Data da Criação
- Data da última atualização

As atividades terão os campos:
- Nome
- Descrição
- Responsável
- Tempo estimado
- Situação: [Em Refinamento, A Fazer, Em Desenvolvimento, Em Testes, Em Homologação, Em Implantação, Concluído]
- Data de criação
- Data da última atualização

## Endereço de Deploy - GitHub Pages

https://gsantosc18.github.io/control-project-app/

## Protótipo

https://www.figma.com/file/yLtZelGU2UHTBwMLBgXFpb/Controle-de-Projetos?type=design&node-id=5%3A11&mode=design&t=eL8NGL2GwspgDr8S-1

## Checklist

- [x] Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- [x] Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- [x] Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- [x] Construir páginas web com o conceito de componentes.
- [x] Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- [x] Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- [x] Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- [x] Mapear componentes à rotas no módulo de rotas.
- [x] Criar navegação entre páginas por meio de rotas.
- [x] Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- [x] Validar campos do formulário com REGEX e apresentar os erros.
- [x] Desabilitar o botão de submit enquanto o formulário está inválido.
- [x] Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- [x] Cadastrar uma entidade no JSON Server.
- [x] Apresentar uma lista de dados com a diretiva estrutural ngFor.
- [x] Usar a diretiva ngIf
- [x] Formatar a apresentação de dados com Pipes.
- [x] Build e deploy da aplicação.

## Manual de execução
- Clonar o repositório com `git clone`
- Fazer checkout no branch `develop` que contém as modificações mais recentes
- Abrir o projeto no editor Visual Studio Code (VS Code)
- Abrir um terminal pelo VSCode ou qualquer terminal do seu Sistema Operacional apontando para o diretório raiz do projeto 
- Instalar as dependências contidas no `package.json`
  - Comando: `npm i`
- (Opcional) Instalar o JSON Server globalmente disponível em `https://www.npmjs.com/package/json-server`
  - Comando: `npm i -g json-server` 
  - É opcional porque a dependência já vem cadastrada no arquivo `package.json` para instalação local na pasta `node_modules`
- Executar a API Fake (JSON Server) via um dos seguintes comandos: 
  - Execução via script registrado no `package.json`: `npm run json:server:routes` 
  - Ou via Execução explícita: `json-server --watch db.json --routes routes.json`
- O comando para execução do JSON Server deve ser aplicado no diretório raiz do projeto, ou seja, que contém o arquivo `db.json` e `routes.json`.
  - Por padrão, a aplicação JSON Server executa no endereço `localhost:3000`    
- Abrir um novo terminal pelo VSCode e então executar o projeto Angular
  - Comando: `ng s -o`