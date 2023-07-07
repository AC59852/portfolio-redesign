import MyComponent from '../../../../slices/BlogTextContent';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BlogTextContent'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"post_content_title":[{"type":"heading2","text":"Spring","spans":[]}],"post_content_body":[{"type":"paragraph","text":"Aliquip excepteur commodo cupidatat adipisicing occaecat in ipsum do. Dolor ut do aliqua ipsum ea id Lorem.","spans":[]}]},"slice_type":"blog_text_content","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
