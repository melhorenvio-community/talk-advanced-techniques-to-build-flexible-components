# Vue.js Flexible Components (Apresentação)

Este guia irá auxiliar no passo a passo de instalação do projeto para que seja possível a edição e criação do conteúdo dos slides em seu ambiente local.

<br>

## Pré-requisitos

* [Node.js](https://nodejs.org/en) >= 20.9.0
* [pnpm](https://pnpm.io/) >= 9.1.0

Caso você não possua o *pnpm* instalado em sua máquina, execute o comando abaixo para efetuar a sua instalação:

```bash
npm install -g pnpm
```

Para iniciar a apresentação de slides localmente, execute:

```bash
pnpm install
pnpm dev
```

Pronto! Em seguida, acesse a URL http://localhost:3030 para visualizar a apresentação. :rocket:

<br>

## Estrutura de pastas

O projeto está dividido em uma estrutura de pasta e arquivos conforme o exemplo a seguir:

```
./
└── components/
    └── ... # Componentes da apresentação
└── pages/
    └── ... # Páginas que irão compor a apresentação
└── styles/
    └── ... # Estilos globais da apresentação
└── global-bottom.vue
    └── # Rodapé global da apresentação

└── ... # Demais pastas e arquivos
```

<br>

## Referências

Para maiores informações sobre o *slidev*, consulte o [guia oficial](https://sli.dev/).
