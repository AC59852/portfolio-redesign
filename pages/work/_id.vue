<template>
  <section id="project" class="project">
    <div class="project__hero">
      <PrismicRichText :field="work.data.title" />
      <PrismicRichText :field="work.data.subtitle" />
      <div class="large-11">
        <div class="image-container">
          <prismic-image :field="work.data.big_image" class="image" />
        </div>
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

    this.smoothScroll()
    this.imageParallax()
  }
  
}
</script>

<style>

</style>