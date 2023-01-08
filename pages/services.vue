<template>
  <section class="services" id="services">
    <HeroComponent :heroTitle="title" :heroPara="para" />
    <ServiceComponent 
      v-for="service in services" 
      :key="service.id" 
      :service="service"
      class="services__item"
    />
    <CtaComponent :link="ctaLink"/>
  </section>
</template>

<script>
import smoothScroll from '~/mixins/smoothScroll'
export default {
  name: 'Services',

  mixins: [smoothScroll],

  head: {
    title: 'Austin Caron - My Services',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `You deserve to be noticed, and I want to help you reach more people.`
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Austin Caron - My Services'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `You deserve to be noticed, and I want to help you reach more people.`
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
        content: 'Austin Caron - My Services'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: `You deserve to be noticed, and I want to help you reach more people.`
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
      title: `Let's Work Together`,
      para: 'You deserve to be noticed, and I want to help you reach more people.',
      ctaLink: {
          name: 'My Work',
          route: 'work'
        },
      services: [
        {
          id: 0,
          name: 'Standard',
          price: '$600',
          description: 'Enhance your online presence quickly, efficiently, and affordably. Choose a template, and get going in no time.',
          bullets: [
            { id: 0, text: 'High quality template with blazing fast load time' },
            { id: 1, text: 'Custom SEO to fit your brand needs' },
            { id: 2, text: 'Cohesive and stylish email template (extra cost)' },
            { id: 3, text: 'Google Analytics integration' },
            { id: 4, text: 'Fully Responsive on all platforms' },
            { id: 5, text: 'Phenomenal service and experience' },
          ]
        },
        {
          id: 1,
          name: 'Advanced',
          price: '$2100',
          description: 'Enhance your online presence quickly, efficiently, and affordably. Choose a template, and get going in no time.',
          bullets: [
            { id: 0, text: 'High quality template with blazing fast load time' },
            { id: 1, text: 'Custom SEO to fit your brand needs' },
            { id: 2, text: 'Cohesive and stylish email template (extra cost)' },
            { id: 3, text: 'Google Analytics integration' },
            { id: 4, text: 'Fully Responsive on all platforms' },
            { id: 5, text: 'Phenomenal service and experience' },
          ]
        },
        {
          id: 2,
          name: 'Custom',
          price: '$TBD',
          description: 'Enhance your online presence quickly, efficiently, and affordably. Choose a template, and get going in no time.',
          bullets: [
            { id: 0, text: 'High quality template with blazing fast load time' },
            { id: 1, text: 'Custom SEO to fit your brand needs' },
            { id: 2, text: 'Cohesive and stylish email template (extra cost)' },
            { id: 3, text: 'Google Analytics integration' },
            { id: 4, text: 'Fully Responsive on all platforms' },
            { id: 5, text: 'Phenomenal service and experience' },
          ]
        },
      ]
    }
  },

  mounted() {
    this.smoothScroll()
  },

  components: {
    ServiceComponent: () => import('~/components/ServiceComponent.vue'),
  }
  
}
</script>

<style>

</style>