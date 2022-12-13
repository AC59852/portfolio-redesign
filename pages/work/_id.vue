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
import smoothScroll from '~/mixins/smoothScroll'
import imageParallax from '~/mixins/imageParallax'
import { components } from '~/slices'

export default {
  mixins: [smoothScroll, imageParallax],

  // prismic fetch
  async asyncData({ $prismic, params, error }) {
    try {
      const work = await $prismic.api.getByUID('work', params.id)
      return { work }
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
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

    this.smoothScroll()
    this.imageParallax()
  }
  
}
</script>

<style>

</style>