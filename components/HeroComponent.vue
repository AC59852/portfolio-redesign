<template>
  <section :class="`hero ${this.$route.name}__hero`">
    <h1 :class="`title title--${this.$route.name}`">{{ heroTitle }}<span class="title--period">.</span></h1>
    <div class="about__rolesContainer" v-if="this.$route.name === 'about'">
      <div class="about__roles">
        <h2 class="about__role">Web Developer</h2><span class="pipe">|</span>
        <h2 class="about__role">History Lover</h2><span class="pipe">|</span>
        <h2 class="about__role">Gamer</h2>
      </div>
      <div class="about__roles">
        <h2 class="about__role">Passionate</h2><span class="pipe">|</span>
        <h2 class="about__role">Dedicated</h2><span class="pipe">|</span>
        <h2 class="about__role">Experimental</h2>
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
