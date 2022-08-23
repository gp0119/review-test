// 时间戳方法, 首次会立马执行, 之后隔N秒执行一次
export function throttle(fn, wait) {
  let previous = 0
  return function (...args) {
    let now = new Date().valueOf()
    if (now - previous >= wait) {
      fn.call(this, ...args)
      previous = now
    }
  }
}

// 定时函数方法, 首次不会马上执行, N秒后才会执行, 停止触发后N秒还会执行一次
export function throttle1(fn, wait) {
  let timer
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.call(this, ...args)
        timer = null
      }, wait)
    }
  }
}

// 双剑合璧: 首次立马执行, 之后隔N秒执行一次,停止触发后N秒还会执行一次
export function throttle2(fn, wait) {
  let previous = 0
  let timer
  return function (...args) {
    const now = new Date().valueOf()
    const remaining = wait - (now - previous)
    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      previous = now
      fn.apply(this, args)
    } else {
      if (!timer) {
        timer = setTimeout(() => {
          previous = new Date().valueOf()
          timer = null
          fn.apply(this, args)
        }, remaining)
      }
    }
  }
}
