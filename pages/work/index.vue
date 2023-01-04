<template>
  <section id="work" class="work">
    <HeroComponent :heroTitle="title" :heroPara="para"/>
    <section class="home__images work__images">
      <NuxtLink v-for="(item, index) in work.data.slices"
      :key="index"
      :to="`/work/${item.primary.work_link}`"
      class="home__project work__project image-container"
      >
        <!-- image -->
        <div class="home__info work__info">
          <h2 class="home__project--heading work__project--heading">{{item.primary.title[0].text}}</h2>
          <span class="home__plus work__plus">+</span>
        </div>
        <prismic-image :field="item.primary.work_image" class="image" />
      </NuxtLink>
    </section>
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