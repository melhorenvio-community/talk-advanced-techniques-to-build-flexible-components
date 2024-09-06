<script setup lang="ts">
// DEPENDENCIES
import { Fragment } from 'vue';
import { v4 as uuidv4 } from 'uuid';

// TYPES
import type {
  TagsInputBindings,
  TagsInputListeners,
  TagsModel,
  TagsProps,
} from '@components/TagsInput/types';

defineOptions({
  inheritAttrs: false,
});

// REACTIVE
const props: TagsProps = withDefaults(defineProps<Pick<TagsProps, 'theme'>>(), {
  theme: 'dark',
});

const slots = useSlots();

const tags = defineModel<TagsModel[]>();

const newTag = ref<string>('');

const inputBindings = reactive<TagsInputBindings>({
  value: newTag.value,
});

const themeClasses = computed(() => props.theme === 'dark' ? 'bg-purple-400 text-white' : 'bg-purple-200 text-purple-400');

// STATIC
const inputListeners: TagsInputListeners = {
  input: (e: Event) => handleInput(e),

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

// METHODS
function handleInput(event: Event): void {
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

function render() {
  return h(Fragment, [
    slots?.default
      ? slots.default({
        tags: tags.value,
        themeClasses: themeClasses.value,
        removeTag,
        inputBindings,
        inputListeners,
      })
      : null,
  ]);
}
</script>

<template>
  <render />
</template>
