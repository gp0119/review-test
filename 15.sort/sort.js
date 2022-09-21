function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}
export const bubbleSort = function (arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j)
      }
    }
  }
}

export const selectSort = function (arr) {
  let arrLength = arr.length
  for (let i = 0; i < arrLength; i++) {
    for (let j = i; j < arrLength; j++) {
      if (arr[j] < arr[i]) {
        swap(arr, i, j)
      }
    }
  }
}

export const insertSort = function (arr) {}

export const mergeSort = function (arr) {}

export const quickSort = function (arr) {}
