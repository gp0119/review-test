import { bubbleSort, selectSort } from './sort'

describe('sort', () => {
  it('bubbleSort is working', () => {
    const arr = [5, 8, 1, 3, 2, 4, 9]
    bubbleSort(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5, 8, 9])
    const arr1 = [2, 1, 3, 5, 4, 3]
    bubbleSort(arr1)
    expect(arr1).toEqual([1, 2, 3, 3, 4, 5])
  })

  it('selectSort is working', () => {
    const arr = [5, 8, 1, 3, 2, 4, 9]
    selectSort(arr)
    expect(arr).toEqual([1, 2, 3, 4, 5, 8, 9])
    const arr1 = [2, 1, 3, 5, 4, 3]
    selectSort(arr1)
    expect(arr1).toEqual([1, 2, 3, 3, 4, 5])
  })
})
