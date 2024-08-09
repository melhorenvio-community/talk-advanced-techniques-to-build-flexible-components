<script setup lang="ts">
// COMPONENTS
import TwemojiFlagBrazil from '~icons/twemoji/flag-brazil';

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
      py-2
      font-normal
      text-md
      z-50
      bg-purple-500
      text-gray-800
    "
  >
    <div class="flex items-center gap-2 w-1/2 text-left">
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
