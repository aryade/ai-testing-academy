import { describe, it, expect } from 'vitest'
import {
  MODULE_CONFIG,
  PROJECT_CONFIG,
  TEMPLATE_TYPES,
  LESSONS_PER_MODULE,
  TOTAL_MODULES,
  PROJECTS_COUNT,
  TOTAL_PROGRESS_ITEMS
} from '../src/constants/config'

describe('config constants', () => {
  describe('MODULE_CONFIG', () => {
    it('should have 3 modules defined', () => {
      expect(Object.keys(MODULE_CONFIG)).toHaveLength(3)
    })

    it('module1 should have correct properties', () => {
      expect(MODULE_CONFIG.module1).toHaveProperty('id', 'module1')
      expect(MODULE_CONFIG.module1).toHaveProperty('title', 'Fundamentals & Learning')
      expect(MODULE_CONFIG.module1).toHaveProperty('lessonsPerModule', 5)
    })

    it('module2 should have correct properties', () => {
      expect(MODULE_CONFIG.module2).toHaveProperty('id', 'module2')
      expect(MODULE_CONFIG.module2).toHaveProperty('title', 'Quality & Reliability')
      expect(MODULE_CONFIG.module2).toHaveProperty('lessonsPerModule', 5)
    })

    it('module3 should have correct properties', () => {
      expect(MODULE_CONFIG.module3).toHaveProperty('id', 'module3')
      expect(MODULE_CONFIG.module3).toHaveProperty('title', 'Application & Evolution')
      expect(MODULE_CONFIG.module3).toHaveProperty('lessonsPerModule', 5)
    })

    it('all modules should have lessonsPerModule = 5', () => {
      Object.values(MODULE_CONFIG).forEach(module => {
        expect(module.lessonsPerModule).toBe(5)
      })
    })
  })

  describe('PROJECT_CONFIG', () => {
    it('should have agentInventory project defined', () => {
      expect(PROJECT_CONFIG).toHaveProperty('agentInventory')
    })

    it('agentInventory should have correct properties', () => {
      expect(PROJECT_CONFIG.agentInventory).toHaveProperty('id', 'agent-inventory')
      expect(PROJECT_CONFIG.agentInventory).toHaveProperty('title', 'Session 4: Agent Inventory')
      expect(PROJECT_CONFIG.agentInventory).toHaveProperty('weight', 1)
    })
  })

  describe('TEMPLATE_TYPES', () => {
    it('should have BASIC template type', () => {
      expect(TEMPLATE_TYPES.BASIC).toBe('basic')
    })

    it('should have ADVANCED template type', () => {
      expect(TEMPLATE_TYPES.ADVANCED).toBe('advanced')
    })

    it('should have exactly 2 template types', () => {
      expect(Object.keys(TEMPLATE_TYPES)).toHaveLength(2)
    })
  })

  describe('numeric constants', () => {
    it('LESSONS_PER_MODULE should be 5', () => {
      expect(LESSONS_PER_MODULE).toBe(5)
    })

    it('TOTAL_MODULES should be 3', () => {
      expect(TOTAL_MODULES).toBe(3)
    })

    it('PROJECTS_COUNT should be 1', () => {
      expect(PROJECTS_COUNT).toBe(1)
    })
  })

  describe('TOTAL_PROGRESS_ITEMS calculation', () => {
    it('should calculate total progress items correctly', () => {
      const expected = (LESSONS_PER_MODULE * TOTAL_MODULES) + PROJECTS_COUNT
      expect(TOTAL_PROGRESS_ITEMS).toBe(expected)
    })

    it('should equal 16 (5*3 + 1)', () => {
      expect(TOTAL_PROGRESS_ITEMS).toBe(16)
    })
  })

  describe('consistency checks', () => {
    it('MODULE_CONFIG lessonsPerModule should match LESSONS_PER_MODULE', () => {
      Object.values(MODULE_CONFIG).forEach(module => {
        expect(module.lessonsPerModule).toBe(LESSONS_PER_MODULE)
      })
    })

    it('MODULE_CONFIG count should match TOTAL_MODULES', () => {
      expect(Object.keys(MODULE_CONFIG)).toHaveLength(TOTAL_MODULES)
    })
  })
})
