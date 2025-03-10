<template>
  <section id="project" class="project">
    <div class="hero hero--project">
      <h1 class="title">{{ work.data.title[0].text }}<span class="title--period">.</span></h1>
      <PrismicRichText class="subtitle" :field="work.data.subtitle" />
      <div class="image-container hero__image">
        <prismic-image :field="work.data.big_image" class="image" />
      </div>
    </div>
    <div class="project__content">
      <slice-zone :components="components" :slices="work.data.slices" />
    </div>
    <CtaComponent :link="ctaLink"/>
  </section>
</template>

<script>
//import smoothScroll from '~/mixins/smoothScroll'
import imageParallax from '~/mixins/imageParallax'
import { components } from '~/slices'

export default {
  mixins: [imageParallax],

  scrollToTop: true,

  // prismic fetch
  async asyncData({ $prismic, params, error }) {
    try {
      const work = await $prismic.api.getByUID('work', params.id)
      return { work }
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
  },

  head() {
    return {
      title: `Austin Caron - ${this.work.data.title[0].text}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.work.data.subtitle[0].text
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Austin Caron - ${this.work.data.title[0].text}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.work.data.subtitle[0].text
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.work.data.big_image.url
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: `Austin Caron - ${this.work.data.title[0].text}`
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.work.data.subtitle[0].text
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.work.data.big_image.url
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  },

  data() {
    return {
      components,
      ctaLink: {
          name: 'My Work',
          route: 'work'
        }
    }
  },

  mounted() {

    console.log(this.$route)

    // get every period in h1, h2 and h3s, and set the colour to #86B4FA
    const headings = document.querySelectorAll('h1, h2, h3')

    headings.forEach(heading => {
      // find the period based on the character not the class
      const period = heading.innerHTML.match(/\./g)

      // if there is a period, replace it with a span with the class
      if (period) {
        heading.innerHTML = heading.innerHTML.replace(/\./g, `<span class="title--period">.</span>`)
      }
    })

    //this.smoothScroll()
    this.imageParallax()
    this.checkPara()
  },

  methods: {
    checkPara() {
      const paras = document.querySelectorAll('.para--project p')

      paras.forEach(para => {
        if (para.innerHTML === '' || para.innerHTML === null) {
          console.log(para.innerHTML)
          para.innerHTML += '<br>'
        }
      })
    }
  }
  
}
</script>

<style>

</style>