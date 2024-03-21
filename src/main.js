import Vue from "vue";
import App from "./App.vue";
import router from "./router"; //路由
import store from "./store"; //vuex
import "./permission.js"; //路由拦截
import "./style/index.less";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import globalComponents from "@/components/index.js"; //全局组件
Vue.use(ElementUI).use(globalComponents);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
