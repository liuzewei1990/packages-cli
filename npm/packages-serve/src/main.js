import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import appId from "./appId.js";

import packages from "packages-cli";
Vue.use(packages);

// 登录
let userInfo = window.h5plus.utils.localStorage.get(appId);
if (userInfo) {
  window.h5plus.store.userInfo.login(appId, userInfo);
}

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
