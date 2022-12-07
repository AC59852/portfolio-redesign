import MyComponent from '../../../../slices/TextSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TextSlice'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"heading":[{"type":"heading2","text":"Silence","spans":[]}],"description":[{"type":"paragraph","text":"Excepteur do cillum velit. Exercitation eu duis eu nisi occaecat enim et enim exercitation ex amet amet excepteur est fugiat. Mollit deserunt tempor aute laboris exercitation eu enim.","spans":[]}],"section_name":"became"},"slice_type":"text_slice","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
