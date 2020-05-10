import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/css/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
