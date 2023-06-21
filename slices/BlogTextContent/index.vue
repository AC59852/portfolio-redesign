<template>
  <section class="post__body">
    <PrismicRichText :field="slice.primary.post_content_title" class="post__heading" />
    <PrismicRichText :field="slice.primary.post_content_body" class="post__textContent" />
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "BlogTextContent",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>
<style scoped>
.post__body {
  width: 85%;
  margin: 0 auto;
}
 .post__heading {
  font-weight: 500;
  font-size: 1.875rem;
  margin-bottom: 14px;
 }

 .post__textContent {
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
 }

 .post__textContent :deep(p) {
  line-height: 155%;
 }

 .post__textContent :deep(h2), .post__textContent :deep(h3) {
  font-weight: 500;
  font-size: 1.5rem;
 }
</style>
