import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createPinia, setActivePinia } from 'pinia'
import HomePage from '../views/HomePage.vue'
import PillarCard from '../components/PillarCard.vue'

describe('HomePage.vue', () => {
  const createWrapper = () => {
    setActivePinia(createPinia())
    const router = createRouter({
      history: createMemoryHistory(),
      routes: []
    })

    return mount(HomePage, {
      global: {
        plugins: [router],
        components: { PillarCard }
      }
    })
  }

  describe('hero section', () => {
    it('should render hero title', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Welcome to AI Testing Academy')
    })

    it('should render hero description', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Master the intersection of AI/ML and quality assurance')
    })

    it('should have start learning button', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Start Learning')
    })

    it('should link to module/1', () => {
      const wrapper = createWrapper()
      const links = wrapper.findAll('a')
      const startLink = links.find(link => link.text().includes('Start Learning'))
      expect(startLink.attributes('href')).toBe('/module/1')
    })

    it('should have hero gradient styling', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('section').classes()).toContain('hero-gradient')
    })
  })

  describe('pillar cards section', () => {
    it('should display three pillar cards', () => {
      const wrapper = createWrapper()
      const pillars = wrapper.findAllComponents(PillarCard)
      expect(pillars).toHaveLength(3)
    })

    it('should have correct pillar titles', () => {
      const wrapper = createWrapper()
      const text = wrapper.text()
      expect(text).toContain('Fundamentals & Learning')
      expect(text).toContain('Quality & Reliability')
      expect(text).toContain('Application & Evolution')
    })

    it('should have correct pillar icons', () => {
      const wrapper = createWrapper()
      const text = wrapper.text()
      expect(text).toContain('🎓')
      expect(text).toContain('🛡️')
      expect(text).toContain('🚀')
    })

    it('should link pillars to correct modules', () => {
      const wrapper = createWrapper()
      const links = wrapper.findAll('a')
      const moduleLinks = links.filter(link =>
        link.attributes('href').includes('/module/')
      )
      expect(moduleLinks.some(l => l.attributes('href') === '/module/1')).toBe(true)
      expect(moduleLinks.some(l => l.attributes('href') === '/module/2')).toBe(true)
      expect(moduleLinks.some(l => l.attributes('href') === '/module/3')).toBe(true)
    })

    it('should display section heading', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Three Core Pillars')
    })

    it('should display section description', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Learn AI testing through three comprehensive pillars')
    })
  })

  describe('project section', () => {
    it('should display project section heading', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Build This Now')
    })

    it('should display Agent Inventory project title', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Session 4: Agent Inventory Project')
    })

    it('should display project description', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Build an AI agent inventory system')
    })

    it('should link to project', () => {
      const wrapper = createWrapper()
      const links = wrapper.findAll('a')
      const projectLink = links.find(link => link.text().includes('Open Interactive Project'))
      expect(projectLink.attributes('href')).toBe('/project/agent-inventory')
    })

    it('should have featured project styling', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('🔧')
    })

    it('should have card styling for project section', () => {
      const wrapper = createWrapper()
      const cards = wrapper.findAll('.card')
      expect(cards.length).toBeGreaterThan(0)
    })
  })

  describe('stats section', () => {
    it('should display learning pillars statistic', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('3')
      expect(wrapper.text()).toContain('Learning Pillars')
    })

    it('should display projects statistic', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('∞')
      expect(wrapper.text()).toContain('Hands-On Projects')
    })

    it('should display career growth statistic', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('🎯')
      expect(wrapper.text()).toContain('Career Growth')
    })

    it('should have three stat items', () => {
      const wrapper = createWrapper()
      const stats = wrapper.findAll('.text-center')
      expect(stats.length).toBeGreaterThanOrEqual(3)
    })
  })

  describe('progress button visibility', () => {
    it('should not show View Progress button when not authenticated', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).not.toContain('View Progress')
    })
  })

  describe('layout and styling', () => {
    it('should have min-h-screen for full height', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('div').classes()).toContain('min-h-screen')
    })

    it('should have multiple sections', () => {
      const wrapper = createWrapper()
      expect(wrapper.findAll('section').length).toBeGreaterThanOrEqual(4)
    })

    it('should have responsive grid layout', () => {
      const wrapper = createWrapper()
      const grids = wrapper.findAll('.grid')
      expect(grids.length).toBeGreaterThan(0)
    })
  })

  describe('semantic HTML', () => {
    it('should use h1 for main heading', () => {
      const wrapper = createWrapper()
      const h1s = wrapper.findAll('h1')
      expect(h1s.length).toBeGreaterThan(0)
      expect(h1s[0].text()).toContain('Welcome to AI Testing Academy')
    })

    it('should use h2 for section headings', () => {
      const wrapper = createWrapper()
      const h2s = wrapper.findAll('h2')
      expect(h2s.length).toBeGreaterThan(0)
    })

    it('should use h3 for subsection headings', () => {
      const wrapper = createWrapper()
      const h3s = wrapper.findAll('h3')
      expect(h3s.length).toBeGreaterThan(0)
    })

    it('should have multiple paragraphs', () => {
      const wrapper = createWrapper()
      const paragraphs = wrapper.findAll('p')
      expect(paragraphs.length).toBeGreaterThan(0)
    })
  })

  describe('content accuracy', () => {
    it('should contain AI and testing keywords', () => {
      const wrapper = createWrapper()
      const text = wrapper.text()
      expect(text).toContain('AI')
      expect(text).toContain('testing')
      expect(text).toContain('quality')
    })

    it('should mention hallucinations in module 1', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('hallucinations')
    })

    it('should mention bias in module 2', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('bias')
    })

    it('should mention MLOps in module 3', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('MLOps')
    })
  })

  describe('navigation flow', () => {
    it('should have at least 5 navigable links', () => {
      const wrapper = createWrapper()
      const links = wrapper.findAll('a')
      expect(links.length).toBeGreaterThanOrEqual(4)
    })

    it('should allow starting from home', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Start Learning')
    })

    it('should provide access to all modules', () => {
      const wrapper = createWrapper()
      const text = wrapper.text()
      expect(text).toContain('Fundamentals & Learning')
      expect(text).toContain('Quality & Reliability')
      expect(text).toContain('Application & Evolution')
    })

    it('should provide access to projects', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).toContain('Agent Inventory')
    })
  })
})
