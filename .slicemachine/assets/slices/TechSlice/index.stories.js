import MyComponent from '../../../../slices/TechSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/TechSlice'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"heading":[{"type":"heading2","text":"Guide","spans":[]}],"tech_used":[{"type":"paragraph","text":"Elit officia elit ut sit est.","spans":[]}],"description":[{"type":"paragraph","text":"Ut reprehenderit ea ex deserunt proident cillum veniam nulla in ea quis qui. Ex irure commodo qui sint anim. Aliquip consequat amet sunt nostrud aliquip velit ipsum.","spans":[]}],"section_name":"salmon"},"slice_type":"tech_slice","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
