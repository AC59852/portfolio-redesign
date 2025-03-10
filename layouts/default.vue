<template>
  <section>
    <NavComponent :class="{ 'nav--dark': hasScrolled }" />
    <div id="wrapper">
      <Nuxt />
    </div>
    <FooterComponent />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Default',

  data() {
    return {
      hasScrolled: false
    }
  },

  mounted() {
    // // get the viewport height in pixels
    // const vh = window.innerHeight;

    // this.setVh(vh);

    // alert(vh);

    // // set __nuxt to the same height
    // document.getElementById('__nuxt').style.height = `${vh}px`;

    // // on resize, set __nuxt to the same height
    // window.addEventListener('resize', () => {
    //   const vh = window.innerHeight;
    //   document.getElementById('__nuxt').style.height = `${vh}px`;
    // });

    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    // window.removeEventListener('resize');

    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    setVh(vh) {
      this.$store.commit('setVh', vh);
    },

    handleScroll() {
      console.log("scrolling")
      this.hasScrolled = window.scrollY >= 90;

      console.log(this.hasScrolled);
    }
  },
}
</script>

<style>

</style>