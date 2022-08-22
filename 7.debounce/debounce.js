export function debounce(fn, wait) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, wait)
  }
}

// 立刻执行 首次会立刻执行, 之后连续触发不会执行,停止触发N秒后才执行
export function debounce1(fn, wait, immediate) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    if (immediate && !timer) {
      fn.apply(this, args)
    }
    timer = setTimeout(function () {
      fn.apply(this, args)
    }, wait)
  }
}

// 立刻执行, 首次会立刻执行, 之后连续触发不执行, 停止触发N秒后也不会执行
export function debounce2(fn, wait, immediate) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    if (immediate) {
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait)
      if (callNow) fn.apply(this, args)
    } else {
      timer = setTimeout(function () {
        fn.apply(this, args)
      }, wait)
    }
  }
}
