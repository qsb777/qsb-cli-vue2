<template>
  <div class="home" @click="clickHander">
    <a-button>首页</a-button>
  </div>
</template>

<script>
// import http from '@/api'
export default {
  name:'home',
  data() {
    return {}
  },
    methods: {
      clickHander() {
        
      }
    }
}
</script>

<style lang="less"  scoped>
.home {
  height: 500px;
  line-height: 500px;
}
</style>