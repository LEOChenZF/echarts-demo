import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/index.less"; // global css

import globleModule from "./install.js";

import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

Vue.config.productionTip = false;

// 注册全局组件
Vue.use(globleModule);
// 注册ViewUI
Vue.use(ViewUI);

// 页面切换时修改网页标题   拦截器
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
