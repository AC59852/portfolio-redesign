<template>
  <section class="about__passions">
    <h2 class="title title--about title--about--passions">What I Love<span class="title--period">.</span></h2>
    <div class="about__container--passions">
      <div class="about__container">
        <div class="about__content" v-for="passion in passions" :key="passion.id">
          <h3 class="about__subtitle">{{ passion.title }}</h3>
          <p class="about__para para para--small">{{ passion.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      passions: [
        {
          id: 1,
          title: 'History',
          description: 'I actively study and consume almost as much history as I do development practice. Learning about humanities past is my favourite pastime.'
        },
        {
          id: 2,
          title: 'Video Games',
          description: 'A very close second, I adore video games. Experiencing new worlds, mechanics, and tech enlivens me and helps with creativity and ideas.'
        },
        {
          id: 3,
          title: 'Traveling',
          description: `Recently bitten by the travel bug, ever since my first flight in 2016, I've taken a major trip every 2 years, and I'm looking to shorten that everytime.`
        }
      ]
    }
  }
}
</script>

<style>

</style>