---
title: Customização
layout: section
transition: slide-up
---

<!-- Customização -->
<section>
  <h1 class="section-title">
    Customização
  </h1>
</section>

---
layout: section
---

<section>
  <h2 class="section-title">Opção #01</h2>
  <p class="text-green">
    <i>Style Props</i>
  </p>
</section>

---
hideInToc: true
---

# Style Props

- Propriedades definidas para indicar customizações visuais em um elemento.
- Muitas customizações e cenários para serem considerados internamente na estrutura do componente.
- Pode se tornar difícil a passagem de valores específicos através do código _javascript_.
- É uma pratica utilizada em algumas _libs_ do mundo real, como por exemplo o [Stripe](https://docs.stripe.com/elements/appearance-api?platform=web#supported-css-properties).

<br>

```vue {all|2|2,3|2,3,4|2,3,4,5|2,3,4,5,6|2,3,4,5,6,7}
<tags-input
  tag-text-color="dark-purple"
  tag-bg-color="purple"
  tag-font-family="Lato"
  tag-font-size="1.5rem"
  tag-border-width="1px"
  tag-border-color="dark-purple"
/>
```

---
layout: section
---

<section>
  <h2 class="section-title">Opção #02</h2>
  <p class="text-green">
    <i>CSS Hooks</i>
  </p>
</section>

---
hideInToc: true
---

# CSS Hooks

- É uma maneira mais tradicional, onde algumas classes pré-definidas são disponibilizdas para aplicar as customizações.
- Cada classe possui sua documentação na _lib_, definindo a qual elemento se aplicam e quais efeitos visuais ocasionam.
- Como possuem regras e classes pré-definidas, podem conflitar com a estratégia adotada para o _CSS_ do projeto.

<br>

```html
<div class="tags-input">
  <span class="tags-input-tag">{{ tag }}</span>
  <input class="tags-input-text" placeholder="Add a new tag..." />
</div>
```

<!-- Docs -->
<AppReferences class="mt-[36px]">
  <AppLink url="https://primevue.org/card/#theming.classes" title="Exemplo - Prime Vue" />
</AppReferences>

---
layout: section
---

<section>
  <h2 class="section-title">Opção #03</h2>
  <p class="text-green">
    <i>Class Overrides</i>
  </p>
</section>

---
hideInToc: true
---

# Class Overrides

- Possibilitam determinar classes customizadas para serem aplicadas ao elemento.
- Resolve o problema de conflitos de nomes e de convenções do _CSS_.
- Ainda assim podem ser difíceis de gerenciar e facilmente _inflam_ o template dos componentes.

<br>

```vue
<tags-input 
  wrapper-class="tags-input"
  tag-class="tags-input__tag"
  input-class="tags-input__input"
  remove-tag-class="tags-input__remove"
/>
```

<!-- Docs -->
<AppReferences class="mt-[64px]">
  <AppLink url="https://vue-select.org/guide/css.html#overriding-default-styles" title="Exemplo - Vue Select" />
</AppReferences>

---
layout: section
---

<section>
  <h2 class="section-title">
    "Customization is...
  </h2>
  
  <p v-click class="text-green">
    <i>a bottomless pit!"</i>
  </p>

  <iframe v-after src="https://giphy.com/embed/ZPQLVgoXJT7K8" width="200" height="190" class="mx-auto" />
</section>