import {
  getScrollPosition,
  getScrollTarget,
  getHorizontalScrollPosition
} from '../utils/scroll.js'
import { listenOpts } from '../utils/event.js'

function updateBinding(el, { value, oldValue }) {
  const ctx = el.__fscroll

  if (typeof value !== 'function') {
    ctx.scrollTarget.removeEventListener(
      'scroll',
      ctx.scroll,
      listenOpts.passive
    )
    console.error('v-scroll requires a function as parameter', el)
    return
  }

  ctx.handler = value
  if (typeof oldValue !== 'function') {
    ctx.scrollTarget.addEventListener('scroll', ctx.scroll, listenOpts.passive)
  }
}

export default {
  name: 'scroll',

  bind(el) {
    let ctx = {
      scroll() {
        ctx.handler(
          getScrollPosition(ctx.scrollTarget),
          getHorizontalScrollPosition(ctx.scrollTarget)
        )
      }
    }

    if (el.__fscroll) {
      el.__fscroll_old = el.__fscroll
    }

    el.__fscroll = ctx
  },

  inserted(el, binding) {
    let ctx = el.__fscroll
    ctx.scrollTarget = getScrollTarget(el)
    updateBinding(el, binding)
  },

  update(el, binding) {
    if (binding.oldValue !== binding.value) {
      updateBinding(el, binding)
    }
  },

  unbind(el) {
    let ctx = el.__fscroll_old || el.__fscroll
    if (ctx !== void 0) {
      ctx.scrollTarget.removeEventListener(
        'scroll',
        ctx.scroll,
        listenOpts.passive
      )
      delete el[el.__fscroll_old ? '__fscroll_old' : '__fscroll']
    }
  }
}
