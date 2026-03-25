import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import PillarCard from '../components/PillarCard.vue'

describe('PillarCard.vue', () => {
  const createWrapper = (props = {}) => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: []
    })

    return mount(PillarCard, {
      props: {
        title: 'Test Title',
        description: 'Test Description',
        icon: '📚',
        link: '/test',
        ...props
      },
      global: {
        plugins: [router]
      }
    })
  }

  describe('props validation', () => {
    it('should render with required props', () => {
      const wrapper = createWrapper()
      expect(wrapper.exists()).toBe(true)
    })

    it('should display title prop', () => {
      const wrapper = createWrapper({ title: 'My Title' })
      expect(wrapper.text()).toContain('My Title')
    })

    it('should display description prop', () => {
      const wrapper = createWrapper({ description: 'My Description' })
      expect(wrapper.text()).toContain('My Description')
    })

    it('should display icon prop', () => {
      const wrapper = createWrapper({ icon: '🎓' })
      expect(wrapper.text()).toContain('🎓')
    })

    it('should have correct link', () => {
      const wrapper = createWrapper({ link: '/dashboard' })
      expect(wrapper.find('a').attributes('href')).toBe('/dashboard')
    })
  })

  describe('styling', () => {
    it('should have card class', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('a').classes()).toContain('card')
    })

    it('should have hover effects', () => {
      const wrapper = createWrapper()
      const link = wrapper.find('a')
      expect(link.classes()).toContain('group')
      expect(link.classes()).toContain('hover:scale-105')
      expect(link.classes()).toContain('transform')
    })

    it('should have padding', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('a').classes()).toContain('p-8')
    })

    it('should display text correctly', () => {
      const wrapper = createWrapper({ icon: '📖' })
      const iconDiv = wrapper.find('div.text-5xl')
      expect(iconDiv.text()).toBe('📖')
    })
  })

  describe('content structure', () => {
    it('should have Explore button text', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Explore')
    })

    it('should have arrow indicator', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('→')
    })

    it('should organize content correctly', () => {
      const wrapper = createWrapper({
        title: 'Learning Module',
        description: 'Learn testing fundamentals',
        icon: '📚'
      })
      const text = wrapper.text()
      expect(text).toContain('📚')
      expect(text).toContain('Learning Module')
      expect(text).toContain('Learn testing fundamentals')
      expect(text).toContain('Explore')
    })
  })

  describe('RouterLink integration', () => {
    it('should be a RouterLink component', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('a').exists()).toBe(true)
    })

    it('should navigate to correct route', () => {
      const wrapper = createWrapper({ link: '/modules/1' })
      expect(wrapper.find('a').attributes('href')).toBe('/modules/1')
    })

    it('should handle multiple different links', () => {
      const links = ['/module1', '/module2', '/project']
      links.forEach(link => {
        const wrapper = createWrapper({ link })
        expect(wrapper.find('a').attributes('href')).toBe(link)
      })
    })
  })

  describe('accessibility', () => {
    it('should have semantic heading', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('h3').exists()).toBe(true)
    })

    it('should have descriptive text', () => {
      const wrapper = createWrapper({ description: 'Description text' })
      expect(wrapper.find('p').exists()).toBe(true)
      expect(wrapper.find('p').text()).toContain('Description text')
    })
  })
})
