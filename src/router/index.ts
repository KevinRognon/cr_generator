import HomeComp from '@/components/HomeComp.vue';
import SavPage from '@/pages/SavPage.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeComp },
    { path: "/sav", component: SavPage }
  ],
})

export default router
