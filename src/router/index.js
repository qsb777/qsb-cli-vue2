import Vue from "vue";
import VueRouter from "vue-router";

const Layout = () => import("_c/Layout");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    redirect: "/home",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login"),
  },
  {
    path: "",
    name: "",
    component: Layout,
    children: [
      {
        name: "home",
        path: "/home",
        component: () => import("@/views/Home"),
      },
    ],
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
