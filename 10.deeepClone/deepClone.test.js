import { deepClone } from './deepClone'

describe('deepClone', () => {
  it('基本功能', () => {
    const target = {
      field1: 1,
      field2: undefined,
      field3: 'ConardLi',
      field4: {
        child: 'child',
        child2: {
          child2: 'child2',
        },
      },
    }
    const result = deepClone(target)
    expect(result).toEqual(target)
  })

  it('考虑数组', () => {
    const target = {
      field1: 1,
      field2: undefined,
      field3: {
        child: 'child',
      },
      field4: [2, 4, 8],
    }
    const result = deepClone(target)
    expect(result).toEqual(target)
  })

  it('循环引用', () => {
    const target = {
      field1: 1,
      field2: undefined,
      field3: {
        child: 'child',
      },
      field4: [2, 4, 8],
    }
    target.target = target
    const result = deepClone(target)
    expect(result).toEqual(target)
  })
})
