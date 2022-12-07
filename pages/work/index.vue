<template>
  <section id="work" class="work">
    <HeroComponent :heroTitle="title" :heroPara="para"/>
    <NuxtLink v-for="(item, index) in work.data.slices" 
    :key="index"
    :to="`/work/${item.primary.work_link}`"
    >
      <!-- image -->
      <div class="large-11">
        <PrismicRichText :field="item.primary.title" />
        <div class="image-container">
          <prismic-image :field="item.primary.work_image" class="image" />
        </div>
      </div>
    </NuxtLink>
    <CtaComponent :link="ctaLink"/>
  </section>
</template>

<script>
import smoothScroll from '~/mixins/smoothScroll'
import imageParallax from '~/mixins/imageParallax'

export default {
  name: 'Work',

  mixins: [smoothScroll, imageParallax],

  async asyncData({$prismic, params, error}) {
    // get the work_page document from prismic and store all the data in the work variable
    const work = await $prismic.api.getSingle('work_page')

    // if there is no work_page document, return an error
    if (!work) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    // return the work variable to the page
    return {
      work
    }
  },

  data() {
    return {
      title: 'My Best Work',
      para: 'Chosen to best show off my growth as a developer, the range I have, and the experience of working on different products.',
      ctaLink: {
          name: 'About Me',
          route: 'about'
        }
    }
  },

  mounted() {
    console.log(this.$route)

    this.smoothScroll()
    this.imageParallax()
  },

  components: {
    WorkHeroComponent: () => import('~/components/HeroComponent.vue')
  }
}
</script>

<style>

</style>