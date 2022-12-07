<template>
  <section>
    <NavComponent />
    <Nuxt />
  </section>
</template>

<script>
export default {
  name: 'Default',
  components: {
    NavComponent: () => import('~/components/NavComponent.vue')
  }
}
</script>

<style>

</style>