import { agGrid } from "_c"; // ag-grid 组件
import compList from "./antd"; // ant-design 组件
const plugins = {};
plugins.install = function(Vue) {
  compList.forEach((comp) => {
    Vue.use(comp);
  });
  Vue.component("ag-grid", agGrid); // 全局注册ag-grid组件
};
export default plugins;
