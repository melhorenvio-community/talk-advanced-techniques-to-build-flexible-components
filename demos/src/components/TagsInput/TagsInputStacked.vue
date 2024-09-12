<script setup lang="ts">
// TYPES
import type { TagsModel } from '@components/TagsInput/types';

// COMPONENTS
import Trash from '~icons/iconamoon/trash';

const tagsModel = defineModel<TagsModel[]>({
  default: [],
});
</script>

<template>
  <tags-input-v4
    v-slot="{
      tags,
      removeTag,
      inputBindings,
      inputListeners,
    }"
    v-model="tagsModel"
  >
    <div class="w-full flex flex-col gap-2">
      <input
        class="w-full p-3 border-2 outline-none"
        v-bind="inputBindings"
        v-on="inputListeners"
      >

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
          class="flex gap-2 px-3 py-1 rounded-sm select-none bg-green-500 text-white"
        >
          <button
            type="button"
            @click="removeTag(tag.id)"
          >
            <trash />
          </button>

          {{ tag.text }}
        </span>
      </transition-group>
    </div>
  </tags-input-v4>
</template>
