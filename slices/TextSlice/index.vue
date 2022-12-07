<template>
  <section class="project__content project__content--text">
    <PrismicRichText class="title title--project" :field="slice.primary.heading" />
    <PrismicRichText class="para para--project" :field="slice.primary.description" />
    <span class="project__sectionName">{{ slice.primary.section_name }}</span>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "TextSlice",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>
