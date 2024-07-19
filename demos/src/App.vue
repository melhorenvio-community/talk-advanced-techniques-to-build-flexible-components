<script setup lang="ts">
// DEPENDENCIES
import { ref } from 'vue';

// TYPES
import type { ITags } from '@components/types/props';

// COMPONENTS
import TagsInput from '@components/demo-01/TagsInput.vue';

const tags = ref<ITags[]>([]);
</script>

<template>
  <main class="w-full max-w-[500px] h-screen grid place-content-center mx-auto">
    <h1 class="mb-4 italic">
      Tags Input - Non-flexible version
    </h1>

    <tags-input v-model="tags" />
  </main>
</template>
