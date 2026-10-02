# 🃏 PokéSorte

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Material UI](https://img.shields.io/badge/Material_UI-9-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![PokéAPI](https://img.shields.io/badge/Pok%C3%A9API-FFCB05?style=for-the-badge&logoColor=black)

**PokéSorte** é uma aplicação acadêmica desenvolvida em React para sortear cartas Pokémon e montar um álbum, inspirado nos 151 Pokémon da primeira geração.

> ⚠️ **Nota sobre propriedade intelectual:** Utilizou-se a temática inspirada no universo Pokémon, dando os devidos créditos à Nintendo, Game Freak e The Pokémon Company, detentoras dos direitos sobre a marca. Não há qualquer objetivo de obtenção de benefícios comerciais, monetários ou similares com este projeto, visto que se trata de trabalho acadêmico destinado à avaliação da disciplina de Programação Web Full-Stack do curso de Engenharia de Software da UTFPR-CP.

## 🔍 Sobre o sistema

O sistema possui três telas principais, conectadas pelo menu de navegação:

| Tela | Funcionalidades |
|---|---|
| **Início — `/`** | Apresenta o PokéSorte, mostra a quantidade de Pokémon disponíveis e os obtidos na coleção |
| **Sorteio — `/sortear`** | Permite escolher um dos três pacotes disponíveis. Cada abertura sorteia um Pokémon entre os 151 da primeira geração, consulta seus dados na PokéAPI e exibe a carta com imagem, tipos, características e atributos. A carta é adicionada à coleção compartilhada com o álbum. |
| **Álbum — `/album`** | Exibe o catálogo dos 151 Pokémon. As cartas obtidas aparecem com seus dados, enquanto as não conquistadas mantêm sua posição com uma aparência bloqueada. Permite buscar por nome, filtrar cartas obtidas por tipo, favoritar cartas conquistadas e mostrar as favoritas. |

O sorteio pode retornar um Pokémon que já foi obtido, mas a coleção não armazena cartas duplicadas. 

> Atualmente, a coleção permanece disponível durante a navegação e é reiniciada ao recarregar a página. Os identificadores das cartas favoritas são salvos no `localStorage` do navegador.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização no projeto |
|---|---|
| **React 19 e React DOM** | Construção da interface com componentes funcionais, gerenciamento de estado e renderização das telas. |
| **JavaScript e JSX** | Implementação das interações, das regras de sorteio e da estrutura dos componentes. |
| **HTML e CSS** | Estrutura da página e estilização das telas e das cartas, incluindo a apresentação responsiva. |
| **Vite 8** | Servidor de desenvolvimento do React e geração da versão de produção. |
| **React Router DOM 7** | Biblioteca externa responsável pelas rotas e pela navegação entre as três telas, utilizando `BrowserRouter`, `Routes`, `Route` e `NavLink`. |
| **Material UI 9** | Biblioteca externa utilizada nos botões da tela inicial e nos ícones, por meio de `@mui/material` e `@mui/icons-material`. |
| **Node.js e npm** | Ambiente e gerenciador de pacotes utilizados para instalar as dependências e executar os comandos do projeto. |
| **PokéAPI** | API pública que fornece os nomes, imagens, tipos, habilidades e atributos dos Pokémon. | |

A API é acessada pelo endereço [https://pokeapi.co/api/v2](https://pokeapi.co/api/v2). O catálogo utiliza a consulta `/pokemon?limit=151&offset=0`, e os dados de cada carta são obtidos pelo identificador do Pokémon.

### ⚛️ Recursos e funções do React

| Recurso | Aplicação |
|---|---|
| **`useState`** | Controla os resultados e o carregamento do sorteio, os detalhes das cartas e os campos de busca, filtros e favoritos do álbum. |
| **`useEffect`** | Carrega o catálogo de Pokémon ao abrir o álbum e sincroniza os favoritos com o `localStorage`. |
| **`useMemo`** | Calcula o catálogo associado à coleção, os tipos disponíveis e as cartas exibidas conforme os filtros do álbum. |
| **`useReducer`** | Gerencia a coleção no `App.jsx`, usando o `collectionReducer` para adicionar Pokémon sem repetir os identificadores já obtidos. |
| **Eventos, listas e renderização condicional** | Tratam cliques e alterações nos filtros, exibem as cartas e alternam entre estados de carregamento, erro, carta obtida e carta bloqueada. |

Além dos Hooks do React, o projeto utiliza `useNavigate` e `useLocation`, fornecidos pelo React Router, para controlar a navegação e o menu.

## 🚀 Como rodar o sistema

### 📋 Pré-requisitos

- **Node.js:** versão `20.19.x` ou superior da série 20, ou versão `22.12.0` ou superior, conforme a compatibilidade declarada pelo Vite e pelo plugin React. Para configurar o ambiente, pode-se utilizar Node.js 22.12 ou superior.
- **npm**, disponibilizado com a instalação do Node.js.
- **Git**, para clonar o repositório.
- Navegador atualizado e conexão com a internet para consultar a PokéAPI e carregar as imagens das cartas.

Confira as instalações:

```bash
node --version
npm --version
git --version
```

### ⚙️ Configuração do ambiente

Clone o repositório pela branch `main` e acesse a pasta da aplicação:

```bash
git clone --branch main https://github.com/pammBerti/PokeSorte.git
```
```
cd PokeSorte/pokesorte
```

Instale as dependências nas versões registradas no arquivo de bloqueio:

```bash
npm ci
```

Os arquivos de configuração ficam dentro de `pokesorte/`:

| Arquivo | Finalidade |
|---|---|
| `package.json` | Declara as dependências e os comandos `dev`, `build`, `lint` e `preview`. |
| `package-lock.json` | Registra as versões das dependências para uma instalação reproduzível. |
| `vite.config.js` | Configura o Vite com o plugin React. |
| `.oxlintrc.json` | Configura a análise estática e as regras dos Hooks. |
| `.gitignore` | Exclui dependências instaladas, arquivos de build e outros arquivos locais do versionamento. |

A versão atual utiliza a PokéAPI pública e não exige chave de API, arquivo `.env`, banco de dados ou servidor de backend próprio.

### ▶️ Execução

Dentro da pasta `pokesorte/`, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço informado pelo terminal, normalmente `http://localhost:5173`. Caso a porta esteja ocupada, utilize o endereço alternativo exibido pelo Vite.

Outros comandos disponíveis:

| Comando | Finalidade |
|---|---|
| `npm run lint` | Analisa o código com Oxlint. |
| `npm run build` | Gera a versão de produção na pasta `dist/`. |
| `npm run preview` | Disponibiliza uma prévia local da versão de produção, após executar o build. |

## 👥 Organização da equipe

| Integrante | Responsabilidades |
|---|---|
| **Pamela Berti** | Tela inicial (`Home`), componentes de layout (`Header` e `Footer`), navegação, integração com a PokéAPI e integração geral das partes do sistema. |
| **Letícia Bento** | Tela de sorteio (`DrawPage`), lógica de abertura dos pacotes e componentes de apresentação das cartas (`PokemonCard`, `BoosterPack` e `StatBar`). |
| **Josiane Batista** | Tela de álbum (`Album`), com apresentação da coleção e das cartas bloqueadas, seus filtros de busca e sistemas de favoritos; e documentação do projeto. |
