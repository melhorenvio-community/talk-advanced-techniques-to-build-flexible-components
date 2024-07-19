<script setup lang="ts">
import { ref } from 'vue';
import type { ITags } from '@components/types/props';

// COMPONENTS
import TagsInput from '@components/demo-01/TagsInput.vue';

const tags = ref<ITags[]>([]);
</script>

<template>
  <main class="grid w-full h-screen place-content-center">
    <tags-input v-model="tags" />
  </main>
</template>
