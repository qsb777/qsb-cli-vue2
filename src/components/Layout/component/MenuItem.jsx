
export default {
  name: "menuItem",
  props: {
    collapsed: {
      type: Boolean,
      required: true,
    },
    dataLists: {
      type: Array,
      required: true,
    },
  },
  components: {
    // PieChartOutlined,
    // MailOutlined,
    // DesktopOutlined,
    // InboxOutlined,
    // AppstoreOutlined,
  },
  methods: {
     toggleCollapsed ()  {
      this.$emit("collapsedHandle");
    }

  },
  data() {
    return {
      
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1']
    }
    
  },
  render () {
    // const renderMenu = (data) => {
    //   return  data.forEach((item) => {
    //     if (item.children.length > 0) {
    //       return (
    //         <a-sub-menu>
    //           <template>
    //             <span>
    //               item.icon ? <span></span> : ''
    //               <span key={item.key}>{item.title}</span>
    //             </span>
    //           </template>
    //           renderMenu(item.children)
    //         </a-sub-menu>
    //       );
    //     } else {
    //       return <a-menu-item key={item.key}></a-menu-item>;
    //     }
    //   });
    // };
    return (
      <div class="side-bar">
        <a-button
          type="primary"
          onClick={this.toggleCollapsed}
          style="margin-bottom: 16px;"
        >
          {/* {this.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} */}
        </a-button>
        <a-menu
          mode="inline"
          inline-collapsed={this.collapsed}
          openKeys={this.openKeys}
          selectedKeys={this.selectedKeys}
        >
          <a-menu-item key='1'>sdfas</a-menu-item>
        </a-menu>
      </div>
    );
    
  }
}
