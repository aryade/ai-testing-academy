import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { captureConsoleOutput } from '../src/utils/consoleCapture'

describe('captureConsoleOutput', () => {
  let originalLog

  beforeEach(() => {
    originalLog = console.log
  })

  afterEach(() => {
    console.log = originalLog
  })

  describe('successful execution', () => {
    it('should capture single console.log statement', () => {
      const result = captureConsoleOutput(() => {
        console.log('test message')
      })
      expect(result.logs).toContain('test message')
      expect(result.error).toBeNull()
    })

    it('should capture multiple console.log statements', () => {
      const result = captureConsoleOutput(() => {
        console.log('first')
        console.log('second')
        console.log('third')
      })
      expect(result.logs).toHaveLength(3)
      expect(result.logs).toContain('first')
      expect(result.logs).toContain('second')
      expect(result.logs).toContain('third')
    })

    it('should capture multiple arguments in single log', () => {
      const result = captureConsoleOutput(() => {
        console.log('hello', 'world', '!')
      })
      expect(result.logs[0]).toContain('hello')
      expect(result.logs[0]).toContain('world')
      expect(result.logs[0]).toContain('!')
    })

    it('should stringify objects', () => {
      const result = captureConsoleOutput(() => {
        console.log({ name: 'test', value: 42 })
      })
      expect(result.logs[0]).toContain('name')
      expect(result.logs[0]).toContain('test')
      expect(result.logs[0]).toContain('42')
    })

    it('should handle nested objects', () => {
      const result = captureConsoleOutput(() => {
        console.log({ user: { name: 'John', age: 30 } })
      })
      expect(result.logs[0]).toContain('John')
      expect(result.logs[0]).toContain('30')
    })

    it('should convert numbers to strings', () => {
      const result = captureConsoleOutput(() => {
        console.log(123, 456.789, -42)
      })
      expect(result.logs[0]).toBe('123 456.789 -42')
    })

    it('should convert booleans to strings', () => {
      const result = captureConsoleOutput(() => {
        console.log(true, false)
      })
      expect(result.logs[0]).toContain('true')
      expect(result.logs[0]).toContain('false')
    })

    it('should handle null and undefined', () => {
      const result = captureConsoleOutput(() => {
        console.log(null, undefined)
      })
      expect(result.logs[0]).toContain('null')
      expect(result.logs[0]).toContain('undefined')
    })

    it('should handle arrays', () => {
      const result = captureConsoleOutput(() => {
        console.log([1, 2, 3])
      })
      expect(result.logs[0]).toContain('1')
      expect(result.logs[0]).toContain('2')
      expect(result.logs[0]).toContain('3')
    })
  })

  describe('error handling', () => {
    it('should capture logs even when error occurs', () => {
      const result = captureConsoleOutput(() => {
        console.log('before error')
        throw new Error('test error')
      })
      expect(result.logs).toContain('before error')
      expect(result.error).toBeInstanceOf(Error)
      expect(result.error.message).toBe('test error')
    })

    it('should return error object on exception', () => {
      const result = captureConsoleOutput(() => {
        throw new Error('custom error')
      })
      expect(result.error).toBeDefined()
      expect(result.error.message).toBe('custom error')
    })

    it('should return empty logs if nothing logged before error', () => {
      const result = captureConsoleOutput(() => {
        throw new Error('error')
      })
      expect(result.logs).toHaveLength(0)
      expect(result.error).toBeDefined()
    })
  })

  describe('console.log restoration', () => {
    it('should restore console.log after successful execution', () => {
      captureConsoleOutput(() => {
        console.log('test')
      })
      expect(console.log).toBe(originalLog)
    })

    it('should restore console.log even when error occurs', () => {
      try {
        captureConsoleOutput(() => {
          throw new Error('test')
        })
      } catch (e) {
        // expected
      }
      expect(console.log).toBe(originalLog)
    })

    it('should allow normal logging after capture', () => {
      captureConsoleOutput(() => {
        console.log('first')
      })

      const originalCall = vi.spyOn(console, 'log')
      console.log('second')
      expect(originalCall).toHaveBeenCalledWith('second')
      originalCall.mockRestore()
    })
  })

  describe('edge cases', () => {
    it('should handle empty function', () => {
      const result = captureConsoleOutput(() => {})
      expect(result.logs).toHaveLength(0)
      expect(result.error).toBeNull()
    })

    it('should handle function with only comments', () => {
      const result = captureConsoleOutput(() => {
        // This is a comment
      })
      expect(result.logs).toHaveLength(0)
      expect(result.error).toBeNull()
    })

    it('should handle large objects', () => {
      const largeObj = {}
      for (let i = 0; i < 100; i++) {
        largeObj[`key${i}`] = `value${i}`
      }
      const result = captureConsoleOutput(() => {
        console.log(largeObj)
      })
      expect(result.logs[0]).toContain('key0')
      expect(result.logs[0]).toContain('key99')
    })

    it('should handle circular references by stringifying', () => {
      const obj = { a: 1 }
      obj.self = obj
      const result = captureConsoleOutput(() => {
        try {
          console.log(obj)
        } catch (e) {
          console.log('Circular reference detected')
        }
      })
      expect(result.logs.length).toBeGreaterThan(0)
    })
  })
})
