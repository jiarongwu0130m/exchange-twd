import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages"; //增加這一段

// 增加以下程式
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
