export default function myCall(context, ...args) {
  context = context ? Object(context) : window
  let fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}
