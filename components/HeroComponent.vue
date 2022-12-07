<template>
  <section :class="`hero ${this.$route.name}__hero`">
    <h1>{{ heroTitle }}<span>.</span></h1>
    <div class="about__rolesContainer" v-if="this.$route.name === 'about'">
      <div class="about__roles">
        <h2 class="about__role about__subtitle">Web Developer</h2><span class="about__pipe">|</span>
        <h2 class="about__role about__subtitle">History Lover</h2><span class="about__pipe">|</span>
        <h2 class="about__role about__subtitle">Gamer</h2><span class="about__pipe">|</span>
      </div>
      <div class="about__roles">
        <h2 class="about__role about__subtitle">Passionate</h2><span class="about__pipe">|</span>
        <h2 class="about__role about__subtitle">Dedicated</h2><span class="about__pipe">|</span>
        <h2 class="about__role about__subtitle">Experimental</h2><span class="about__pipe">|</span>
      </div>
    </div>
    <p class="about__para">{{ heroPara }}</p>
  </section>
</template>

<script>
export default {
  props: ['heroTitle', 'heroPara']
}
</script>

<style>

</style>
