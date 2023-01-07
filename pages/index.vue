<template>
  <section class="home">
    <section class="hero home__hero">
      <h1 class="title title--home">
        <span class="title--home--name">Austin Caron</span>
        <span class="title--home--role">Front-End</span>
        <span class="title--home--role title--home--dev">
          Developer
        </span>
      </h1>
    </section>
    <section class="home__projects">
      <div class="home__images home__images--top">
        <a href="https://patrickbradley.me/" target="_blank" class="image-container home__project home__project--left">
          <div class="home__info">
            <h2 class="home__project--heading">Patrick Bradley</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="https://images.prismic.io/new-portfolio-ac/8080be52-2153-4e70-9217-f4a13cf5e259_patrick_preview2.jpg?auto=compress,format" alt="Preview Image of Patrick Bradley's website">
        </a>
        <a href="https://ixd-weal.web.app/" target="_blank" class="image-container home__project home__project--right">
          <div class="home__info">
            <h2 class="home__project--heading">Weal - Mental Wellness</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="https://images.prismic.io/new-portfolio-ac/2c7addd5-2a39-4624-84a2-94d4a2fb21b8_weal_preview.jpg?auto=compress,format" alt="Preview Image of the Weal - Mental Wellness website">
        </a>
      </div>
      <div class="home__images home__images--mid">
        <a href="https://toksan.ca" target="_blank" class="image-container home__project home__project--left">
          <div class="home__info">
            <h2 class="home__project--heading">Toksan Game</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="https://images.prismic.io/new-portfolio-ac/f1ea1ba9-5b46-4127-81dd-78e6c24cd608_toksan_preview.jpg?auto=compress,format" alt="Two desktop size screens, one with the Toksan.ca splash screen, and the other with the user at home within the game choosing what chapter to play">
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
        <a href="https://ac59852.github.io/toksan-anime/" target="_blank" class="image-container home__project home__project--leftSmall">
          <div class="home__info">
            <h2 class="home__project--heading">Toksan Anime</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="https://images.prismic.io/new-portfolio-ac/8b7efcc6-e04e-4508-9d98-17357dec206e_toksan_preview.jpg?auto=compress,format" alt="">
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

  data() {
    return {
      mobile: false
    }
  },

  mounted () {

    if (window.innerWidth < 768) {
      document.querySelector("#__nuxt").style.height = "100%"
    }
    
    this.smoothScroll()
    this.imageParallax()
  }
}
</script>
