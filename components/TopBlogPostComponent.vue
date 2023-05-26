<template>
  <article class="featuredPost">
    <NuxtLink :to="`/blog/${topPost.uid}`">
      <div class="featuredPost__bck">
        <prismic-image :field="topPost.data.primary_image" />
      </div>
      <div class="featuredPost__heading">
        <h2>{{ topPost.data.post_title[0].text }}</h2>
        <div class="featuredPost__tags">
          <span v-for="(tag, index) in topPost.tags" :key="index">
            {{ tag }}
          </span>
        </div>
      </div>
      <span class="featurePost__date">
        {{ topPost.data.post_date }}
      </span>
    </NuxtLink>
  </article>
</template>

<script>
export default {
  name: 'TopBlogPostComponent',

  props: ['topPost'],
}
</script>

<style>

</style>