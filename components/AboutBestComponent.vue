<template>
  <section class="about__best">
    <h2 class="title">What I Do Best<span>.</span></h2>
    <div v-for="talent in talents" :key="talent.id" class="about__talents about__content">
      <h3 class="subtitle">{{ talent.title }}</h3>
      <p class="about__para para para--small">{{ talent.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      talents: [
        {
          id: 1,
          title: 'Quality',
          description: `Every single project I create is expected to work. The most joy I get is when a user doesn't need to think about what they're using. "It just works".`
        },
        {
          id: 2,
          title: 'Frontend',
          description: 'Passionate to the end, pixel-perfect design, and always using new and innovative tech/techniques drive my skillset to new heights.'
        },
        {
          id: 1,
          title: 'Dynamic',
          description: 'From development to personality, I am someone who constantly evolves and takes new ideas and runs with them, stretching my limits to be better.'
        }
      ]
    }
  }
}
</script>

<style>

</style>