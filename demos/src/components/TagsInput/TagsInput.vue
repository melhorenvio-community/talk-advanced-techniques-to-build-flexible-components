<script setup lang="ts">
// DEPENDENCIES
import { v4 as uuidv4 } from 'uuid';

// TYPES
import type { TagsModel, TagsProps } from '@components/TagsInput/types';

// COMPONENTS
import CloseFill from '~icons/iconamoon/close-fill';

defineOptions({
  inheritAttrs: false,
});

const props: TagsProps = withDefaults(defineProps<TagsProps>(), {
  layout: 'inner',
  theme: 'dark',
  icon: CloseFill,
  iconPosition: 'right',
});

const tags = defineModel<TagsModel[]>();

const newTag = ref('');

const placeholder = computed(() => tags.value?.length ? '' : 'Type a tag name...');

const themeClasses = computed(() => props.theme === 'dark' ? 'bg-purple-400 text-white' : 'bg-purple-200 text-purple-400');

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
  <template v-if="props.layout === 'top'">
    <transition-group
      v-if="tags?.length"
      name="fade"
      tag="div"
      class="flex items-center flex-wrap gap-2"
      appear
    >
      <span
        v-for="tag in tags"
        :key="tag.id"
        :class="themeClasses"
        class="flex gap-2 px-3 py-1 rounded-sm select-none"
      >
        <template v-if="props.iconPosition === 'left'">
          <button
            type="button"
            @click="removeTag(tag.id)"
          >
            <component :is="props.icon" />
          </button>

          {{ tag.text }}
        </template>

        <template v-else>
          {{ tag.text }}

          <button
            type="button"
            @click="removeTag(tag.id)"
          >
            <component :is="props.icon" />
          </button>
        </template>
      </span>
    </transition-group>

    <div class="w-full flex items-center flex-wrap gap-2 p-2 border-2">
      <input
        v-model="newTag"
        v-bind="$attrs"
        :placeholder
        class="w-auto h-8 grow outline-none"
        @keydown.backspace="removeTag()"
        @keydown.enter.prevent="addTag(newTag)"
      >
    </div>
  </template>

  <template v-else-if="props.layout === 'inner'">
    <div class="w-full flex items-center flex-wrap gap-2 p-2 border-2">
      <transition-group
        v-if="tags?.length"
        name="fade"
        tag="div"
        class="flex items-center flex-wrap gap-2"
        appear
      >
        <span
          v-for="tag in tags"
          :key="tag.id"
          :class="themeClasses"
          class="flex gap-2 px-3 py-1 rounded-sm select-none"
        >
          <template v-if="props.iconPosition === 'left'">
            <button
              type="button"
              @click="removeTag(tag.id)"
            >
              <component :is="props.icon" />
            </button>

            {{ tag.text }}
          </template>

          <template v-else>
            {{ tag.text }}

            <button
              type="button"
              @click="removeTag(tag.id)"
            >
              <component :is="props.icon" />
            </button>
          </template>
        </span>
      </transition-group>

      <input
        v-model="newTag"
        v-bind="$attrs"
        :placeholder
        class="w-auto h-8 grow outline-none"
        @keydown.backspace="removeTag()"
        @keydown.enter.prevent="addTag(newTag)"
      >
    </div>
  </template>

  <template v-else>
    <div class="w-full flex items-center flex-wrap gap-2 p-2 border-2">
      <input
        v-model="newTag"
        v-bind="$attrs"
        :placeholder
        class="w-auto h-8 grow outline-none"
        @keydown.backspace="removeTag()"
        @keydown.enter.prevent="addTag(newTag)"
      >
    </div>

    <transition-group
      v-if="tags?.length"
      name="fade"
      tag="div"
      class="flex items-center flex-wrap gap-2"
      appear
    >
      <span
        v-for="tag in tags"
        :key="tag.id"
        :class="themeClasses"
        class="flex gap-2 px-3 py-1 rounded-sm select-none"
      >
        <template v-if="props.iconPosition === 'left'">
          <button
            type="button"
            @click="removeTag(tag.id)"
          >
            <component :is="props.icon" />
          </button>

          {{ tag.text }}
        </template>

        <template v-else>
          {{ tag.text }}

          <button
            type="button"
            @click="removeTag(tag.id)"
          >
            <component :is="props.icon" />
          </button>
        </template>
      </span>
    </transition-group>
  </template>
</template>
