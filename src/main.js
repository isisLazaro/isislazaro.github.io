import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./assets/css/mystyles.css";
// import "../node_modules/bulma/css/bulma.css";
// import "./assets/css/debug.css";

Vue.config.productionTip = false;

require("./assets/main.scss");
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
