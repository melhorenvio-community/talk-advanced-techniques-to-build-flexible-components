<script setup lang="ts">
// TYPES
import type { TagsModel } from '@components/TagsInput/types';

// COMPONENTS
// import Trash from '~icons/iconamoon/trash';

const tags = ref<TagsModel[]>([]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <demo-heading />

    <new-discussion-form>
      <tags-input-v2
        id="tags"
        v-model="tags"
        name="tags"
        autocomplete="off"
      >
        <!-- <template
          #tag="{
            tag,
            themeClasses,
            removeTag,
          }"
        >
          <span
            class="flex gap-2 px-3 py-1 rounded-sm select-none"
            :class="themeClasses"
          >
            {{ tag.text }}

            <button
              type="button"
              @click="removeTag(tag.id)"
            >
              <trash />
            </button>
          </span>
        </template> -->
      </tags-input-v2>
    </new-discussion-form>
  </div>
</template>
