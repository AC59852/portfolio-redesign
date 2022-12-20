<template>
  <section class="cta" id="cta">
    <h2 class="title title--cta">Check Out More<span>.</span></h2>
    <div class="cta__links">
      <NuxtLink :to="`/${link.route}`" class="cta__link">{{ link.name }} <span class="cta__arrow"><img src="~/assets/arrow.svg" alt=""></span></NuxtLink>
      <NuxtLink :to="`/${link.route}`" class="cta__link">Contact Me <span class="cta__arrow"><img src="~/assets/arrow.svg" alt=""></span></NuxtLink>
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