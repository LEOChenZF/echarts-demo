import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/index.less"; // global css
import "./permission"; // permission control

import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import globleModule from "./install.js";
// 引入socket
import SocketService from "@/utils/socketService";
// 连接Socket
SocketService.Instance.connect();
// 挂载Socket到vue
Vue.prototype.$socket = SocketService.Instance;

// 注册全局组件
Vue.use(globleModule);
// 注册ViewUI
Vue.use(ViewUI);

// 页面切换时修改网页标题   拦截器
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
