import MyComponent from '../../../../slices/BlogSingleImage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BlogSingleImage'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"post_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68"}},"slice_type":"blog_single_image","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
