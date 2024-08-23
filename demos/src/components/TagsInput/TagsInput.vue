<script setup lang="ts">
// DEPENDENCIES
import { v4 as uuidv4 } from 'uuid';

// TYPES
import type { TagsModel, TagsProps } from '@components/TagsInput/types';

// COMPONENTS
import TrashThin from '~icons/iconamoon/trash-thin';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<TagsProps>(), {
  theme: 'dark',
  icon: TrashThin,
});

const tags = defineModel<TagsModel[]>();

const newTag = ref('');

const placeholder = computed(() => tags.value?.length ? '' : 'Type a tag name...');

const themeClasses = computed(() => props.theme === 'dark' ? 'bg-purple-500 text-white' : 'bg-purple-200 text-purple-400');

function addTag(text: string): void {
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

function removeTag(id?: string): void {
  if (newTag.value.length || !tags.value) {
    return;
  }

  if (!id && newTag.value.length === 0) {
    tags.value.pop();

    return;
  }

  const target = tags.value.findIndex(tag => tag.id === id);

  tags.value.splice(target, 1);
}
</script>

<template>
  <label
    :for="($attrs.name as string)"
    class="w-full flex items-center flex-wrap gap-2 p-2 border-2 cursor-pointer"
  >
    <transition-group
      name="fade"
      tag="div"
      class="flex items-center flex-wrap gap-2"
      appear
    >
      <span
        v-for="tag in tags"
        :key="tag.id"
        :class="themeClasses"
        class="flex gap-2 px-3 py-1 rounded-sm"
      >
        {{ tag.text }}

        <button
          type="button"
          @click="removeTag(tag.id)"
        >
          <component :is="props.icon" />
        </button>
      </span>
    </transition-group>

    <input
      v-model="newTag"
      v-bind="$attrs"
      :placeholder
      class="w-auto h-8 outline-none"
      @keydown.backspace="removeTag()"
      @keydown.enter.prevent="addTag(newTag)"
    >
  </label>
</template>
