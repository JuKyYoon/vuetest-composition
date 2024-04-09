import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/template-syntax',
      name: 'template-syntax',
      component: () => import('@/views/TemplateSyntax.vue')
    },
    {
      path: '/reactivity-fund',
      name: 'reactivity-fund',
      component: () => import('@/views/ReactivityFund.vue')
    },
    {
      path: '/computed-prop',
      name: 'computed-prop',
      component: () => import('@/views/ComputedProp.vue')
    },
    {
      path: '/class-and-style',
      name: 'class-and-style',
      component: () => import('@/views/ClassAndStyle.vue')
    },
    {
      path: '/conditional',
      name: 'conditional',
      component: () => import('@/views/Conditional.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/ListView.vue')
    },
    {
      path: '/event-handling',
      name: 'event-handling',
      component: () => import('@/views/EventHandling.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('@/views/Forms.vue')
    },
    {
      path: '/watchers',
      name: 'watchers',
      component: () => import('@/views/Watchers.vue')
    },

  ]
})

export default router
