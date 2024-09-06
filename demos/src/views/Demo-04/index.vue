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
      <tags-input-inline v-model="tagsInlineModel" />

      <tags-input-stacked v-model="tagsStackedModel" />
    </new-discussion-form>
  </div>
</template>
