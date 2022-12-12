<template>
  <header class="nav" id="nav">
    <div class="nav__wrapper">
      <NuxtLink to="/" class="nav__link nav__link--name">Austin</NuxtLink>
      <div @click="toggleNav()" class="nav__button" aria-label="Button to Open the Navigation Menu">
        <span class="nav__line"></span>
        <span class="nav__line"></span>
        <span class="nav__line"></span>
      </div>
    </div>
    <transition name="nav__menu">
      <nav v-if="navOpen" class="nav__menu">
        <ul class="nav__links">
          <li @click="toggleNav()"><button class="nav__close" aria-label="Button to Close the Navigation Menu">X</button></li>
          <li @click="toggleNav()"><NuxtLink to="/about" class="nav__link">About</NuxtLink></li>
          <li @click="toggleNav()"><NuxtLink to="/work" class="nav__link">Work</NuxtLink></li>
          <li><button @click="$nuxt.$emit('openContact')" class="nav__link">Contact Me</button></li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'NavComponent',

  data() {
    return {
      navOpen: false
    }
  },

  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen
    },
  }
}
</script>

<style>

</style>