/**
 * Utility for capturing console.log output
 */

export function captureConsoleOutput(fn) {
  const logs = []
  const originalLog = console.log

  try {
    console.log = function(...args) {
      logs.push(args.map(arg => {
        if (typeof arg === 'object') {
          return JSON.stringify(arg, null, 2)
        }
        return String(arg)
      }).join(' '))
    }

    fn()

    return { logs, error: null }
  } catch (error) {
    return { logs, error }
  } finally {
    // CRITICAL: Always restore console.log, even if error occurs
    console.log = originalLog
  }
}
