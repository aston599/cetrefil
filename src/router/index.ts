import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [], // Ana sayfa direkt BettingSites bileşenini gösterdiği için route'a gerek yok
})

export default router
