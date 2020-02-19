import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Raphael from 'raphael/raphael'
global.Raphael = Raphael

Vue.config.productionTip = false;

window.useApi = JSON.parse(process.env.VUE_APP_API_MODE)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
