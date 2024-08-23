<script setup lang="ts">
const router = useRouter();

const demoRoutes = computed(() => router.getRoutes().filter(r => String(r.name).includes('demo')));
</script>

<template>
  <div class="flex flex-col gap-8">
    <h1 class="max-w-[980px] text-5xl leading-tight font-bold text-white">
      Técnicas avançadas para o desenvolvimento de componentes flexíveis
    </h1>

    <nav class="flex items-center gap-4 text-xl text-white font-extralight">
      <router-link
        v-for="route in demoRoutes"
        :key="route.name"
        :to="route.path"
        class="inline-flex hover:text-boston-blue transition-all"
      >
        <span class="inline-flex items-center gap-2">
          <twemoji-left-arrow-curving-right /> {{ route.meta.title }}
        </span>
      </router-link>
    </nav>
  </div>
</template>
