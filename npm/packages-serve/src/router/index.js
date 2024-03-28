import VueRouter from "vue-router";
import Vue from "vue";
import Index from "../view/index.vue";
import Login from "../view/login.vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Index
    },
    {
      path: "/login",
      component: Login
    }
  ]
});
