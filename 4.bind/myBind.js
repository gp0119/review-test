export default function myBind(context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('type error')
  }
  const fn = this
  return function newBound(...rest) {
    if (fn instanceof newBound) {
      return new newBound(...args, ...rest)
    } else {
      return fn.call(this, ...args, ...rest)
    }
  }
}
