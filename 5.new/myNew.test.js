import myNew from './myNew.js'

it('可以访问到构造函数里的属性', () => {
  function Parent(name, age) {
    this.name = name
    this.age = age
    this.habit = 'Games'
  }
  const child = myNew(Parent, 'Kevin', '18')
  expect(child.habit).toBe('Games')
})

it('this指向新建的实例', () => {
  function Parent(name, age) {
    this.name = name
    this.age = age
    this.habit = 'Games'
  }
  const child = myNew(Parent, 'Kevin', '18')
  expect(child.name).toBe('Kevin')
})

it('可以访问到构造函数原型中的属性', () => {
  function Parent(name, age) {
    this.name = name
    this.age = age
    this.habit = 'Games'
  }
  Parent.prototype.strength = 60
  Parent.prototype.sayYourName = function () {
    return 'I am ' + this.name
  }
  const child = myNew(Parent, 'Kevin', '18')
  expect(child.strength).toBe(60)
  expect(child.sayYourName()).toBe('I am Kevin')
})

it('当构造函数返回了一个对象，在实例中只能访问返回的对象中的属性 ', () => {
  function Parent(name, age) {
    this.strength = 60
    this.age = age
    return {
      name: name,
      habit: 'Games',
    }
  }

  const child = myNew(Parent, 'Kevin', '18')
  expect(child.name).toBe('Kevin')
  expect(child.habit).toBe('Games')
  expect(child.strength).toBe(undefined)
  expect(child.age).toBe(undefined)
})

it('当构造函数返回了基本类型的值，会被忽略 ', () => {
  function Parent(name, age) {
    this.strength = 60
    this.age = age
    this.name = name
    return 'handsome boy'
  }
  const child = myNew(Parent, 'Kevin', '18')
  expect(child.name).toBe('Kevin')
  expect(child.strength).toBe(60)
  expect(child.age).toBe('18')
})
