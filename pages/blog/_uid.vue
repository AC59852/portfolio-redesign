<template>
  <section class="post">
    <NuxtLink to="/blog" class="post__back">Back</NuxtLink>
    <article class="post__content">
      <div class="post__top">
        <h1 class="post__title">{{ post.data.post_title[0].text }}</h1>
        <prismic-rich-text class="post__previewText" :field="post.data.post_preview_text" />
      </div>
      <prismic-image class="post__image post__image--main" :field="post.data.primary_image" />
      <div class="post__slices">
      <slice-zone :components="components" :slices="post.data.slices" />
    </div>
    </article>
  </section>
</template>

<script>
import smoothScroll from '~/mixins/smoothScroll'
import { components } from '~/slices'

export default {
  name: 'Post',

  mixins: [smoothScroll],

  async asyncData({$prismic, params, error}) {
    const post = await $prismic.api.getByUID('blog_post', params.uid)

    if (!post) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      post
    }
  },

  data() {
    return {
      components
    }
  },

  mounted() {
    this.smoothScroll()
  }
}
</script>

<style>

</style>