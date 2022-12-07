<template>
  <section>
    <NavComponent />
    <ContactComponent v-if="contact" />
    <Nuxt />
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
  
  components: {
    NavComponent: () => import('~/components/NavComponent.vue')
  }
}
</script>

<style>

</style>