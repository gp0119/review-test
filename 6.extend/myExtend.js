export default function myExtend(Parent, Child) {
  function Fn() {}
  Fn.prototype = Parent.prototype
  Child.prototype = new Fn()
  Child.prototype.constructor = Child
}
