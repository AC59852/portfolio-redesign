import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'

gsap.registerPlugin(ScrollTrigger)

export default {
  methods: {
    smoothScroll () {
      const mscrollbar = document.querySelector('#__nuxt')
      const bodyScrollBar = Scrollbar.init(mscrollbar, { damping: 0.06, delegateTo: document, alwaysShowTracks: true })

      // Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element:
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop (value) {
          if (arguments.length) {
            bodyScrollBar.scrollTop = value
          }
          return bodyScrollBar.scrollTop
        },
        getBoundingClientRect () {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
        }
      })

      bodyScrollBar.addListener(ScrollTrigger.update)
    }
  }
}
