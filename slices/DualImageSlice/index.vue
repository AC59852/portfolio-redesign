<template>
  <section class="project__images project__images--dual">
    <div class="large-11">
      <div class="image-container">
        <PrismicImage :field="slice.primary.dual_image_1" class="image" />
      </div>
    </div>
    <div class="large-11">
      <div class="image-container">
        <PrismicImage :field="slice.primary.dual_image_2" class="image" />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "DualImageSlice",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>
