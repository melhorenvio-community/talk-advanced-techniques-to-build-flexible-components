<script setup lang="ts">
// DEPENDENCIES
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

// TYPES
import type { ITags } from '@components/types/props';

defineOptions({
  inheritAttrs: false,
});

const tags = defineModel<ITags[]>();

const newTag = ref('');

function addTag(text: string) {
  const tagAlreadyExists = tags.value?.find(tag => tag.text === text);

  if (newTag.value.length === 0 || tagAlreadyExists) {
    return;
  }

  tags.value?.push({
    id: uuidv4(),
    text,
  });

  newTag.value = '';
}

function removeTag(index: number) {
  tags.value?.splice(index, 1);
}

function handleTagBackspace() {
  if (newTag.value.length === 0) {
    tags.value?.slice(0, -1);
  }
}
</script>

<template>
  <div class="w-full h-auto">
    <span
      v-for="(tag, index) in tags"
      :key="`${tag}-${index}`"
    >
      <span>{{ tag.text }}</span>

      <button
        type="button"
        @click="removeTag(index)"
      >
        &times;
      </button>
    </span>

    <input
      v-model="newTag"
      v-bind="$attrs"
      class="block w-full p-2 border-2"
      @keydown.backspace="handleTagBackspace"
      @keydown.enter.prevent="addTag(newTag)"
    >
  </div>
</template>
