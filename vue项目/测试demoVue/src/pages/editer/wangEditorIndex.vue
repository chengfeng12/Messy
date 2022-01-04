<template>
  <div>
    <wangeditor4 v-modex="value"></wangeditor4>
    {{value}}
  </div>
</template>
<script>
import wangeditor4 from './common/wangeditor4'
export default {
  data() {
    return {
      value: ''
    }
  },
  components: {
    wangeditor4
  },
  mounted() {
    
    
  },
  methods: {
    
  }
}
</script>
<style lang="scss" type="text/scss" scoped>
</style>
