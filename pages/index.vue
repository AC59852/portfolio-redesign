<template>
  <section class="home">
    <section class="hero home__hero">
      <h1 class="title title--home">
        <span class="title--home--name">Austin Caron</span>
        <span class="title--home--role">Creative</span>
        <span class="title--home--role title--home--dev">
          Developer
        </span>
      </h1>
      <img class="home__arrow" src="~/assets/chevron-right-solid.svg" alt="Arrow Pointing downwards indicating to scroll down to view more">
    </section>
    <section class="home__projects">
      <h2 class="title title--featured" hidden>Featured Work<span class="title--period">.</span></h2>
      <div class="home__images home__images--top">
        <a href="https://blog.austincaron..com" target="_blank" class="image-container home__project home__project--left">
          <div class="home__info">
            <h2 class="home__project--heading">Pixels & Pull Requests</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="~/assets/blog.webp" alt="A tinted laptop on a black couch in a dark gray room. On the laptop screen is a preview image for the Pixels & Pull Requests Blog.">
        </a>
        <a href="https://devlift.com/" target="_blank" class="image-container home__project home__project--right">
          <div class="home__info">
            <h2 class="home__project--heading">Sparklist</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="~assets/sparklist.png" alt="The foreground contains an iPhone with the Sparklist app open, showing a listing of a lounge char. To the left and right of the phone in the background are two images showing different posts. The left contains a Black Modern Bathroom Vanity for $25, and the right contains Wireless Bluetooth Orange Headphones for $75.">
        </a>
      </div>
      <div class="home__images home__images--mid">
        <a href="https://virtual-visions-red.vercel.app/" target="_blank" class="image-container home__project home__project--left">
          <div class="home__info">
            <h2 class="home__project--heading">Virtual Visions</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="~assets/vv.webp" alt="Two desktop screens beside each other facing diagonally left. The first screen contains a preview of the Virtual Visions profile page. The profile name is Austin Caron, with the profile picture being a photo of Cosmic Spider-Man. It contains their bio, favourite games, and collection of images they have posted. The second screen shows the Virtual Visions login page, with options to login with Google, Apple, Facebook, or email.">
        </a>
      </div>
      <div class="home__images home__images--bot">
        <a href="https://www.youtube.com/@AustinCaron" target="_blank" class="image-container home__project home__project--right">
          <div class="home__info">
            <h2 class="home__project--heading">YouTube Channel</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="https://images.prismic.io/new-portfolio-ac/9664187d-2610-4219-89d4-fa35a31d3433_yt_preview.webp?auto=compress,format" alt="Preview Image for My YouTube Channel: @AustinCaron">
        </a>
        <a href="https://toksan-rpg-playground.vercel.app/" target="_blank" class="image-container home__project home__project--leftSmall">
          <div class="home__info">
            <h2 class="home__project--heading">Toksan</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="https://images.prismic.io/new-portfolio-ac/f1ea1ba9-5b46-4127-81dd-78e6c24cd608_toksan_preview.jpg?auto=compress,format" alt="A glass pane facing diagonally right with two images infront overlapping each other slightly. The first image contains the home page of Toksan, a visual novel RPG. It has a the menu of Toksan and a menu to choose what to do next, with the buttons 'Create Account' and 'Settings visible'. The second image has the first Toksan character in a house setting, with a dialogue box underneath explaining the situation in game. To the right of the character is a story menu allowing the player to choose a chapter.">
        </a>
      </div>
    </section>
  </section>
</template>

<script>
//import smoothScroll from '~/mixins/smoothScroll'
import imageParallax from '~/mixins/imageParallax'

export default {
  name: 'Home',

  head: {
    title: 'Austin Caron - Creative Developer',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `I'm Austin Caron. I'm a Chatham web designer creating stunning, user-friendly websites. With 5 years of experience, I provide clients from Windsor to Toronto with incredible products, and love every minute of it.`
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Austin Caron - Home'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: `I'm Austin Caron. I'm a Chatham web designer creating stunning, user-friendly websites. With 5 years of experience, I provide clients from Windsor to Toronto with incredible products, and love every minute of it.`
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://dl.dropboxusercontent.com/s/bjqdtto0bo14jqf/og_image.png?dl=0'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://austincaron.com'
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Austin Caron - Home'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: `I'm Austin Caron. I'm a Chatham web designer creating stunning, user-friendly websites. With 5 years of experience, I provide clients from Windsor to Toronto with incredible products, and love every minute of it.`
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://dl.dropboxusercontent.com/s/bjqdtto0bo14jqf/og_image.png?dl=0'
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      }
    ],
  },

  mixins: [imageParallax],

  data() {
    return {
      mobile: false,
      tablet: false,
    }
  },

  mounted () {
    // var intervalId;

    if (window.innerWidth < 768) {
      document.querySelector("#__nuxt").style.height = "100%"

      this.mobile = true

    }

    if(window.innerWidth < 1365) {
      this.tablet = true
      this.mobile = false
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        this.mobile = true
      } else if(window.innerWidth < 1365) {
        this.tablet = true
      } else {
        this.mobile = false
        this.tablet = false
      }
    })
    
    this.imageParallax()
  }
}
</script>
