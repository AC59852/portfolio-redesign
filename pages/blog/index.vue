<template>
  <section class="blog">
    <TopBlogPostComponent :topPost="topPost"/>
    <BlogPostCardComponent v-for="(post, index) in posts" :key="index" :post="post"/>
  </section>
</template>

<script>
import smoothScroll from '~/mixins/smoothScroll'
export default {
  name: 'Blog',

  mixins: [smoothScroll],

  async asyncData({$prismic, params, error}) {
    // get all the blog posts from prismic and store them in the posts variable
    const allPosts = await $prismic.api.query(
      $prismic.predicates.at('document.type', 'blog_post'),
      { orderings : '[my.blog_post.date desc]' }
    )

    // get the post that has the boolean of post_featured set to true
    const topPost = allPosts.results.find(post => post.data.post_featured === true)

    // remove the featured post from the posts variable
    const posts = allPosts.results.filter(post => post.data.post_featured !== true)

    // if there are no blog posts, return an error
    if (!allPosts) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    if(!topPost) {
      // if there are no featured posts, set the first post as the featured post
      topPost = allPosts.results[0]
    }

    // return the posts variable to the page
    return {
      posts,
      topPost
    }
  },

  mounted() {
    this.smoothScroll()

    console.log(this.posts)
  }
}
</script>

<style>

</style>