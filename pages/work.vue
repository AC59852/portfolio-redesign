<template>
  <section id="work" class="work">
    <HeroComponent :heroTitle="title" :heroPara="para"/>
    <CtaComponent :link="ctaLink"/>
  </section>
</template>

<script>
import smoothScroll from '~/mixins/smoothScroll'

export default {
  name: 'Work',

  mixins: [smoothScroll],

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
  },

  components: {
    WorkHeroComponent: () => import('~/components/HeroComponent.vue')
  }
}
</script>

<style>

</style>