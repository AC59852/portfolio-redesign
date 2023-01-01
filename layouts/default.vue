<template>
  <section>
    <NavComponent />
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
  },

  methods: {
    setVh(vh) {
      this.$store.commit('setVh', vh);
    },
  },
}
</script>

<style>

</style>