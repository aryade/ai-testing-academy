import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LessonContent from '../components/LessonContent.vue'

describe('LessonContent.vue', () => {
  const createWrapper = (props = {}, slots = {}) => {
    return mount(LessonContent, {
      props: {
        title: 'Lesson Title',
        description: 'Lesson Description',
        ...props
      },
      slots: {
        default: '<p>Lesson content goes here</p>',
        ...slots
      }
    })
  }

  describe('props rendering', () => {
    it('should render title prop', () => {
      const wrapper = createWrapper({ title: 'Introduction' })
      expect(wrapper.find('h3').text()).toBe('Introduction')
    })

    it('should render description prop', () => {
      const wrapper = createWrapper({ description: 'Learn the basics' })
      expect(wrapper.find('p').text()).toBe('Learn the basics')
    })

    it('should have default empty description', () => {
      const wrapper = createWrapper({ title: 'Test' })
      expect(wrapper.props('description')).toBe('')
    })
  })

  describe('slot content', () => {
    it('should render slot content', () => {
      const wrapper = createWrapper(
        { title: 'Test' },
        { default: '<p>Custom content</p>' }
      )
      expect(wrapper.text()).toContain('Custom content')
    })

    it('should render multiple slot elements', () => {
      const wrapper = createWrapper(
        { title: 'Test' },
        { default: '<h4>Heading</h4><p>Paragraph</p>' }
      )
      expect(wrapper.text()).toContain('Heading')
      expect(wrapper.text()).toContain('Paragraph')
    })

    it('should render complex HTML in slot', () => {
      const wrapper = createWrapper(
        { title: 'Test' },
        { default: '<ul><li>Item 1</li><li>Item 2</li></ul>' }
      )
      expect(wrapper.text()).toContain('Item 1')
      expect(wrapper.text()).toContain('Item 2')
    })
  })

  describe('completion status', () => {
    it('should initially not show completed checkmark', () => {
      const wrapper = createWrapper()
      expect(wrapper.text()).not.toContain('✅')
    })

    it('should show completed checkmark after marking as complete', async () => {
      const wrapper = createWrapper({ onComplete: vi.fn() })
      const button = wrapper.find('button')
      await button.trigger('click')
      expect(wrapper.text()).toContain('✅')
    })

    it('should display initial button text', () => {
      const wrapper = createWrapper({ onComplete: vi.fn() })
      expect(wrapper.find('button').text()).toBe('Mark as Complete')
    })

    it('should update button text after completion', async () => {
      const wrapper = createWrapper({ onComplete: vi.fn() })
      await wrapper.find('button').trigger('click')
      expect(wrapper.find('button').text()).toBe('Completed ✓')
    })
  })

  describe('onComplete callback', () => {
    it('should call onComplete when button is clicked', async () => {
      const onComplete = vi.fn()
      const wrapper = createWrapper({ onComplete })
      await wrapper.find('button').trigger('click')
      expect(onComplete).toHaveBeenCalled()
    })

    it('should call onComplete only once per click', async () => {
      const onComplete = vi.fn()
      const wrapper = createWrapper({ onComplete })
      const button = wrapper.find('button')
      await button.trigger('click')
      expect(onComplete).toHaveBeenCalledTimes(1)
    })

    it('should not show button if onComplete is not provided', () => {
      const wrapper = createWrapper({ onComplete: null })
      expect(wrapper.find('button').exists()).toBe(false)
    })

    it('should disable button after clicking', async () => {
      const wrapper = createWrapper({ onComplete: vi.fn() })
      const button = wrapper.find('button')
      expect(button.attributes('disabled')).toBeUndefined()
      await button.trigger('click')
      expect(button.attributes('disabled')).toBeDefined()
    })
  })

  describe('button behavior', () => {
    it('should have button with primary class', () => {
      const wrapper = createWrapper({ onComplete: vi.fn() })
      expect(wrapper.find('button').classes()).toContain('btn-primary')
    })

    it('should disable button when completed', async () => {
      const wrapper = createWrapper({ onComplete: vi.fn() })
      expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
      await wrapper.find('button').trigger('click')
      expect(wrapper.find('button').element.disabled).toBe(true)
    })

    it('should keep button visible after completion', async () => {
      const wrapper = createWrapper({ onComplete: vi.fn() })
      await wrapper.find('button').trigger('click')
      expect(wrapper.find('button').exists()).toBe(true)
    })
  })

  describe('styling and structure', () => {
    it('should have card styling', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('div').classes()).toContain('card')
    })

    it('should have proper padding', () => {
      const wrapper = createWrapper()
      expect(wrapper.find('div').classes()).toContain('p-6')
    })

    it('should have h3 for title', () => {
      const wrapper = createWrapper({ title: 'Test Title' })
      expect(wrapper.find('h3').exists()).toBe(true)
      expect(wrapper.find('h3').text()).toBe('Test Title')
    })

    it('should flex layout for title and completion', () => {
      const wrapper = createWrapper({ title: 'Test' })
      const flexDiv = wrapper.find('.flex')
      expect(flexDiv.exists()).toBe(true)
    })
  })

  describe('multiple completions', () => {
    it('should handle marking multiple lessons as complete', async () => {
      const onComplete = vi.fn()
      const wrapper = createWrapper({ onComplete })

      await wrapper.find('button').trigger('click')
      expect(onComplete).toHaveBeenCalledTimes(1)

      // Try to click again (should be disabled)
      await wrapper.find('button').trigger('click')
      expect(onComplete).toHaveBeenCalledTimes(1)
    })

    it('should not allow re-completion', async () => {
      const onComplete = vi.fn()
      const wrapper = createWrapper({ onComplete })

      await wrapper.find('button').trigger('click')
      expect(wrapper.find('button').element.disabled).toBe(true)
    })
  })

  describe('content variants', () => {
    it('should handle title with special characters', () => {
      const wrapper = createWrapper({ title: 'Lesson #1: Testing & QA' })
      expect(wrapper.find('h3').text()).toBe('Lesson #1: Testing & QA')
    })

    it('should handle long descriptions', () => {
      const longDesc = 'This is a very long description that explains the lesson in great detail with lots of information'
      const wrapper = createWrapper({ description: longDesc })
      expect(wrapper.text()).toContain(longDesc)
    })

    it('should handle empty slot', () => {
      const wrapper = createWrapper({ title: 'Test' }, { default: '' })
      expect(wrapper.find('h3').exists()).toBe(true)
    })
  })
})
