export default function myApply(context, arr) {
  context = context ? Object(context) : window
  const fn = Symbol()
  context[fn] = this
  let result
  if (!arr) {
    result = context[fn]()
  } else {
    result = context[fn](...arr)
  }
  return result
}
