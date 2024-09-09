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
      <tags-input-v2 v-model="tags">
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

        <template
          #input="{
            newTag,
            onInput,
            addTag,
            removeTag,
          }"
        >
          <input
            id="tags"
            name="tags"
            autocomplete="off"
            placeholder="Type something new..."
            class="w-auto h-8 grow outline-none"
            :value="newTag"
            @input="onInput"
            @keydown.backspace="removeTag()"
            @keydown.enter.prevent="addTag(newTag)"
          >
        </template>
      </tags-input-v2>
    </new-discussion-form>
  </div>
</template>
