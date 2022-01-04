<template>
  <div>
    <tinymceEdit v-modex="value"></tinymceEdit>
    {{value}}
  </div>
</template>
<script>
import tinymceEdit from './common/tinymce'
export default {
  data() {
    return {
      value: ''
    }
  },
  components: {
    tinymceEdit
  },
  mounted() {
    
    
  },
  methods: {
    
  }
}
</script>
<style lang="scss" type="text/scss" scoped>
</style>
