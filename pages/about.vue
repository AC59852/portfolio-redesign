<template>
  <section id="about">
    <HeroComponent :heroTitle="title" :heroPara="para"/>
    <AboutBestComponent />
    <AboutTechComponent />
    <AboutPassionsComponent />
    <CtaComponent :link="ctaLink"/>
  </section>
</template>

<script>
import smoothScroll from '~/mixins/smoothScroll'

export default {
  name: 'About',

  mixins: [smoothScroll],

  data() {
    return {
      title: 'A Bit About Me',
      para: 'A lover of all things digital, I strive everyday to enhance my skillset, expand my knowledge on the things I love, and have fun doing it.',
      ctaLink: {
          name: 'My Work',
          route: 'work'
        }
    }
  },

  mounted() {
    console.log(this.$route)

    this.smoothScroll()
  },

  components: {
    AboutHeroComponent: () => import('~/components/HeroComponent.vue'),
    AboutBestComponent: () => import('~/components/AboutBestComponent.vue'),
    AboutTechComponent: () => import('~/components/AboutTechComponent.vue'),
    AboutPassionsComponent: () => import('~/components/AboutPassionsComponent.vue')
  }
}
</script>

<style>

</style>
