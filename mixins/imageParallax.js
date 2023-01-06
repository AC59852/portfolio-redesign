import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  methods: {
    imageParallax () {
      gsap.utils.toArray('.image-container').forEach((container) => {
        const image = container.querySelector('.image')

        const tl = gsap.timeline({
          scrollTrigger: {
            scroller: document.body,
            trigger: container,
            scrub: true,
            pin: false
          }
        })

        tl.from(image, {
          yPercent: -25,
          ease: 'none'
        }).to(image, {
          yPercent: 25,
          ease: 'none'
        })
      })
    }
  }
}
