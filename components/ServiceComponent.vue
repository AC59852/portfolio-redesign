<template>
  <section>
    <div class="services__title">
      <h2 class="services__name">{{ service.name }}</h2>
      <span class="services__price">{{ service.price }}</span>
    </div>
    <p class="services__para">{{ service.description }}</p>
    <ul class="services__list">
      <li v-for="item in service.bullets" :key="item.id" class="services__listItem">
        <img class="services__arrow" src="~/assets/chevron-right-solid.svg" alt="">
        <p>{{ item.text }}</p>
      </li>
    </ul>
    <NuxtLink to="contact" class="services__btn">Get Started <span><img src="~/assets/arrow.svg" alt="Arrow icon indicating navigation to contact" /></span></NuxtLink>
  </section>
</template>

<script>
export default {
  props: ['service']
}
</script>

<style>
</style>