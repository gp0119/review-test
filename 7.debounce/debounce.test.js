import { debounce, debounce1, debounce2 } from './debounce.js'

jest.useFakeTimers()
it('频繁触发只会执行一次', () => {
  const test = jest.fn()
  const debouncedFunc = debounce(test, 1000)

  for (let i = 0; i < 100; i++) {
    debouncedFunc()
  }

  jest.runAllTimers()

  expect(test).toHaveBeenCalledTimes(1)
})

it('this 指向不会改变', () => {
  let result
  function fn() {
    result = this.value
  }
  const obj = {
    value: 1,
    debouncedFn: debounce(fn, 1000),
  }

  obj.debouncedFn()
  jest.runAllTimers()
  expect(result).toBe(1)
})

it('参数不会改变', () => {
  let result
  function fn(name) {
    result = name
  }
  const debouncedFn = debounce(fn, 1000)
  debouncedFn(1)
  jest.runAllTimers()
  expect(result).toBe(1)
})

it('立刻执行: 首次会立刻执行, 之后连续触发不会执行,停止触发N秒后才执行', () => {
  const test = jest.fn()
  const debouncedFunc = debounce1(test, 1000, true)

  for (let i = 0; i < 10; i++) {
    debouncedFunc()
  }
  jest.runAllTimers()
  expect(test).toHaveBeenCalledTimes(2)
})

it('立刻执行: 首次会立刻执行, 之后连续触发不执行, 停止触发N秒后也不会执行', () => {
  const test = jest.fn()
  const debouncedFunc = debounce2(test, 1000, true)

  for (let i = 0; i < 10; i++) {
    debouncedFunc()
  }
  jest.runAllTimers()
  expect(test).toHaveBeenCalledTimes(1)
})
