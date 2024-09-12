<script setup lang="ts">
// TYPES
import type { TagsModel } from '@components/TagsInput/types';

// import Trash from '~icons/iconamoon/trash';

const tags = ref<TagsModel[]>([]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <demo-heading />

    <new-discussion-form>
      <tags-input-v1
        id="tags"
        v-model="tags"
        name="tags"
        autocomplete="off"
      />
    </new-discussion-form>
  </div>
</template>
