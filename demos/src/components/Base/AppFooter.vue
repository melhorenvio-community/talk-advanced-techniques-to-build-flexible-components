<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <footer
    v-if="title"
    class="
      flex
      w-full
      absolute
      bottom-0
      left-0
      px-4
      py-0.5
      font-semibold
      text-lg
      z-50
      bg-purple-400
      text-gray-700
    "
  >
    <div class="flex items-center gap-2 w-1/2 text-left ">
      {{ title }}

      <slot name="flag">
        <twemoji-flag-brazil />
      </slot>
    </div>

    <div class="w-1/2 flex justify-end">
      <slot />
    </div>
  </footer>
</template>
