<template>
  <section class="about__tech">
    <h2 class="title title--about">How I Do It<span class="title--period">.</span></h2>
    <div class="about__techContainer">
      <ul v-for="techGroup in techGroups" class="about__techs" :key="techGroup.id">
        <li v-for="tech in techGroup.techs" :key="tech.id" class="about__techItem">
          <p>{{ tech.name }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      techs: [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'Vue.js' },
        { id: 3, name: 'SASS' },
        { id: 4, name: 'Nuxt' },
        { id: 5, name: 'React' },
        { id: 6, name: 'HTML' },
        { id: 7, name: 'CSS' },
        { id: 8, name: 'SEO' },
        { id: 9, name: 'PHP' },
        { id: 10, name: 'WordPress' },
        { id: 11, name: 'jQuery' },
        { id: 12, name: 'node' },
        { id: 13, name: 'Flex/Grid' },
        { id: 14, name: 'MySQL' },
        { id: 15, name: 'WCAG' },
        { id: 16, name: 'Caching' },
        { id: 17, name: 'Responsive' },
        { id: 18, name: 'Yarn' },
        { id: 19, name: 'Analytics' },
        { id: 20, name: 'Ionic' },
        { id: 21, name: 'ASP.NET' },
        { id: 22, name: 'NPM' },
        { id: 23, name: 'Gulp' },
        { id: 24, name: 'Swiper' },
        { id: 25, name: 'And More...' },
      ],
      techGroups: []
    }
  },

  mounted() {
    this.splitTechs()

    window.addEventListener('resize', this.splitTechs)
  },

  methods: {
    splitTechs() {
      // if the screen is less than 768px, split the techs into 3 tech groups of 8 and make sure that "And More..." is in the last group
      if (window.innerWidth < 768) {
        this.techGroups = [
          { id: 1, techs: this.techs.slice(0, 8) },
          { id: 2, techs: this.techs.slice(8, 16) },
          { id: 3, techs: this.techs.slice(17, 25) }
        ]
      } else {
        // if the screen is greater than 768px, split the techs into 5 tech groups of 5
        this.techGroups = [
          { id: 1, techs: this.techs.slice(0, 5) },
          { id: 2, techs: this.techs.slice(5, 10) },
          { id: 3, techs: this.techs.slice(10, 15) },
          { id: 4, techs: this.techs.slice(15, 20) },
          { id: 5, techs: this.techs.slice(20, 25) }
        ]
      }
    }
  }
}
</script>

<style>

</style>