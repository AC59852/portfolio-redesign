<template>
  <section class="about__tech">
    <h2 class="about__title">How I Do It<span>.</span></h2>
    <div class="about__techContainer">
      <ul v-for="techGroup in techGroups" :key="techGroup.id">
        <li v-for="tech in techGroup.techs" :key="tech.id">
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
      techGroups: [
        {
          id: 1,
          techs: [
            { id: 1, name: 'JavaScript' },
            { id: 2, name: 'Vue.js' },
            { id: 3, name: 'SASS' },
            { id: 4, name: 'Nuxt' },
            { id: 5, name: 'SEO' },
          ]
        },
        {
          id: 2,
          techs: [
            { id: 1, name: 'HTML' },
            { id: 2, name: 'NPM' },
            { id: 3, name: 'Swiper' },
            { id: 4, name: 'WCAG' },
            { id: 5, name: 'React' },
          ]
        },
        {
          id: 3,
          techs: [
            { id: 1, name: 'WordPress' },
            { id: 2, name: 'CSS' },
            { id: 3, name: 'PHP' },
            { id: 4, name: 'jQuery' },
            { id: 5, name: 'node' },
          ]
        },
        {
          id: 4,
          techs: [
            { id: 1, name: 'A/B Testing' },
            { id: 2, name: 'Flex/Grid' },
            { id: 3, name: 'MySQL' },
            { id: 4, name: 'Caching' },
            { id: 5, name: 'Analytics' },
          ]
        },
        {
          id: 5,
          techs: [
            { id: 1, name: 'Responsive' },
            { id: 2, name: 'Yarn' },
            { id: 3, name: 'Ionic' },
            { id: 4, name: 'ASP.NET' },
            { id: 5, name: 'And More...' },
          ]
        },
      ]
    }
  }
}
</script>

<style>

</style>