export default function myBind(context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('type error')
  }
  const fn = this
  function newFn(...rest) {
    if (this instanceof newFn) {
      return new fn(...args, ...rest)
    } else {
      return fn.call(context, ...args, ...rest)
    }
  }
  return newFn
}
