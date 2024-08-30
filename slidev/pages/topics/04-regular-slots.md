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

- Possibilitam a passagem de _props_ "especiais", contendo templates e marcações _HTML_.
- Se comportam como funções de renderização, nomeadas, que aceitam o conteúdo do slot como parâmetro.
- Se assemelham muito com o conceito das _render props_ antigamente utilizadas pelo [React](https://legacy.reactjs.org/docs/render-props.html).
- É a forma mais eficiente para evitar ataques **XSS** (_cross-site scripting_).

<br>

```html
<!-- BaseButton template -->
<button class="base-button">
  <slot></slot> 
</button>
```

```js
// Slots are converted into plain functions, passing it's own content as argument.
BaseButton('Click me!')

function BaseButton(slotContent) {
  return `<button class="base-button">
      ${slotContent}
    </button>`;
}
```