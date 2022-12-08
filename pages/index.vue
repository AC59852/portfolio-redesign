<template>
  <section class="home">
    <section class="hero home__hero">
      <h1 class="title title--home">
        <span class="title--home--name">Austin Caron</span>
        <span class="title--home--role">Front-End</span>
        <span class="title--home--role title--home--dev">
          Developer<span class="title--period">.</span>
        </span>
      </h1>
    </section>
    <section class="home__projects">
      <div class="home__images home__images--top">
        <a href="/" target="_blank" class="image-container home__project home__project--left">
          <div class="home__info">
            <h2 class="home__project--heading">Patrick Bradley</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="https://picsum.photos/seed/42/1920/1080" alt="">
        </a>
        <a href="/" target="_blank" class="image-container home__project home__project--right">
          <div class="home__info">
            <h2 class="home__project--heading">Patrick Bradley</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="https://picsum.photos/seed/42/1920/1080" alt="">
        </a>
      </div>
      <div class="home__images home__images--mid">
        <a href="/" target="_blank" class="image-container home__project home__project--left">
          <div class="home__info">
            <h2 class="home__project--heading">Patrick Bradley</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="https://picsum.photos/seed/42/1920/1080" alt="">
        </a>
      </div>
      <div class="home__images home__images--bot">
        <a href="/" target="_blank" class="image-container home__project home__project--right">
          <div class="home__info">
            <h2 class="home__project--heading">Patrick Bradley</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="https://picsum.photos/seed/42/1920/1080" alt="">
        </a>
        <a href="/" target="_blank" class="image-container home__project home__project--leftSmall">
          <div class="home__info">
            <h2 class="home__project--heading">Patrick Bradley</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="https://picsum.photos/seed/42/1920/1080" alt="">
        </a>
      </div>
    </section>
  </section>
</template>

<script>
import smoothScroll from '~/mixins/smoothScroll'
import imageParallax from '~/mixins/imageParallax'

export default {
  name: 'Home',

  head: {
    title: 'Austin Caron - Home',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Austin Caron - Home'
      }
    ]
  },

  mixins: [smoothScroll, imageParallax],

  mounted () {
    this.smoothScroll()
    this.imageParallax()
  }
}
</script>
