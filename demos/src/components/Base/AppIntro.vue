<script setup lang="ts">
// DEPENDENCIES
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const demoRoutes = computed(() => router.getRoutes().filter(r => String(r.name).includes('demo')));

function formatDemoTitle(index: number) {
  const prefix = String(index + 1).padStart(2, '0');

  return `↪ Demo #${prefix}`;
}
</script>

<template>
  <div class="flex flex-col gap-8">
    <h1 class="max-w-[980px] text-5xl leading-tight font-bold text-white">
      Técnicas avançadas para o desenvolvimento de componentes flexíveis
    </h1>

    <nav class="flex items-center gap-4 text-xl text-white font-extralight">
      <router-link
        v-for="(route, index) in demoRoutes"
        :key="route.name"
        :to="route.path"
        class="hover:text-[#00A6ED] transition-all"
      >
        {{ formatDemoTitle(index) }}
      </router-link>
    </nav>
  </div>
</template>
