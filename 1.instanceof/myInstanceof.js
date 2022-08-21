export default function myInstanceof(left, right) {
  const rightPrototype = right.prototype
  let leftProto = left.__proto__
  while (true) {
    if (leftProto === null) return false
    if (rightPrototype === leftProto) return true
    leftProto = leftProto.__proto__
  }
}
