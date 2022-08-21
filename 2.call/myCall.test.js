import myCall from './myCall.js'

Function.prototype.myCall = myCall

it('call 改变了 this 的指向', () => {
  const foo = { value: 1 }
  let result
  function bar() {
    result = this.value
  }
  bar.myCall(foo)
  expect(result).toBe(1)
})

it('this 参数可以传 null，当为 null 的时候，视为指向 window ', () => {
  let result
  function bar() {
    result = this
  }
  bar.myCall(null)
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
  const result = bar.myCall(obj, 'kevin', 18)
  expect(result.name).toBe('kevin')
})

it('当 this 参数不是对象的时候, 会被转成对象', () => {
  let result
  function bar() {
    result = typeof this
  }
  bar.myCall(1)
  expect(result).toBe('object')
})
