import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/less/main.less";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

const baseURL = "http://0.0.0.0:9000";
axios.defaults.baseURL = baseURL;

createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");
