<template>
  <section class="project__content project__content--tech">
    <PrismicRichText :field="slice.primary.heading" class="title title--project" />
    <PrismicRichText class="para project__techUsed" :field="slice.primary.tech_used" />
    <PrismicRichText class="para para--project" :field="slice.primary.description" />
    <span class="project__sectionName">{{ slice.primary.section_name }}</span>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "TechSlice",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>