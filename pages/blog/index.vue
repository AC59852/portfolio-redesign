<template>
  <section class="blog">
    <BlogPostCardComponent v-for="(post, index) in document.results" :key="index" :post="post"/>
  </section>
</template>

<script>
import smoothScroll from '~/mixins/smoothScroll'
export default {
  name: 'Blog',

  mixins: [smoothScroll],

  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at('document.type','blog_post')
    )
    if (document) {
      console.log(document.results)
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },

  mounted() {
    this.smoothScroll()

    console.log(this.posts)
  }
}
</script>

<style scoped>
  .blog {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 20px;
  }
</style>