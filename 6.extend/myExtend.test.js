import myExtend from './myExtend.js'

it('Child 的实例可以调用 Parent的属性和方法', () => {
  function Parent() {
    this.name = 'kevin'
    this.colors = ['red', 'blue', 'green']
  }
  Parent.prototype.getName = function () {
    return this.name
  }
  function Child(name, age) {
    Parent.call(this, name)
    this.age = age
  }

  myExtend(Parent, Child)
  const child1 = new Child('kevin')
  expect(child1.colors).toBeTruthy()
})

it('引用类型的属性不会被所有实例共享', () => {
  function Parent() {
    this.name = 'kevin'
    this.colors = ['red', 'blue', 'green']
  }
  Parent.prototype.getName = function () {
    return this.name
  }
  function Child(name, age) {
    Parent.call(this, name)
    this.age = age
  }

  myExtend(Parent, Child)
  const child1 = new Child()
  child1.colors.push('black')
  const child2 = new Child()
  expect(child2.colors.length).toBe(3)
})

it('在创建 Child 的实例时，可以向Parent传参', () => {
  function Parent() {
    this.name = 'kevin'
    this.colors = ['red', 'blue', 'green']
  }
  Parent.prototype.getName = function () {
    return this.name
  }
  function Child(name, age) {
    Parent.call(this, name)
    this.age = age
  }

  myExtend(Parent, Child)
  const child1 = new Child('kevin')
  expect(child1.name).toBe('kevin')
})

it('在创建Child的实例只会调用一次父构造函数', () => {
  const Parent = jest.fn()
  Parent.prototype.getName = function () {
    return this.name
  }
  function Child(name, age) {
    Parent.call(this, name)
    this.age = age
  }

  myExtend(Parent, Child)
  const child1 = new Child('kevin')
  expect(Parent).toBeCalledTimes(1)
})
