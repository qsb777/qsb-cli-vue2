import compList from "./antd"; // ant-design 组件
const plugins = {};
plugins.install = function(Vue) {
  compList.forEach((comp) => {
    Vue.use(comp);
  });
};
export default plugins;
