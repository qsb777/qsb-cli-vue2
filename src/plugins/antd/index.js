import Vue from "vue";
import {
  Button,
  Spin,
  Input,
  Checkbox,
  message,
  Menu,
  Layout,
} from "ant-design-vue";

const compList = [Button, Spin, Input, Checkbox, message, Menu, Layout];

compList.forEach((comp) => {
  Vue.use(comp);
});
