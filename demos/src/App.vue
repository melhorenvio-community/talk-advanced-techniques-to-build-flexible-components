<template>
  <main class="w-full max-w-[800px] h-screen flex flex-col gap-8 mx-auto py-20">
    <section class="relative w-full h-full grid place-content-center">
      <RouterView v-slot="{ Component }">
        <transition
          name="fade"
          appear
          class="absolute top-1/2 left-0 -translate-y-1/2"
        >
          <component :is="Component" />
        </transition>
      </RouterView>
    </section>
  </main>

  <app-footer title="Leonardo Adamoli e Breno Pereira | Front-end Developers - @melhorenvio">
    <app-footer-item
      text="talk-advanced-techniques-to-build-flexible-components"
      url="https://github.com/melhorenvio-community/talk-advanced-techniques-to-build-flexible-components"
    >
      <carbon-logo-github />
    </app-footer-item>
  </app-footer>
</template>
