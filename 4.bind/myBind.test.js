import myBind from './myBind.js'

Function.prototype.myBind = myBind
it('当调用 bind 的不是函数, 会报错', () => {
  const a = 1
  const foo = {
    value: 1,
  }
  const t = () => {
    a.myBind(foo)()
  }
  expect(t).toThrow(Error)
})

it('返回的是一个函数', () => {
  const foo = {
    value: 1,
  }
  function bar(name, age) {
    console.log(this.value)
    console.log(name)
    console.log(age)
  }
  const bindFoo = bar.myBind(foo, 'daisy')
  expect(typeof bindFoo).toBe('function')
})

it('可以绑定this', () => {
  const foo = {
    value: 1,
  }
  let _value
  function bar(name, age) {
    _value = this.value
  }
  const bindFoo = bar.myBind(foo, 'daisy')
  bindFoo()
  expect(_value).toBe(1)
})

it('可以分开传参, bind的传一部分参数, 调用的时候传另一部分参数', () => {
  const foo = {
    value: 1,
  }
  let _name, _age
  function bar(name, age) {
    _name = name
    _age = age
  }
  const bindFoo = bar.myBind(foo, 'daisy')
  bindFoo(18)
  expect(_name).toBe('daisy')
  expect(_age).toBe(18)
})

it('当 bind 返回的函数作为构造函数的时候，bind 时指定的 this 值会失效，但传入的参数依然生效', () => {
  const value = 2
  const foo = { value: 1 }
  let _value

  function Bar(name, age) {
    this.habit = 'shopping'
    _value = this.value
    this.name = name
    this.age = age
  }

  Bar.prototype.friend = 'kevin'
  const bindFoo = Bar.myBind(foo, 'daisy')
  const obj = new bindFoo('18')
  const _name = obj.name
  const _age = obj.age
  const _habit = obj.habit
  const _friend = obj.friend

  expect(_value).toBe(undefined)
  expect(_name).toBe('daisy')
  expect(_age).toBe('18')
  expect(_habit).toBe('shopping')
  expect(_friend).toBe('kevin')
})
