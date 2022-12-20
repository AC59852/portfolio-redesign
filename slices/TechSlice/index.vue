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

  mounted() {
    // get each pipe in techUsed and set the colour to #86B4FA
    const techUsed = document.querySelector('.project__techUsed')

    // find the pipes based on the character not the class
    const pipes = techUsed.innerHTML.match(/\|/g)

    // if there is a pipe, replace it with a span with the class
    if (pipes) {
      techUsed.innerHTML = techUsed.innerHTML.replace(/\|/g, `<span class="project__techUsed--pipe">|</span>`)
    }
  }
}
</script>