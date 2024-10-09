import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "list-product",
      component: () =>import(
        /* webChunkName: "list-product" */ "@/views/ListProduct.vue"
      ),
    },
  ],
});

export default router;
