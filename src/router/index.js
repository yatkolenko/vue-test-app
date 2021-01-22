import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Products",
    component: () => import(/* webpackChunkName: "products" */ "../views/Products.vue")
  },
  {
    path: "/form",
    name: "Form",
    component: () => import(/* webpackChunkName: "about" */ "../views/Form.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
