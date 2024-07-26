<script setup lang="ts">
// COMPONENTS
import NewDiscussionForm from '@/components/Base/NewDiscussionForm.vue';
</script>

<template>
  <main class="w-full max-w-[800px] h-screen flex flex-col gap-8 mx-auto py-20">
    <section class="flex flex-col gap-8 text-white">
      <h1 class="max-w-[750px] text-4xl font-bold">
        Técnicas avançadas para o desenvolvimento de componentes flexíveis:
      </h1>

      <h2 class="text-2xl font-extralight">
        ↪ Demo #01
      </h2>
    </section>

    <section class="w-full h-full grid place-content-center">
      <new-discussion-form />
    </section>
  </main>
</template>
