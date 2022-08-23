class EventBus {
  constructor() {
    this.tasks = {}
  }
  $on(name, callback) {
    if (!this.tasks[name]) {
      this.tasks[name] = []
    }
    if (isFunction(callback)) {
      this.tasks[name].push(callback)
    }
  }
  $emit(name) {
    const tasks = this.tasks[name]
    if (!tasks.length) return
    tasks.forEach((callback) => callback())
  }
  $off(name, callback) {
    if (this.tasks[name] === undefined) return
    if (!callback) this.tasks[name] = []
    if (isFunction(callback)) {
      const index = this.tasks[name].indexOf(callback)
      if (index > -1) {
        this.tasks[name].splice(index, 1)
      }
    }
  }
  $once(name, callback) {
    const fn = (...args) => {
      this.$off(name, fn)
      callback(...args)
    }
    if (isFunction(callback)) {
      this.$on(name, fn)
    }
  }
}

function isFunction(fn) {
  return typeof fn === 'function'
}

export default EventBus
