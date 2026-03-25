import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import Module1View from '../views/Module1View.vue'
import Module2View from '../views/Module2View.vue'
import Module3View from '../views/Module3View.vue'
import ProjectView from '../views/ProjectView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/module/1',
    name: 'Module1',
    component: Module1View
  },
  {
    path: '/module/2',
    name: 'Module2',
    component: Module2View
  },
  {
    path: '/module/3',
    name: 'Module3',
    component: Module3View
  },
  {
    path: '/project/agent-inventory',
    name: 'AgentInventoryProject',
    component: ProjectView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
