import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
    },
  },

  server: {
    port: 3000,
  },

  plugins: [
    Vue(),
    AutoImport({
      dts: 'src/declarations/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        {
          from: 'vue-router',
          imports: [
            'createRouter',
            'createWebHistory',
          ],
        },
      ],
    }),
    Components({
      dts: 'src/declarations/components.d.ts',
      resolvers: [
        IconsResolver({
          prefix: false,
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
});
