import myInstanceof from './myInstanceof.review.js'

it('数字1不是Array', () => {
  const result = myInstanceof(1, Array)
  expect(result).toBe(false)
})

it('对象{a: 1}是对象', () => {
  const result = myInstanceof({ a: 1 }, Object)
  expect(result).toBe(true)
})

it('数组[1]是对象', () => {
  const result = myInstanceof([1], Object)
  expect(result).toBe(true)
})

it('child是Parent的实例', () => {
  function Parent() {}
  const child = new Parent()
  const result = myInstanceof(child, Parent)
  expect(result).toBe(true)
})
