<template>
  <section class="project__images project__images--tri">
    <div class="project__scroll">
      <div class="image-container image-container--project">
        <PrismicImage :field="slice.primary.small_image_1" class="image" />
      </div>
      <div class="image-container image-container--project">
        <PrismicImage :field="slice.primary.small_image_2" class="image" />
      </div>
      <div class="image-container image-container--project">
        <PrismicImage :field="slice.primary.small_image_3" class="image" />
    </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "TriImageSlice",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>
