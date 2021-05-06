<template>
  <router-view />
  <!-- <loading :loading="loading">
  </loading>-->
</template>

<script>
// import {Loading} from '_c'
import {mapState} from 'vuex'
export default  {
  name: 'app',
  components: {
    // Loading
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState('base',['loading'])
  }
}
</script>

<style lang="less">
</style>