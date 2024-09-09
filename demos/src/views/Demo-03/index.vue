<script setup lang="ts">
// TYPES
import type { TagsModel } from '@components/TagsInput/types';

// COMPONENTS
import CloseFill from '~icons/iconamoon/close-fill';

const tags = ref<TagsModel[]>([]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <demo-heading />

    <new-discussion-form>
      <tags-input-v3
        id="tags"
        v-model="tags"
        name="tags"
        autocomplete="off"
        placeholder="Type something new..."
      >
        <template
          #tag="{
            tag,
            removeTag,
          }"
        >
          <span class="flex gap-2 px-3 py-1 rounded-sm select-none bg-purple-400 text-white">
            {{ tag.text }}

            <button
              type="button"
              @click="removeTag(tag.id)"
            >
              <close-fill />
            </button>
          </span>
        </template>

        <template #input="{ bindings, listeners }">
          <input
            class="w-auto h-8 grow outline-none"
            v-bind="bindings"
            v-on="listeners"
          >
        </template>
      </tags-input-v3>
    </new-discussion-form>
  </div>
</template>
