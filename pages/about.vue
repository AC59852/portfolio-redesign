<template>
  <section id="about">
    <AboutHeroComponent />
    <AboutBestComponent />
    <AboutTechComponent />
    <AboutPassionsComponent />
  </section>
</template>

<script>
export default {
  name: 'About',
  components: {
    AboutHeroComponent: () => import('~/components/AboutHeroComponent.vue'),
    AboutBestComponent: () => import('~/components/AboutBestComponent.vue'),
    AboutTechComponent: () => import('~/components/AboutTechComponent.vue'),
    AboutPassionsComponent: () => import('~/components/AboutPassionsComponent.vue')
  }
}
</script>

<style>

</style>
