export const deepClone = function (obj, map = new Map()) {
  if (typeof obj !== 'object') return obj
  let result = {}
  if (obj instanceof Array) result = []
  if (map.get(obj)) {
    return map.get(obj)
  }
  map.set(obj, result)
  for (const key in obj) {
    result[key] = deepClone(obj[key], map)
  }
  return result
}
