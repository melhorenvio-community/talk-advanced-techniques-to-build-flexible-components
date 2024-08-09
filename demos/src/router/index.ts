// TYPES
import type { RouteRecordRaw } from 'vue-router';

// DEPENDENCIES
import { createRouter, createWebHistory } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'intro',
    component: () => import('@components/Base/AppIntro.vue'),
  },
  {
    path: '/demo-01',
    name: 'demo-01',
    component: () => import('@views/Demo-01/index.vue'),
  },
  {
    path: '/demo-02',
    name: 'demo-02',
    component: () => import('@views/Demo-02/index.vue'),
  },
  {
    path: '/demo-03',
    name: 'demo-03',
    component: () => import('@views/Demo-03/index.vue'),
  },
  {
    path: '/demo-04',
    name: 'demo-04',
    component: () => import('@views/Demo-04/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
