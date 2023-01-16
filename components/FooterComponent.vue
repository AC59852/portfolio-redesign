<template>
  <footer id="footer" class="footer">
    <section class="footer--home" v-if="this.$route.name === 'index'">
      <div class="footer__cta">
        <h2>Let's Get In Touch</h2>
        <h3>I'd Love to Work With You</h3>
      </div>
      <div class="footer__wrapper">
        <ul class="footer__roles">
          <li class="footer__role">Full-Time</li>
          <li class="footer__role">Part-Time</li>
          <li class="footer__role">Freelance</li>
        </ul>
        <ul class="footer__socials">
          <li class="footer__social"><a href="https://linkedin.com/in/austincaron" target="_blank">LinkedIn</a></li>
          <li class="footer__social"><a href="https://github.com/AC59852" target="_blank">GitHub</a></li>
          <li class="footer__social"><a href="https://twitter.com/austincaron_" target="_blank">Twitter</a></li>
        </ul>
      </div>
      <div class="footer__buttons">
        <NuxtLink to="/contact" class="footer__button footer__button--contact">Contact</NuxtLink>
        <a href="https://drive.google.com/file/d/16IpJbqjKL0WKsTW4nbVaoDQab_mDQDCM/view?usp=sharing" target="_blank" class="footer__button footer__button--resume">Resume</a>
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