import { myAll } from './promise.all'

Promise.myAll = myAll
jest.useFakeTimers()
describe('promise.all', () => {
  it('should work', () => {
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1)
      }, 1000)
    })
    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2)
      }, 2000)
    })
    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(3)
      }, 3000)
    })
    const p = Promise.myAll([p1, p2, p3])
    jest.advanceTimersByTime(3000)
    return expect(p).resolves.toEqual([1, 2, 3])
  })
})
