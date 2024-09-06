<script setup>
  defineProps({
    url: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <a 
    :href="url" 
    :title="title"
    target="_blank"
    class="w-fit"
  >
    <slot>
      <twemoji:memo />
    </slot>

    {{title}}
  </a>
</template>