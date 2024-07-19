# Vue.js Flexible Components (Demonstração)

Este guia irá auxiliar no passo a passo de instalação do projeto para que seja possível a visualização dos componentes e das *demos* em seu ambiente local.

<br>

## Pré-requisitos

* [Node.js](https://nodejs.org/en) >= 20.9.0
* [pnpm](https://pnpm.io/) >= 9.1.0

Caso você não possua o *pnpm* instalado em sua máquina, execute o comando abaixo para efetuar a sua instalação:

```bash
npm install -g pnpm
```

Para executar o projeto localmente, execute:

```bash
pnpm install
pnpm dev
```

Pronto! Em seguida, acesse a URL http://localhost:3000 para visualizar a apresentação. :rocket:

<br>

## Estrutura de pastas

O projeto está dividido em uma estrutura de pasta e arquivos conforme o exemplo a seguir:

```
./
└── components/
    └── demo-01
        └── ... # Demo inicial (componente com padrão não flexível)
    └── demo-02
        └── ... # Regular (named) slots
    └── demo-03
        └── ... # Scoped slots
    └── demo-04
        └── ... # Renderless components
└── ... # Demais pastas e arquivos
```

<br>

## Referências

*https://www.patterns.dev/vue/renderless-components* <br>
*https://mokkapps.de/vue-tips/use-scoped-slots-in-a-child-component-to-provide-data-for-parent-component*<br>
*https://vuejs.org/api/built-in-directives.html#v-on*<br>
*https://vuejs.org/api/built-in-directives.html#v-bind*