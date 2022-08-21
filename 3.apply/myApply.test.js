import myApply from './myApply.js'

Function.prototype.myApply = myApply

it('apply 改变了 this 的指向', () => {
  const foo = { value: 1 }
  let result
  function bar() {
    result = this.value
  }
  bar.myApply(foo)
  expect(result).toBe(1)
})

it('this 参数可以传 null，当为 null 的时候，视为指向 window ', () => {
  let result
  function bar() {
    result = this
  }
  bar.myApply(null)
  expect(result).toBe(window)
})

it('函数是可以有返回值的', () => {
  const obj = { value: 1 }
  function bar(name, age) {
    return {
      value: this.value,
      name: name,
      age: age,
    }
  }
  const result = bar.myApply(obj, ['kevin', 18])
  expect(result.name).toBe('kevin')
})

it('当 this 参数不是对象的时候, 会被转成对象', () => {
  let result
  function bar() {
    result = typeof this
  }
  bar.myApply(1)
  expect(result).toBe('object')
})
