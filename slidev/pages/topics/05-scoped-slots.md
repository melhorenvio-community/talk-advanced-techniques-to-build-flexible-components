---
title: Scoped Slots
layout: section
transition: slide-up
---

<!-- Scoped Slots -->
<section>
  <h1 class="section-title">
    Transformando nosso demo <code>TagsInput.vue</code>
  </h1>
</section>

---
hideInToc: true
---

# TagsInput

- Vamos retomar o nosso componente de exemplo, `TagsInput.vue`, focando específicamente na renderização de cada tag.
- Atualmente, cada `tag` inserida está sendo renderizada da seguinte forma:

<br>

```html
<span
  v-for="tag in tags"
  :key="tag.id"
  class="flex gap-2 px-3 py-1 rounded-sm select-none"
>
  {{ tag.text }}

  <button
    type="button"
    @click="removeTag(tag.id)"
  >
    <component :is="props.icon" />
  </button>
</span>
```

---
hideInToc: true
---

# TagsInput

- Aplicando os conceitos que vimos até agora, o bloco anterior seria substituído por um _slot_, por exemplo:

<br>

```html
<!-- TagsInput.vue -->
<slot name="tag" v-for="tag in tags" :key="tag.id" />
```

<br>

- Dessa forma, a renderização de cada `tag` ficaria sob responsabilidade do _parent component_:

<br>

```html
<!-- In the consumer (parent component) -->
<template #tag>
  <span class="flex gap-2 px-3 py-1 rounded-sm select-none" :class="themeClasses">
    {{ tag.text }}

    <button type="button" @click="removeTag(tag.id)">
      <TrashIcon />
    </button>
  </span>
</template>
```

---
layout: section
hideInToc: true
---

<!-- Scoped Slots -->
<section>
  <h1 class="section-title">
    Error alert <noto-warning />
  </h1>
</section>

---
hideInToc: true
---

# TagsInput

- Existe um problema com a refatoração sugerida no slide anterior, vamos revisá-lo novamente?

<br>

```html {all|3|4|6|all}
<!-- In the consumer (parent component) -->
<template #tag>
  <span class="flex gap-2 px-3 py-1 rounded-sm select-none" :class="themeClasses">
    {{ tag.text }}

    <button type="button" @click="removeTag(tag.id)">
      <TrashIcon />
    </button>
  </span>
</template>
```

<br>

- No contexto do pai, não temos acesso às props `tag` e `themeClasses`, tampouco ao método `removeTag` _bindado_ ao elemento `button`.
- Para resolver esse problema, precisamos conceder o acesso a esses recursos, transformando o conteúdo renderizado pelo _slot_ em uma função de callback.

---
hideInToc: true
---

# Scoped Slots em ação

- Podemos fazer uma analogia, comparando os _scoped slots_ com as _render props_, antigamente utilizadas no universo [React](https://legacy.reactjs.org/docs/render-props.html).
- O conteúdo renderizado pelo _slot_ é transformado em uma função de callback, recebendo como parâmetros os recursos que precisamos conceder acesso no escopo do componente pai (_slotProps_).

<br>

```html
<!-- TagsInput.vue -->
<slot 
  v-for="tag in tags" 
  :key="tag.id" 
  name="tag"
  :tag="tag"
  :theme-classes="themeClasses"
  :remove-tag="removeTag"
/>
```

---
hideInToc: true
---

# Scoped Slots em ação

- Podemos utilizar a técnica de `destructuring` para receber os recursos providos no escopo do _slot_ para utilizá-los no contexto do pai:

<br>

```html
<!-- In the consumer (parent component) -->
<template #tag="{tag, themeClasses, removeTag}">
  <span class="flex gap-2 px-3 py-1 rounded-sm select-none" :class="themeClasses">
    {{ tag.text }}

    <button type="button" @click="removeTag(tag.id)">
      <TrashIcon />
    </button>
  </span>
</template>
```

---
hideInToc: true
---

# Scoped Slots em ação

- Por baixo dos panos, o exemplo mencionado anteriormente será convertido e resolvido pelo compilador do `Vue` em algo semelhante a isto:

<br>

```js
function TagsInput(slots) {
  const myTag = {
    id: 12345,
    foo: 'Bar',
    baz: 'Qux'
  };

  return `<span>${ slots.tag({ myTag })}</span>`;
};

TagsInput({
  tag: ({myTag}) => {
    return `${myTag.foo} ${myTag.baz}`;
  }
});
```

---
layout: section
hideInToc: true
---

<!-- Scoped Slots -->
<section>
  <h2 class="!text-white">Scoped Slots</h2>

  <h1 class="section-title section-title--green">
    Prop categories
  </h1>
</section>

---
hideInToc: true
---

# Scoped Slots - prop categories

- **State/Data**: Variáveis reativas, passadas no escopo do slot para serem _utilizadas_ no componente pai.
- **Actions**: Funções/Métodos passados no escopo do slot para serem _executadas_ no componente pai.
- **Event Handlers**: Eventos nativos agrupados em um único objeto pelo componente filho e disponibilizados para que o componente pai possa associar através de um único `v-on`. 
- **Bindings**: Variáveis reativas agrupadas em um único objeto no componente filho e disponibilizadas para que o componente pai possa associar através de um único `v-bind`.