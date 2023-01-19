<template>
  <div :key="card.id" :class="`home__card home__card--${card.id}`">
    <div class="card__intro">
      <h3 class="card__title">{{ card.title }}</h3>
      <h3 class="card__price">${{ card.price }}</h3>
      <p class="card__tagline">{{ card.subtitle }}</p>
    </div>
    <ul class="card__points">
      <li class="card__point" v-for="(point, index) in card.points" :key="index">
        <img class="card__check" src="~/assets/check-circle.svg" alt="Blue Icon of Checkmark Surrounded by a Circle">
        <h4 class="card__pointName">{{ point.title }}</h4>
        <!-- <img src="~/assets/chevron-right-solid.svg" alt="Arrow Pointing Right"> -->
      </li>
    </ul>
    <a class="card__link" :href="`mailto:hello@austincaron.com?subject=Inquiring%20About%20the%20${card.title}%20Package`">Get Started</a>
  </div>
</template>

<script>
export default {
  props: ['card']
}
</script>

<style>

</style>