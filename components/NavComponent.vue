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
      <nav v-show="navOpen" class="nav__menu">
        <div class="nav__list">
          <ul class="nav__links">
            <li @click="toggleNav()"><button class="nav__close" aria-label="Button to Close the Navigation Menu">X</button></li>
            <li @click="toggleNav()"><NuxtLink to="/about" class="nav__link">About Me<span class="title--period">.</span></NuxtLink></li>
            <li @click="toggleNav()"><NuxtLink to="/work" class="nav__link">My Work<span class="title--period">.</span></NuxtLink></li>
            <!-- <li @click="toggleNav()"><NuxtLink to="/blog" class="nav__link">My Blog<span class="title--period">.</span></NuxtLink></li> -->
            <li @click="toggleNav()"><NuxtLink to="/contact" class="nav__link">Contact Me<span class="title--period">.</span></NuxtLink></li>
          </ul>
          <div class="nav__socials">
            <a href="https://linkedin.com/in/austincaron" target="_blank">LinkedIn</a>
            <a href="https://github.com/AC59852" target="_blank">GitHub</a>
            <a href="https://twitter.com/austincaron_" target="_blank">Twitter</a>
          </div>
        </div>
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

  mounted() {
    if(window.innerWidth < 768) {
      // get the viewport height in pixels
      const vh = window.innerHeight;

      // set __nuxt to the same height
      document.querySelector('.nav__menu').style.height = `${vh}px`;

      // on resize, set __nuxt to the same height
      window.addEventListener('resize', () => {
        const vh = window.innerHeight;
        document.querySelector('.nav__menu').style.height = `${vh}px`;
      });
    }

    // when clicking anywhere that isnt nav__list or nav__button, close the nav
    document.addEventListener('click', (e) => {
      if(!e.target.closest('.nav__list') && !e.target.closest('.nav__button') && this.navOpen) {
        this.navOpen = false
      }
    })
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