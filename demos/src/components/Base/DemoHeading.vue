<script setup lang="ts">
// DEPENDENCIES
import { useRoute } from 'vue-router';

// COMPONENTS
import ArrowBack from '~icons/ion/arrow-back';

const route = useRoute();
</script>

<template>
  <div class="flex items-end justify-between text-white">
    <h2 class="text-3xl font-extralight">
      {{ route.meta.title }}
    </h2>

    <router-link
      :to="{ name: 'intro' }"
      class="flex items-center gap-2 font-bold hover:text-green-500 transition-all"
    >
      <arrow-back />

      Voltar
    </router-link>
  </div>
</template>
