<template>
  <div class="home">
    <div class="large-11">
      <div class="image-container image-one">
        <h2 class="">Test</h2>
        <img class="image" src="https://picsum.photos/seed/42/1920/1080" alt="">
      </div>
    </div>
    <div class="large-11" style="margin-top: auto;">
      <div class="image-container image-one">
        <h2 class="">Test</h2>
        <img class="image" src="https://picsum.photos/seed/43/1920/1080" alt="">
      </div>
    </div>
    <div class="large-11" style="margin-top: 300px;">
      <div class="image-container image-one">
        <h2 class="">Test</h2>
        <img class="image" src="https://picsum.photos/seed/44/1920/1080" alt="">
      </div>
    </div>
    <div class="large-11" >
      <div class="image-container image-one">
        <h2 class="">Test</h2>
        <img class="image" src="https://picsum.photos/seed/45/1920/1080" alt="">
      </div>
    </div>
    <div class="large-11" >
      <div class="image-container image-one">
        <h2 class="">Test</h2>
        <img class="image" src="https://picsum.photos/seed/46/1920/1080" alt="">
      </div>
    </div>
  </div>
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
