<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autor">Autor</a> • 
</p>

## 💻 Sobre o projeto

<div id="-sobre-o-projeto">

Esse é um projeto desenvolvido para a etapa de teste da vaga de Front End Júnior para a **[SGE Tecnologia](https://www.linkedin.com/company/sge-tecnologia/about/).

O objetivo é avaliar a capacidade de lidar com multiplas requisições, organizar dados de fontes assíncronas e trabalhar com validações de formulários complexos. 

---

## ⚙️ Funcionalidades

<div id="-funcionalidades">
  
- [x]Crie um aplicativo react com um menu superior contendo 2 links: "Lista de gatos" e "Formulário".
  - [x] O link "Lista de gatos" deve direcionar a aplicação para uma rota que:
      - [x] Deve requisitar uma lista de tags no endereço: https://cataas.com/api/tags.
      - [x] As tags deverão ser exibidas em forma de cards expansíveis.
      - [x] No título de cada card deve aparecer o nome da tag.
      - [x] Quando clicar no titulo do card, o corpo dele deve aparecer de forma a se expandir abaixo do título..
      - [x] Dentro do corpo do card deve aparecer uma lista dos ids obtidos como resposta do endereço https://cataas.com/api/cats, contendo a tag do card selecionado.
  
  - [x]O link "Formulário" deve direcionar a aplicação para uma rota que:
      - [x] Exibe um formulário de cadastro em 3 etapas
        - [x] A primeira etapa deve solicitar:
          - [x] Email (obrigatório)
          - [x] Senha (obrigatório)
          - [x] Confirmação de senha (obrigatório)
        - [x] A segunda etapa deve solicitar:
          - [x] Nome (obrigatório)
          - [x] Sobrenome (obrigatório)
          - [x] Data de Nascimento
        - [x] A terceira etapa deve solicitar:
          - [x] Endereço Completo (Obrigatorio)
      - [x] As etapas devem ser mostradas uma de cada vez, com abas para que o usuário alterne livremente entre elas
      - [x] Cada etapa precisa necessariamente ser escrita em um React Component separado
      - [x] Em cada etapa deve haver um botão de avançar para a próxima etapa
      - [x] Em todas as estapas o botão de enviar deve estar visível, mas ficará desabilitado até que todo o cadastro das 3 abas esteja concluído
      - [x] Caso haja algum erro de formulário em alguma etapa, a aba daquela etapa deve ter um indicador visual de erro
      - [x] Quando preencher uma etapa corretamente, a aba daquela etapa deve ter um indicador visual de concluída
      - [x] Quando todas as etapas forem preenchidas corretamentes e o usuário clicar em "enviar", deve aparecer uma modal de confirmação de sucesso na tela.

---

## 🚀 Como executar o projeto

<div id="-como-executar-o-projeto">

Antes de rodar o projeto é preciso instalar algumas ferramentas. Caso você já tenha instalado pode pular a etapa de pré-requisitos.

### <u>Pré-requisitos</u>:

Antes de começar, é preciso ter instalado as seguintes ferramentas:

- Editor de códigos:

  [VSCode](https://code.visualstudio.com/)

- Ferramenta de versionamento de código:

  [GIT](https://git-scm.com)

- Manipulador de pacotes:

  [NPM](https://www.npmjs.com/)

### <u>Rodar a aplicação</u>:

&nbsp;

```bash

# Abra seu terminal e digite para abrir o VSCode
  code

# Abra a pasta onde vai ficar o projeto
# Clone este repositório
$ git clone https://github.com/ASMThiago/TestTecnicoSGE-FrontEnd

# Acesse a pasta do projeto no seu terminal/cmd
$ cd TestTecnicoSGE-FrontEnd

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```
---

## 🛠 Tecnologias

<div id="-tecnologias">

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ( + )

- **[React](https://reactjs.org/)**
  - **[Hooks](https://reactjs.org/docs/hooks-intro.html)**
- **[JavaScript](https://www.javascript.com/)**
- **[Material UI](https://https://material-ui.com//)**

> Veja o arquivo [package.json](https://github.com/tgmarinho/README-ecoleta/blob/master/web/package.json)
 
 ## 🦸 Autor

<div id="-autor">

  <a href="https://github.com/ASMThiago">
    <img style="border-radius: 50%;" src="./Stefano Branz.jpeg" width="100px;" alt="Autor"/>
    <br />
    <sub><b style="font-size: 15px;">Thiago Santos</b></sub>
  </a>🚀

  <br />
  <br />

[![Linkedin Badge](https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png)](https://www.linkedin.com/in/thiago-a-santos/)
[![Gmail Badge](https://img.shields.io/badge/asm.thiago@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:asm.thiago@gmail.com)](mailto:asm.thiago@gmail.com)

---
