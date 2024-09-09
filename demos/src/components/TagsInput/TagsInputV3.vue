<script setup lang="ts">
// DEPENDENCIES
import { v4 as uuidv4 } from 'uuid';

// TYPES
import type {
  TagsInputBindings,
  TagsInputListeners,
  TagsModel,
} from '@components/TagsInput/types';

defineOptions({
  inheritAttrs: false,
});

const tags = defineModel<TagsModel[]>();

const attrs = useAttrs();

const newTag = ref<string>('');

const inputBindings = reactive<TagsInputBindings>({
  ...attrs,
  value: newTag.value,
});

// METHODS
function onInput(event: Event): void {
  newTag.value = (event.target as HTMLInputElement).value;
}

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

// STATIC
const inputListeners: TagsInputListeners = {
  input: (e: Event) => onInput(e),

  keydown: (e: KeyboardEvent) => {
    if (e.key === 'Backspace') {
      removeTag();

      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();

      addTag(newTag.value);
    }
  },
};
</script>

<template>
  <div class="w-full flex items-center flex-wrap gap-2 p-2 border-2">
    <transition-group
      v-if="tags?.length"
      name="fade"
      tag="div"
      class="flex items-center flex-wrap gap-2"
      appear
    >
      <slot
        v-for="tag in tags"
        :key="tag.id"
        name="tag"
        :tag
        :remove-tag
      />
    </transition-group>

    <slot
      name="input"
      :bindings="inputBindings"
      :listeners="inputListeners"
    />
  </div>
</template>
