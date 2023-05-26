<template>
  <article class="blogCard">
    <NuxtLink :to="`blog/${post.uid}`">
      <prismic-image :field="post.data.primary_image" />
    </NuxtLink>
    <NuxtLink :to="`blog/${post.uid}`">
      <div class="blogCard__main">
        <span class="blogCard__date">{{ post.data.post_date }}</span>
        <h2 class="blogCard__title">{{ post.data.post_title[0].text }}</h2>
        <p class="blogCard__text">{{ post.data.post_preview_text[0].text }}</p>
      </div>
      <div class="featuredPost__tags">
        <span v-for="(tag, index) in post.tags" :key="index">
          {{ tag }}
        </span>
      </div>
    </NuxtLink>
  </article>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style>

</style>