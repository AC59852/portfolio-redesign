<template>
  <section class="cta" id="cta">
    <h2 class="title">Check Out More<span>.</span></h2>
    <div class="cta__links">
      <NuxtLink :to="`/${link.route}`" class="cta__link">{{ link.name }}</NuxtLink>
      <button @click="$nuxt.$emit('openContact')" class="cta__link" v-if="(this.$route.name === 'about' || this.$route.name === 'work')">Contact Me</button>
    </div>
  </section>
</template>

<script>
export default {
  props: ['link'],

  methods: {
  }
}
</script>

<style>

</style>