import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import vueEsign from 'vue-esign'
import router from "./router";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "element-plus/dist/index.css";
import "./assets/styles/all.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(vueEsign);
app.mount("#app");
