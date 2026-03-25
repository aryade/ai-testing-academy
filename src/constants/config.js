/**
 * Application configuration constants
 */

export const MODULE_CONFIG = {
  module1: {
    id: 'module1',
    title: 'Fundamentals & Learning',
    lessonsPerModule: 5
  },
  module2: {
    id: 'module2',
    title: 'Quality & Reliability',
    lessonsPerModule: 5
  },
  module3: {
    id: 'module3',
    title: 'Application & Evolution',
    lessonsPerModule: 5
  }
}

export const PROJECT_CONFIG = {
  agentInventory: {
    id: 'agent-inventory',
    title: 'Session 4: Agent Inventory',
    weight: 1
  }
}

export const TEMPLATE_TYPES = {
  BASIC: 'basic',
  ADVANCED: 'advanced'
}

export const LESSONS_PER_MODULE = 5
export const TOTAL_MODULES = 3
export const PROJECTS_COUNT = 1

export const TOTAL_PROGRESS_ITEMS = (LESSONS_PER_MODULE * TOTAL_MODULES) + PROJECTS_COUNT
