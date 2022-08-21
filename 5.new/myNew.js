export default function myNew(constructor, ...args) {
  const obj = {}
  obj.__proto__ = constructor.prototype
  const result = constructor.call(obj, ...args)
  return typeof result === 'object' ? result : obj
}
