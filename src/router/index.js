import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@views/HomeView.vue'
import CategoriesView from '@views/CategoryView.vue'
import DetailMealView from '@views/DetailMealView.vue'
import NotFoundView from '@views/NotFoundView.vue'

const routes = [
  { path: '/cmlabs-frontend-internship-test', component: HomeView },
  { path: '/cmlabs-frontend-internship-test/Categories/:name', component: CategoriesView },
  { path: '/cmlabs-frontend-internship-test/Categories/:name/Meals/:id', component: DetailMealView },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router