import "./assets/main.css";
import "./assets/output.css";

import ElementPlus from "element-plus"; //新增
import "element-plus/dist/index.css"; //新增
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(ElementPlus); //新增
app.use(createPinia());
app.use(router);

app.mount("#app");
