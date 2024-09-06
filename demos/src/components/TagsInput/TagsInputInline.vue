<script setup lang="ts">
// TYPES
import type { TagsModel } from '@components/TagsInput/types';

// COMPONENTS
import CloseFill from '~icons/iconamoon/close-fill';

const tagsModel = defineModel<TagsModel[]>();
</script>

<template>
  <tags-input-v4
    id="tags"
    v-model="tagsModel"
    name="tags"
    autocomplete="off"
  >
    <template
      #default="{
        tags,
        removeTag,
        inputBindings,
        inputListeners,
      }"
    >
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
            class="flex gap-2 px-3 py-1 rounded-sm select-none bg-purple-400 text-white"
          >
            {{ tag.text }}

            <button
              type="button"
              @click="removeTag(tag.id)"
            >
              <close-fill />
            </button>
          </span>
        </transition-group>

        <input
          class="w-auto h-8 grow outline-none"
          placeholder="Tags will be displayed inline..."
          v-bind="inputBindings"
          v-on="inputListeners"
        >
      </div>
    </template>
  </tags-input-v4>
</template>
