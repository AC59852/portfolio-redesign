import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'

gsap.registerPlugin(ScrollTrigger)

export default {
  methods: {
    smoothScroll () {
      var fixedElem = document.getElementById('nav');

      var bodyScrollBar = Scrollbar.init(
        document.getElementById('__nuxt'),
        { damping: 0.05, delegateTo: document, alwaysShowTracks: true, renderByPixels: true, continuousScrolling: true }
      );

      // set the scrollbar to the top
      bodyScrollBar.setPosition(0, 0)

      bodyScrollBar.addListener(function(status) {
        var offset = status.offset;

        if(offset.y >= 50) {
          fixedElem.classList.add('nav--dark');
        } else {
          fixedElem.classList.remove('nav--dark');
        }
        
        fixedElem.style.top = offset.y + 'px';
        fixedElem.style.left = offset.x + 'px';
      });

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
