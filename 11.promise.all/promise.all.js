export const myAll = (list) => {
  let count = 0
  let result = []
  return new Promise((resolve, reject) => {
    for (let i = 0; i < list.length; i++) {
      Promise.resolve(list[i])
        .then((res) => {
          count++
          result[i] = res
          if (count === list.length) {
            resolve(result)
          }
        })
        .catch((err) => {
          reject(err)
        })
    }
  })
}
