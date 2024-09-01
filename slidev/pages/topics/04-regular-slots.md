---
title: Regular Slots
layout: section
transition: slide-up
---

<!-- Regular Slots -->
<section>
  <p>Mas antes precisamos falar de...</p>

  <h1 class="section-title section-title--green">
    Regular Slots
  </h1>
</section>

---
hideInToc: true
---

# Regular Slots

- Assumindo o componente `BaseCard.vue` como exemplo, teríamos o seguinte:

<br>

```vue
<!-- BaseCard.vue Component -->
<template>
  <div class="card">
    <header class="card-header">
      <slot name="header">
    </header>

    <main class="card-body">
      <slot name="body">
    </main>

    <footer class="card-footer">
      <slot name="footer">
    </footer>
  </div>
</template>
```

---
hideInToc: true
---

# Regular Slots

- E no componente pai, utilizaríamos nosso `BaseCard.vue` do exemplo anterior mais ou menos assim:

<br>

```html
<!-- BaseCard.vue parent component -->
<base-card>
  <template #header>
    <h1>Card example</h1>
  </template>

  <template #body>
    <h2>Some topic</h2>
    <p>Some description</p>
    <a href="#">Some Link</a>
  </template>

  <template #footer>
    <p>Some caption.</p>
  </template>
</base-card>
```

---
hideInToc: true
---

# Regular Slots

- Facilitam a customização, pois permitem a passagem de qualquer conteúdo _HTML_.
- São uma das formas mais eficientes para diminuir o risco a ataques **XSS** (_cross-site scripting_).
- Facilitam a customização, uma vez que passam a responsabilidade para o _parent component_ aplicar as devidas modificações.
- Contribuem com o conceito de flexibilidade e reuso de código.
- Tendem a contribuir para o desenvolvimento de componentes mais "limpos" e simples, sem conter tantas renderizações e lógicas condicionais.

---
layout: section
hideInToc: true
---

<section>
  <p>No final das contas, <i>slots</i> são apenas um tipo especial de</p>

  <h1 class="section-title section-title--green">
    props
  </h1>
</section>

---
hideInToc: true
---

# Regular Slots

- São resolvidos em funções de renderização, nomeadas, que recebem o conteúdo do _slot_ passado como parâmetro.

<br>

```js
// Each slot is rendered in it's related place.
function BaseCard(slots) {
  return `<div class="card">
      <header class="card-header">${slots.header}</header>
      <main class="card-body">${slots.body}</main>
      <footer class="card-footer">${slots.footer}</footer>
    </div>`
}

// Slots are converted into plain functions, passing it's own content as argument.
BaseCard({
  header: `...`,
  body: `...`,
  footer: `...`
});
```