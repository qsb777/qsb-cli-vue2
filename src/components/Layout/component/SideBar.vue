
<template>
  <!-- /**
  * @name side-bar (组件名称)
  * @module 组件存放位置
  * @desc 组件描述
  * @author qsb777
  * @date 
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <side-bar />
  */-->
  <div class="side-bar">
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <!-- <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />-->
    </a-button>
    <a-menu
      mode="inline"
      :inline-collapsed="collapsed"
      :openKeys="openKeys"
      :selectedKeys="selectedKeys"
    >
      <a-menu-item key="1">
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <span>
            <span>Navigation One</span>
          </span>
        </template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span>
            <span>Navigation Two</span>
          </span>
        </template>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  props: {
    collapsed: {
      type: Boolean,
      required: true
    }
  },
  components: {
  },
  data() {
    return { 
       selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1']
     }
  },
  methods: {
    toggleCollapsed ()  {
      this.$emit('collapsedHandle')
    }
  }
}
</script>

<style lang="less" scoped>
.side-bar {
}
</style>