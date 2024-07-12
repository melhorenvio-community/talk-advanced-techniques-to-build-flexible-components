<!-- BACK TO TOP -->
<a id="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/melhorenvio-community/talk-advanced-techniques-to-build-flexible-components">
    <img 
      src="images/vue-3-components.webp" 
      alt="Vue.js Flexible Components" 
      width="250" 
      height="250"
    >
  </a>

  <h3 align="center">Vue.js Flexible Components</h3>

  <p align="center">
    Explorando técnicas avançadas para o desenvolvimento de componentes reutilizáveis
    <br />
    <a href="#sobre-o-projeto">
      <strong>Acesse a documentação »</strong>
    </a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sumário</summary>

  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#introdução">Introdução</a></li>
        <li><a href="#a-stack">A stack</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## Sobre o projeto

O projeto consiste basicamente de uma apresentação em slides, criada utilizando o [slidev](https://sli.dev/) seguida de alguns exemplos práticos e demonstrações de diferentes versões de componentes, abordando os tópicos detalhados a seguir.

Para consultar o repositório da __apresentação__, [clique aqui](./slidev/README.md).<br>
Para consultar o repositório das __demos__, [clique aqui](./demos/README.md).

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>


### Introdução

Nesta talk iremos abordar alguns tópicos e abordagens pertinentes no que se refere ao desenvolvimento de componentes Vue.js mais flexíveis.

Nela, abordaremos itens como:
* Anti-patterns:
  * _Props Explosion_: Customização de estilos, comportamento e renderizações dentro do componente fazendo uso de uma quantidade excessiva de _props_;
  * Vulnerabilidades a ataques XSS: Blocos HTML sendo passado via _props_, resultando em riscos de ataques XSS e _issues_ apontadas pelas ferramentas de _lint_, (sonarcloud, por exemplo);
  * Múltiplo _binding_ de props: Não utilização de diretivas como `v-bind="props"` e `v-on="listeners"`, por exemplo.
* Gerenciamento de estilos: Controle condicional de classes e estilos;
* Gerenciamento de comportamentos: Controle de eventos, renderizações dinâmicas e entre outros;
* Demonstração de um exemplo real de componente não flexível;
* Resolução dos problemas e _anti-patterns_ mencionados anteriormente:
  * Utilização mais limpa das _props_;
  * Utilização de _named slots_;
  * Utilização de _scoped slots_;
  * Aplicação da técnica de _renderless components_;
  * Criação de _wrapper components_.


<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>


### A stack

Para o desenvolvimento da apresentação e das demonstrações que irão compor essa talk, utilizamos as seguintes tecnologias em nossa stack:

[![Typescript][Typescript]][Typescript-url]<br>
[![Vue][Vue.js]][Vue-url]<br>
[![Vite][Vite.js]][Vite-url]<br>
[![Tailwind][TailwindCSS]][Tailwind-url]<br>


<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Criação do repositório padrão;
- [x] Criar e configurar os repositórios internos (slides e demos);
- [ ] Preparar a documentação e guias de instalação;
- [ ] Preparar a apresentação teórica;
- [ ] Preparar as demonstrações práticas;


<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>


<!-- LICENSE -->
## Licença

Distribuído mediante licença MIT. Consulte `LICENSE.txt` para maiores informações.

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>


<!-- CONTACT -->
## Contato

Leonardo Adamoli - [leosadamo](https://www.linkedin.com/in/leosadamo/) - leonardo.adamoli@melhorenvio.com<br>
Breno Paixão - [brenoeddye](https://www.linkedin.com/in/brenoeddye/) - breno.paixao@melhorenvio.com

Link para o projeto: [https://github.com/melhorenvio-community/talk-advanced-techniques-to-build-flexible-components](https://github.com/melhorenvio-community/talk-advanced-techniques-to-build-flexible-components)

<p align="right">(<a href="#readme-top">voltar para o topo</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/

[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-0F192C?style=for-the-badge&logo=TailwindCSS&logoColor=38BDF8
[Tailwind-url]: https://tailwindcss.com/

[Vite.js]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/

[Typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/