import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import ModuleHeader from '../components/ModuleHeader.vue'

describe('ModuleHeader.vue', () => {
  const createWrapper = (props = {}) => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: []
    })

    return mount(ModuleHeader, {
      props: {
        title: 'Module Title',
        description: 'Module Description',
        ...props
      },
      global: {
        plugins: [router]
      }
    })
  }

  describe('props rendering', () => {
    it('should render title prop', () => {
      const wrapper = createWrapper({ title: 'Testing Fundamentals' })
      expect(wrapper.find('h1').text()).toBe('Testing Fundamentals')
    })

    it('should render description prop', () => {
      const wrapper = createWrapper({ description: 'Learn the basics' })
      expect(wrapper.find('p').text()).toContain('Learn the basics')
    })

    it('should render both title and description', () => {
      const wrapper = createWrapper({
        title: 'Advanced Testing',
        description: 'Take your skills further'
      })
      expect(wrapper.text()).toContain('Advanced Testing')
      expect(wrapper.text()).toContain('Take your skills further')
    })
  })

  describe('styling', () => {
    it('should have gradient background', () => {
      const wrapper = createWrapper()
      const div = wrapper.find('div')
      expect(div.classes()).toContain('bg-gradient-to-r')
      expect(div.classes()).toContain('from-indigo-600')
      expect(div.classes()).toContain('to-purple-600')
    })

    it('should have correct padding', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('div').classes()).toContain('py-8')
    })

    it('should have h1 styling', () => {
      const wrapper = createWrapper()
      const h1 = wrapper.find('h1')
      expect(h1.classes()).toContain('text-4xl')
      expect(h1.classes()).toContain('font-bold')
    })

    it('should have description styling', () => {
      const wrapper = createWrapper()
      const p = wrapper.find('p')
      expect(p.classes()).toContain('text-indigo-100')
      expect(p.classes()).toContain('text-lg')
    })
  })

  describe('back button', () => {
    it('should have back to home link', () => {
      const wrapper = createWrapper()
      const link = wrapper.find('a')
      expect(link.exists()).toBe(true)
    })

    it('should navigate to home', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('a').attributes('href')).toBe('/')
    })

    it('should display back arrow', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('←')
    })

    it('should display back text', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Back to Home')
    })

    it('should have hover effects on back button', () => {
      const wrapper = createWrapper()
      const link = wrapper.find('a')
      expect(link.classes()).toContain('hover:text-white')
    })
  })

  describe('layout structure', () => {
    it('should have container max-width', () => {
      const wrapper = createWrapper()
      const container = wrapper.find('.max-w-6xl')
      expect(container.exists()).toBe(true)
    })

    it('should have proper margin on title', () => {
      const wrapper = createWrapper()
      const h1 = wrapper.find('h1')
      expect(h1.classes()).toContain('mt-4')
    })

    it('should have proper margin on description', () => {
      const wrapper = createWrapper()
      const p = wrapper.find('p')
      expect(p.classes()).toContain('mt-2')
    })

    it('should have margin on back button', () => {
      const wrapper = createWrapper()
      const link = wrapper.find('a')
      expect(link.classes()).toContain('mb-4')
    })
  })

  describe('semantic HTML', () => {
    it('should use h1 for main title', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('h1').exists()).toBe(true)
    })

    it('should use p for description', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('p').exists()).toBe(true)
    })

    it('should have RouterLink for navigation', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('a').exists()).toBe(true)
    })
  })

  describe('content display', () => {
    it('should display long titles correctly', () => {
      const longTitle = 'This is a very long module title that should still display correctly'
      const wrapper = createWrapper({ title: longTitle })
      expect(wrapper.find('h1').text()).toBe(longTitle)
    })

    it('should display multiline descriptions', () => {
      const wrapper = createWrapper({
        description: 'First line\nSecond line\nThird line'
      })
      expect(wrapper.find('p').text()).toContain('First line')
    })

    it('should handle special characters', () => {
      const wrapper = createWrapper({
        title: 'Module #1: Testing & QA',
        description: 'Learn "Real-world" testing!'
      })
      expect(wrapper.text()).toContain('Module #1: Testing & QA')
      expect(wrapper.text()).toContain('Learn "Real-world" testing!')
    })
  })
})
