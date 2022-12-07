import MyComponent from '../../../../slices/WorkProjectSlice';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/WorkProjectSlice'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading2","text":"Wonderful","spans":[]}],"work_link":"story","work_image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f"},"work_year":"in","work_role":"secret"},"slice_type":"work_project_slice","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
