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

```vue
<tags-input 
  wrapper-class="tags-input"
  tag-class="tags-input__tag"
  input-class="tags-input__input"
  remove-tag-class="tags-input__remove"
  :icon="Trash"
  icon-position="left"
  layout="bottom"
/>
```