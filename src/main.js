import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import axios from "axios";
import { appAxios } from "./utils/appAxios";
import "@/assets/style.scss";
import store from "@/store/index.js";
import Toaster from "@meforma/vue-toaster";

loadFonts();

const app = createApp(App);
app.use(router);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$appAxios = appAxios;
app.use(vuetify);
app.use(store);
app.use(Toaster);
app.mount("#app");
