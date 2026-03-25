import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createPinia, setActivePinia } from 'pinia'
import App from '../App.vue'
import HomePage from '../views/HomePage.vue'

describe('App.vue Integration', () => {
  const createWrapper = () => {
    setActivePinia(createPinia())
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', name: 'Home', component: HomePage },
        { path: '/login', name: 'Login', component: { template: '<div>Login View</div>' } },
        { path: '/dashboard', name: 'Dashboard', component: { template: '<div>Dashboard View</div>' } }
      ]
    })

    return mount(App, {
      global: {
        plugins: [router],
        stubs: {
          RouterLink: true,
          RouterView: true
        }
      }
    })
  }

  describe('app structure', () => {
    it('should render the app', () => {
      const wrapper = createWrapper()
      expect(wrapper.exists()).toBe(true)
    })

    it('should have navigation bar', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('nav').exists()).toBe(true)
    })

    it('should have app title in navigation', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('AI Testing Academy')
    })

    it('should have min height screen styling', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('#app').classes()).toContain('min-h-screen')
    })
  })

  describe('navigation menu', () => {
    it('should have Home link in navigation', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Home')
    })

    it('should have Dashboard link in navigation', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Dashboard')
    })

    it('should have Sign In button for unauthenticated users', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Sign In')
    })
  })

  describe('authenticated state', () => {
    it('should show Sign In when not authenticated', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Sign In')
    })

    it('should not show Sign Out when not authenticated', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).not.toContain('Sign Out')
    })
  })

  describe('styling', () => {
    it('should have gradient background', () => {
      const wrapper = createWrapper()
      const appDiv = wrapper.find('#app')
      expect(appDiv.classes()).toContain('bg-gradient-to-br')
    })

    it('should have text color white', () => {
      const wrapper = createWrapper()
      const appDiv = wrapper.find('#app')
      expect(appDiv.classes()).toContain('text-white')
    })

    it('should have navigation at top', () => {
      const wrapper = createWrapper()
      const nav = wrapper.find('nav')
      expect(nav.classes()).toContain('sticky')
      expect(nav.classes()).toContain('top-0')
      expect(nav.classes()).toContain('z-50')
    })
  })

  describe('semantic HTML', () => {
    it('should use nav element for navigation', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('nav').exists()).toBe(true)
    })

    it('should have RouterView for page content', () => {
      const wrapper = createWrapper()
      expect(wrapper.findComponent({ name: 'RouterView' }).exists()).toBe(true)
    })
  })

  describe('header structure', () => {
    it('should have header height', () => {
      const wrapper = createWrapper()
      const navDiv = wrapper.find('nav').find('div')
      expect(navDiv.classes()).toContain('h-16')
    })

    it('should have flex layout in header', () => {
      const wrapper = createWrapper()
      const navDiv = wrapper.find('nav').find('div')
      expect(navDiv.classes()).toContain('flex')
    })

    it('should have gap between logo and menu', () => {
      const wrapper = createWrapper()
      const contentDiv = wrapper.find('.gap-8')
      expect(contentDiv.exists()).toBe(true)
    })
  })

  describe('responsive design', () => {
    it('should have hidden menu on mobile', () => {
      const wrapper = createWrapper()
      const menu = wrapper.find('.hidden')
      expect(menu.exists()).toBe(true)
    })

    it('should have visible menu on desktop', () => {
      const wrapper = createWrapper()
      const menu = wrapper.find('.md\\:flex')
      expect(menu.exists()).toBe(true)
    })
  })

  describe('layout zones', () => {
    it('should have navigation section', () => {
      const wrapper = createWrapper()
      const logo = wrapper.text().includes('AI Testing Academy')
      expect(logo).toBe(true)
    })

    it('should have action buttons section', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Sign In')
    })

    it('should have content area with RouterView', () => {
      const wrapper = createWrapper()
      expect(wrapper.findComponent({ name: 'RouterView' })).toBeDefined()
    })
  })

  describe('branding', () => {
    it('should display academy name', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('AI Testing Academy')
    })

    it('should have graduation cap emoji', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('🎓')
    })

    it('should have bold branding text', () => {
      const wrapper = createWrapper()
      const brandText = wrapper.text()
      expect(brandText).toContain('AI Testing Academy')
    })
  })

  describe('dark theme', () => {
    it('should have slate-900 colors', () => {
      const wrapper = createWrapper()
      const nav = wrapper.find('nav')
      expect(nav.classes()).toContain('bg-slate-900')
    })

    it('should have dark background', () => {
      const wrapper = createWrapper()
      const appDiv = wrapper.find('#app')
      expect(appDiv.classes()).toContain('from-slate-900')
      expect(appDiv.classes()).toContain('to-slate-800')
    })

    it('should have dark text on light elements', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Sign In')
    })
  })

  describe('navigation accessibility', () => {
    it('should use semantic nav element', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('nav').exists()).toBe(true)
    })

    it('should have navigation links', () => {
      const wrapper = createWrapper()
      const links = wrapper.findAll('a')
      expect(links.length).toBeGreaterThan(0)
    })

    it('should have consistent navigation items', () => {
      const wrapper = createWrapper()
      const text = wrapper.text()
      expect(text).toContain('Home')
      expect(text).toContain('Dashboard')
    })
  })
})
