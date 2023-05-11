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
      <p class="home__subtitle">Elevating local business with purpose.</p>
      <img class="home__arrow" src="~/assets/chevron-right-solid.svg" alt="Arrow Pointing downwards indicating to scroll down to view more">
    </section>
    <section class="home__growth">
      <h2 class="title title--growth">Helping You Grow<span class="title--period">.</span></h2>
      <div class="home__outcomes" v-if="mobile || tablet" @load="cycleOutcome()">
        <h3 class="home__outcome">{{ currentOutcome.emoji }} {{ currentOutcome.title }}</h3>
      </div>
      <div class="home__outcomes" v-else>
        <h3 class="home__outcome" v-for="outcome in outcomes.slice(0,10)" :key="outcome.id">{{ outcome.emoji }} {{ outcome.title }} <span class="pipe">|</span></h3>
      </div>
      <div class="home__growthText">
        <p>In today's age, having an online presence is crucial for any business looking to grow and reach new customers. A website can help establish credibility, increase visibility, and provide a platform for customers to learn more about your products or services. Having a website can open up new opportunities for your business and help you stay ahead of the competition.</p>
        <p>I'm here to provide all of that and more. Using my skills and experience as both a designer and developer, I provide beautifully designed, engaging websites that cater to your customers.</p>
      </div>
    </section>
    <section class="home__services">
      <h2 class="title title--services">My Services<span class="title--period">.</span></h2>
      <div class="home__cards">
        <CardComponent v-for="card in cards" :key="card.id" :card="card" />
      </div>
    </section>
    <section class="home__about">
      <h2 class="title title--bio">About Me<span class="title--period">.</span></h2>
      <div class="home__aboutWrapper">
        <div class="image-container"><img src="~/assets/profile_photo.png" alt="Image of Me, Austin Caron, Creative Developer. Brown Eyes, Short Hair, Beanie, Gray Sweater, Small Beard, and a Big Smile" class="home__profileImg image"></div>
        <div class="home__bio">
          <h3 class="bio__title about__subtitle">Passionate</h3>
          <p class="bio__para">I'm a Chatham web designer creating stunning, user-friendly websites. With 5 years of experience, I provide clients with incredible products, and love every minute of it.</p>
          <div class="bio__links">
            <nuxt-link to="/about" class="bio__btn bio__btn--dark">Learn More</nuxt-link>
            <nuxt-link to="/contact" class="bio__btn bio__btn--light">Contact Me</nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="home__projects">
      <h2 class="title title--featured">Featured Work<span class="title--period">.</span></h2>
      <div class="home__images home__images--top">
        <a href="https://patrickbradley.me/" target="_blank" class="image-container home__project home__project--left">
          <div class="home__info">
            <h2 class="home__project--heading">Patrick Bradley</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="https://images.prismic.io/new-portfolio-ac/8080be52-2153-4e70-9217-f4a13cf5e259_patrick_preview2.jpg?auto=compress,format" alt="Preview Image of Patrick Bradley's Portfolio website">
        </a>
        <a href="https://ixd-weal.web.app/" target="_blank" class="image-container home__project home__project--right">
          <div class="home__info">
            <h2 class="home__project--heading">Weal Wellness App</h2>
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
        <a href="https://www.youtube.com/@AustinCaron" target="_blank" class="image-container home__project home__project--right">
          <div class="home__info">
            <h2 class="home__project--heading">YouTube Channel</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="https://images.prismic.io/new-portfolio-ac/9664187d-2610-4219-89d4-fa35a31d3433_yt_preview.webp?auto=compress,format" alt="Preview Image for My YouTube Channel: @AustinCaron">
        </a>
        <a href="https://ac59852.github.io/toksan-anime/" target="_blank" class="image-container home__project home__project--leftSmall">
          <div class="home__info">
            <h2 class="home__project--heading">Toksan Anime</h2>
            <span class="home__plus">+</span>
          </div>
          <img class="image" src="https://images.prismic.io/new-portfolio-ac/8b7efcc6-e04e-4508-9d98-17357dec206e_toksan_preview.jpg?auto=compress,format" alt="Preview Image for the Toksan RPG Browser Game">
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

  mixins: [smoothScroll, imageParallax],

  data() {
    return {
      mobile: false,
      tablet: false,
      outcomes: [
        {id: 0, emoji: '🥇', title: 'Your Goals First'},
        {id: 1, emoji: '🤝', title: 'User-Centered Design'},
        {id: 2, emoji: '🧘', title: 'Ease of Use'},
        {id: 3, emoji: '🎨', title: 'Branding'},
        {id: 4, emoji: '🔍', title: 'Search Engine Optimization'},
        {id: 5, emoji: '📈', title: 'Conversions'},
        {id: 6, emoji: '📱', title: 'Mobile-Friendly'},
        {id: 7, emoji: '💪', title: 'Success Driven'},
        {id: 8, emoji: '🖥️', title: 'Responsive Design'},
        {id: 9, emoji: '🔥', title: 'Incredible Service'},
      ],
      currentOutcome: {id: 0, emoji: '🥇', title: 'Your Goals First'},
      cards: [
        {
          id: 0, 
          title: 'Starter', 
          price: 500, 
          subtitle: 'Enhance your online presence quickly', 
          points: [
            {id: 0, title: 'High Quality Template'},
            {id: 1, title: 'Blazing Fast Performance'},
            {id: 2, title: 'Responsive Design'},
            {id: 3, title: 'Working Contact Solutions'},
            {id: 4, title: 'Analytics Integration'},
          ]
        },
        {
          id: 1, 
          title: 'Pro', 
          price: 3100, 
          subtitle: 'Phenomenal service free of charge', 
          points: [
            {id: 0, title: 'Personalized Design'},
            {id: 1, title: '10 Pages Plus Revisions'},
            {id: 2, title: 'Dynamic Content Options'},
            {id: 3, title: 'Custom SEO'},
            {id: 4, title: 'Everything From Standard'},
          ]
        },
        {
          id: 2, 
          title: 'Custom', 
          price: 'TBD', 
          subtitle: 'Mix and match for your needs', 
          points: [
            {id: 0, title: 'Content Management Tools'},
            {id: 1, title: 'More Pages/Revisions'},
            {id: 2, title: 'Hosting and Domains'},
            {id: 3, title: 'Monthly Maintenance'},
            {id: 4, title: 'Social Media Integration'},
          ]
        },
      ]
    }
  },

  mounted () {
    var intervalId;

    if (window.innerWidth < 768) {
      document.querySelector("#__nuxt").style.height = "100%"

      this.mobile = true

    }

    if(window.innerWidth < 1365) {
      this.tablet = true
      this.mobile = false

      // set interval for outcomes
      var intervalId = setInterval(() => {
        // fade out
        document.querySelector('.home__outcome').classList.add('home__outcome--fade')
        // fade in
        setTimeout(() => {
          // change outcome
          let random = Math.floor(Math.random() * this.outcomes.length)

          if(random === this.currentOutcome.id) {
            random = Math.floor(Math.random() * this.outcomes.length)
          }

          this.currentOutcome = this.outcomes[random]
        
          document.querySelector('.home__outcome').classList.remove('home__outcome--fade')
        }, 1500)

      }, 5000)
    } else {
      let lastChild = document.querySelector(".home__outcomes").lastChild;
      
      // remove the pipe from the last child
      lastChild.innerHTML = lastChild.innerHTML.replace('|', '')
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        this.mobile = true
      } else if(window.innerWidth < 1365) {
        this.tablet = true
      } else {
        this.mobile = false
        this.tablet = false

        let lastChild = document.querySelector(".home__outcomes").lastChild;

        // remove the pipe from the last child
        lastChild.innerHTML = lastChild.innerHTML.replace('|', '')

        // stop the interval
        clearInterval(intervalId)
      }
    })
    
    this.smoothScroll()
    this.imageParallax()
  }
}
</script>
