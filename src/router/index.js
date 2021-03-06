import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      redirect: { name: 'LandingPage' },
      components: {
        default: () => import('@/views/HomeView.vue')
      },
      children: [
        // Landing Page
        {
          path: 'home',
          alias: 'index',
          name: 'LandingPage',
          components: {
            default: () => import('@/views/LandingPage.vue')
          },
        },
        {
          path: 'my-story',
          name: 'MyStory',
          components: {
            default: () => import('@/views/MyStory.vue')
          }
        }
      ]
    }
  ]
})

export default router
