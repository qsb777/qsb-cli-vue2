import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./api";
import plugins from "./plugins";
// import components from "_c";
import "ant-design-vue/dist/antd.css";

import { LicenseManager } from "ag-grid-enterprise";
LicenseManager.setLicenseKey(
  "xx@wumis.com_NDEwMjMyOTYwMDAwMA==139dd80c7bc5ab0e7f3bbbb9d92103a8"
);

Vue.prototype.$http = http;

Vue.use(plugins);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
