import { createRouter, createWebHistory } from 'vue-router'
import ToDoListView from '../views/ToDoListView.vue'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    alias: '/index.html',
    name: 'list',
    component: ToDoListView
  },
  {
    path: '/add',
    component: () => import('../views/ToDoAddView.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/ToDoEditView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
