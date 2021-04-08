import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/dashboard";
import echarts from "./modules/echarts";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      title: "Dashboard",
    },
    children: echarts,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
