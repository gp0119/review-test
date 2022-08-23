import EventBus from './eventBus'

describe('EventBus', () => {
  let bus, test
  beforeEach(() => {
    bus = new EventBus()
    test = jest.fn()
  })

  it('$on, $emit正常工作', () => {
    bus.$on('test', test)
    bus.$emit('test')
    expect(test).toHaveBeenCalledTimes(1)
    bus.$emit('test')
    expect(test).toHaveBeenCalledTimes(2)
  })
  it('$emit 能触发多个 $on', () => {
    const test1 = jest.fn()
    bus.$on('test', test)
    bus.$on('test', test1)
    bus.$emit('test')
    expect(test).toBeCalled()
    expect(test1).toBeCalled()
  })
  it('$off 能正常工作', () => {
    bus.$on('test', test)
    bus.$emit('test')
    expect(test).toHaveBeenCalledTimes(1)
    bus.$off('test', test)
    bus.$emit('test')
    bus.$emit('test')
    expect(test).toHaveBeenCalledTimes(1)
  })
  it('$off 不传 callback 会清除所有的 $on', () => {
    const test1 = jest.fn()
    bus.$on('test', test)
    bus.$on('test', test1)
    bus.$emit('test')
    expect(test).toHaveBeenCalledTimes(1)
    expect(test1).toHaveBeenCalledTimes(1)
    bus.$off('test')
    bus.$emit('test')
    bus.$emit('test')
    expect(test).toHaveBeenCalledTimes(1)
    expect(test1).toHaveBeenCalledTimes(1)
  })
  it('$once 能正常工作', () => {
    bus.$once('test', test)
    bus.$emit('test')
    bus.$emit('test')
    expect(test).toHaveBeenCalledTimes(1)
    bus.$emit('test')
    bus.$emit('test')
    expect(test).toHaveBeenCalledTimes(1)
  })
})
