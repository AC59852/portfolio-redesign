<template>
  <section class="contact">
    <HeroComponent heroTitle="Connect With Me" heroPara="Need a new site? Online presence? Just want to talk? Choose any one of the links and you’ll get a response, I promise." />
    <section class="contact__links">
      <div><a href="mailto:austin.caron1@gmail.com" class="contact__link contact__link--email">hello@austincaron<span class="title--period">.</span>com</a></div>
      <div><a href="https://linkedin.com/in/austincaron" class="contact__link contact__link--linkedin" target="_blank">linkedin<span class="title--period">.</span>com/austincaron</a></div>
      <div><a href="https://twitter.com/austincaron_" class="contact__link contact__link--twitter" target="_blank">twitter<span class="title--period">.</span>com/austincaron_</a></div>
    </section>
    <CtaComponent :link="ctaLink" />
  </section>
</template>

<script>
// import smoothScroll from '~/mixins/smoothScroll'
export default {
  name: 'Contact',

  head: {
    title: 'Austin Caron - Contact Me',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `Need a new site? Online presence? Just want to talk? Choose any one of the links and you'll get a response, I promise.`
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Austin Caron - Contact Me'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `Need a new site? Online presence? Just want to talk? Choose any one of the links and you'll get a response, I promise.`
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
        content: 'Austin Caron - Contact Me'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: `Need a new site? Online presence? Just want to talk? Choose any one of the links and you'’'ll get a response, I promise.`
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
      ctaLink: {
          name: 'My Work',
          route: 'work'
        }
    }
  },

  // mounted() {
  //   this.smoothScroll()
  // },

  components: {
    HeroComponent: () => import('~/components/HeroComponent.vue'),
  }
}
</script>

<style>

</style>