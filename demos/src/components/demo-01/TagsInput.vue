<script setup lang="ts">
// DEPENDENCIES
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

// TYPES
import type { ITags } from '@components/types/props';

const tags = defineModel<ITags[]>();

const newTag = ref('');

function addTag(text: string) {
  tags.value?.push({
    id: uuidv4(),
    text,
  });

  newTag.value = '';
}

function removeTag(index: number) {
  tags.value?.splice(index, 1);
}
</script>

<template>
  <div class="flex flex-col">
    <input
      v-model="newTag"
      class="mb-2 p-4 text-slate-950"
      placeholder="Enter a tag name..."
      @keydown.enter="addTag(newTag)"
    >

    <span
      v-for="(tag, index) in tags"
      :key="`${tag}-${index}`"
    >
      <span>{{ tag }}</span>

      <button
        type="button"
        class="tags-input-remove"
        @click="removeTag(index)"
      >
        &times;
      </button>
    </span>
  </div>
</template>
