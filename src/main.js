import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./api";
import plugins from "./plugins";
// import components from "_c";
import "ant-design-vue/dist/antd.css";

Vue.prototype.$http = http;

Vue.use(plugins);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
