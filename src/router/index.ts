import HomeComp from '@/components/HomeComp.vue';
import PostProduction from '@/pages/PostProduction.vue';
import SavPage from '@/pages/SavPage.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeComp },
    { path: "/sav", component: SavPage },
    { path: "/post-production", component: PostProduction },
  ],
})

export default router
