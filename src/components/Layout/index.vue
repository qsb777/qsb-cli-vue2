
<template>
  <!-- /**
  * @name layout (组件名称)
  * @module 组件存放位置
  * @desc 页面布局
  * @author qsb777
  * @date 
  * @param {Object} [title] - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <layout />
  */-->
  <a-layout class="layout">
    <a-layout-sider theme="light" v-model="collapsed" :trigger="null" collapsible>
      <SideBar
        :collapsed="collapsed"
        :dataLists="menuData"
        @collapsedHandle="collapsed = !collapsed"
      ></SideBar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background-color: #ccc;">头部</a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { SideBar } from "./component";
export default {
  name: 'layout',
  props: {
  },
  components: {
    SideBar
  },
  data() {
    return {
      collapsed: false,
      menuData: [
        {key: '1',title: '人员管理',children: []}
      ]  
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
}
</style>