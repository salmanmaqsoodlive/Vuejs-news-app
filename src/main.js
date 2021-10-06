import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/routes";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
