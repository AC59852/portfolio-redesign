<template>
  <footer id="footer" class="footer">
    <section class="home__footer" v-if="this.$route.name === 'index'">
      <div class="home__cta">
        <h2>Let's Get In Touch</h2>
        <span class="home__line"></span>
        <h3>I'd Love to Work With You</h3>
      </div>
      <div class="home__footerWrapper">
        <ul class="home__roles">
          <li class="home__role">Full-Time</li>
          <li class="home__role">Part-Time</li>
          <li class="home__role">Freelance</li>
        </ul>
        <ul class="home__socials">
          <li class="home__social"><a href="" target="_blank">LinkedIn</a></li>
          <li class="home__social"><a href="" target="_blank">GitHub</a></li>
          <li class="home__social"><a href="" target="_blank">Instagram</a></li>
        </ul>
      </div>
      <div class="home__buttons">
        <button @click="$nuxt.$emit('openContact')" class="home__button home__button--contact">Contact Me</button>
        <a href="" target="_blank" class="home__button home__button--resume">Resume</a>
      </div>
    </section>
    <section class="footer__content">
      <!-- copyright symbol -->
      <span class="footer__copy">&copy; 2022 Austin Caron</span>
      <span class="pipe">|</span>
      <!-- time -->
      <span class="footer__time">{{ timeCombined }}</span>
      <span class="pipe">|</span>
      <span class="footer__country">Canada</span>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      time: '',
      timeZone: '',
      timeCombined: null
    }
  },

  mounted() {
    // get current time hr:min
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    // format time am and pm
    const ampm = hours >= 12 ? 'PM' : 'AM'
    const hours12 = hours % 12 || 12
    const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes

    this.time = `${hours12}:${minutesFormatted} ${ampm}`

    // get the users time zone toLocaleTimeString
    const timeZone = date.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2]
    this.timeZone = timeZone

    this.timeCombined = `${this.time} ${this.timeZone}`

    // update time every minute
    setInterval(() => {
      this.updateTime()
    }, 60000)
  },

  methods: {
    updateTime() {
      // get current time hr:min
      const date = new Date()
      const hours = date.getHours()
      const minutes = date.getMinutes()

      // format time am and pm
      const ampm = hours >= 12 ? 'PM' : 'AM'
      const hours12 = hours % 12 || 12
      const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes

      this.time = `${hours12}:${minutesFormatted} ${ampm}`

      this.timeCombined = `${this.time} ${this.timeZone}`
    }
  }
}
</script>

<style>

</style>