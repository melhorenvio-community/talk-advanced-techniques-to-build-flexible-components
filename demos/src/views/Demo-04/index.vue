<script setup lang="ts">
// TYPES
import type { TagsModel } from '@components/TagsInput/types';

const tagsInlineModel = ref<TagsModel[]>([]);

const tagsStackedModel = ref<TagsModel[]>([]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <demo-heading />

    <new-discussion-form>
      <tags-input-inline
        id="tags"
        v-model="tagsInlineModel"
        name="tags"
        autocomplete="off"
        placeholder="Tags will be displayed inline..."
      />

      <tags-input-stacked
        id="tags"
        v-model="tagsStackedModel"
        name="tags"
        autocomplete="off"
        placeholder="Tags will be displayed stacked..."
      />
    </new-discussion-form>
  </div>
</template>
