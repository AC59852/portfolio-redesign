<template>
  <section>
    <NavComponent />
    <div id="wrapper">
      <ContactComponent v-if="contact" />
      <Nuxt />
    </div>
    <FooterComponent />
  </section>
</template>

<script>
export default {
  name: 'Default',

  data() {
    return {
      contact: false
    }
  },

  created() {
    this.$nuxt.$on('openContact', () => {
      this.loadContact()
    })

    this.$nuxt.$on('closeContact', () => {
      this.contact = false
    })
  },

  methods: {
    loadContact() {
      this.contact = true
    }
  },
}
</script>

<style>

</style>