import { describe, it, expect } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Module1View from '../views/Module1View.vue'
import Module2View from '../views/Module2View.vue'
import Module3View from '../views/Module3View.vue'
import ProjectView from '../views/ProjectView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/module/1', name: 'Module1', component: Module1View },
  { path: '/module/2', name: 'Module2', component: Module2View },
  { path: '/module/3', name: 'Module3', component: Module3View },
  { path: '/project/agent-inventory', name: 'AgentInventoryProject', component: ProjectView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView }
]

const createTestRouter = () => {
  return createRouter({
    history: createMemoryHistory(),
    routes
  })
}

describe('Router', () => {
  describe('route configuration', () => {
    it('should have all required routes defined', () => {
      const router = createTestRouter()
      expect(router.getRoutes()).toHaveLength(7)
    })

    it('should have home route', () => {
      const router = createTestRouter()
      const homeRoute = router.getRoutes().find(r => r.name === 'Home')
      expect(homeRoute).toBeDefined()
      expect(homeRoute.path).toBe('/')
    })

    it('should have module 1 route', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.name === 'Module1')
      expect(route).toBeDefined()
      expect(route.path).toBe('/module/1')
    })

    it('should have module 2 route', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.name === 'Module2')
      expect(route).toBeDefined()
      expect(route.path).toBe('/module/2')
    })

    it('should have module 3 route', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.name === 'Module3')
      expect(route).toBeDefined()
      expect(route.path).toBe('/module/3')
    })

    it('should have project route', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.name === 'AgentInventoryProject')
      expect(route).toBeDefined()
      expect(route.path).toBe('/project/agent-inventory')
    })

    it('should have login route', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.name === 'Login')
      expect(route).toBeDefined()
      expect(route.path).toBe('/login')
    })

    it('should have dashboard route', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.name === 'Dashboard')
      expect(route).toBeDefined()
      expect(route.path).toBe('/dashboard')
    })
  })

  describe('route components', () => {
    it('should have HomePage component for home route', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.path === '/')
      expect(route.component).toBe(HomePage)
    })

    it('should have Module1View for module 1 route', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.path === '/module/1')
      expect(route.component).toBe(Module1View)
    })

    it('should have Module2View for module 2 route', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.path === '/module/2')
      expect(route.component).toBe(Module2View)
    })

    it('should have Module3View for module 3 route', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.path === '/module/3')
      expect(route.component).toBe(Module3View)
    })

    it('should have ProjectView for project route', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.path === '/project/agent-inventory')
      expect(route.component).toBe(ProjectView)
    })

    it('should have LoginView for login route', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.path === '/login')
      expect(route.component).toBe(LoginView)
    })

    it('should have DashboardView for dashboard route', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.path === '/dashboard')
      expect(route.component).toBe(DashboardView)
    })
  })

  describe('route names', () => {
    it('should have unique route names', () => {
      const router = createTestRouter()
      const names = router.getRoutes().map(r => r.name)
      const uniqueNames = new Set(names)
      expect(uniqueNames.size).toBe(names.length)
    })

    it('should have descriptive names', () => {
      const router = createTestRouter()
      const names = router.getRoutes().map(r => r.name)
      names.forEach(name => {
        expect(name).toBeTruthy()
        expect(typeof name).toBe('string')
      })
    })
  })

  describe('module routes', () => {
    it('should have all three modules', () => {
      const router = createTestRouter()
      const moduleRoutes = router.getRoutes().filter(r => r.path.includes('/module/'))
      expect(moduleRoutes).toHaveLength(3)
    })

    it('should have sequential module paths', () => {
      const router = createTestRouter()
      const paths = ['/module/1', '/module/2', '/module/3']
      paths.forEach(path => {
        const route = router.getRoutes().find(r => r.path === path)
        expect(route).toBeDefined()
      })
    })

    it('should have module names in order', () => {
      const router = createTestRouter()
      const names = ['Module1', 'Module2', 'Module3']
      names.forEach(name => {
        const route = router.getRoutes().find(r => r.name === name)
        expect(route).toBeDefined()
      })
    })
  })

  describe('auth routes', () => {
    it('should have login and dashboard routes', () => {
      const router = createTestRouter()
      const authRoutes = router.getRoutes().filter(r =>
        r.name === 'Login' || r.name === 'Dashboard'
      )
      expect(authRoutes).toHaveLength(2)
    })

    it('should have correct login path', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.name === 'Login')
      expect(route.path).toBe('/login')
    })

    it('should have correct dashboard path', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.name === 'Dashboard')
      expect(route.path).toBe('/dashboard')
    })
  })

  describe('project route', () => {
    it('should have agent inventory project route', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.name === 'AgentInventoryProject')
      expect(route).toBeDefined()
    })

    it('should have specific project path', () => {
      const router = createTestRouter()
      const route = router.getRoutes().find(r => r.name === 'AgentInventoryProject')
      expect(route.path).toBe('/project/agent-inventory')
    })
  })

  describe('router functionality', () => {
    it('should be able to navigate to home', async () => {
      const router = createTestRouter()
      await router.push({ name: 'Home' })
      expect(router.currentRoute.value.name).toBe('Home')
    })

    it('should be able to navigate to module 1', async () => {
      const router = createTestRouter()
      await router.push({ name: 'Module1' })
      expect(router.currentRoute.value.name).toBe('Module1')
    })

    it('should be able to navigate between modules', async () => {
      const router = createTestRouter()
      await router.push({ name: 'Module1' })
      expect(router.currentRoute.value.name).toBe('Module1')
      await router.push({ name: 'Module2' })
      expect(router.currentRoute.value.name).toBe('Module2')
    })

    it('should be able to navigate to login', async () => {
      const router = createTestRouter()
      await router.push({ name: 'Login' })
      expect(router.currentRoute.value.name).toBe('Login')
    })

    it('should be able to navigate to dashboard', async () => {
      const router = createTestRouter()
      await router.push({ name: 'Dashboard' })
      expect(router.currentRoute.value.name).toBe('Dashboard')
    })

    it('should be able to navigate to project', async () => {
      const router = createTestRouter()
      await router.push({ name: 'AgentInventoryProject' })
      expect(router.currentRoute.value.name).toBe('AgentInventoryProject')
    })
  })

  describe('router paths', () => {
    it('should match all defined paths', () => {
      const router = createTestRouter()
      const expectedPaths = [
        '/', '/module/1', '/module/2', '/module/3',
        '/project/agent-inventory', '/login', '/dashboard'
      ]
      const routePaths = router.getRoutes().map(r => r.path)
      expectedPaths.forEach(path => {
        expect(routePaths).toContain(path)
      })
    })

    it('should not have duplicate paths', () => {
      const router = createTestRouter()
      const paths = router.getRoutes().map(r => r.path)
      const uniquePaths = new Set(paths)
      expect(uniquePaths.size).toBe(paths.length)
    })
  })

  describe('navigation consistency', () => {
    it('should navigate correctly with path', async () => {
      const router = createTestRouter()
      await router.push('/')
      expect(router.currentRoute.value.path).toBe('/')
    })

    it('should navigate correctly with name', async () => {
      const router = createTestRouter()
      await router.push({ name: 'Module1' })
      expect(router.currentRoute.value.name).toBe('Module1')
    })

    it('should handle multiple navigations', async () => {
      const router = createTestRouter()
      const routes = ['Home', 'Module1', 'Module2', 'Home', 'Dashboard']
      for (const routeName of routes) {
        await router.push({ name: routeName })
        expect(router.currentRoute.value.name).toBe(routeName)
      }
    })
  })
})
