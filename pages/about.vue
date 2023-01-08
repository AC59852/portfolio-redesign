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

  head: {
    title: 'Austin Caron - About Me',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `Learn more about me (Austin Caron) as a person. As much as I love web development, I have many other passions and interests!`
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Austin Caron - About Me'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `Learn more about me (Austin Caron) as a person. As much as I love web development, I have many other passions and interests!`
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://dl.dropboxusercontent.com/s/bjqdtto0bo14jqf/og_image.png?dl=0'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://austincaron.com'
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Austin Caron - About Me'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: `Learn more about me (Austin Caron) as a person. As much as I love web development, I have many other passions and interests!`
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://dl.dropboxusercontent.com/s/bjqdtto0bo14jqf/og_image.png?dl=0'
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      }
    ]
  },

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
    if (window.innerWidth < 768) {
      document.querySelector("#__nuxt").style.height = "100%"
    }

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
