import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "b1home",
      component: () =>
        import(/* webChunkName: 'home' */ "@/views/B1n2Home.vue"),
    },
    {
      path: "/home",
      redirect: (to) => {
        return { path: "/" };
      },
    },
    {
      path: "/b1n2about",
      name: "about",
      component: () =>
        import(/* webChunkName: 'home' */ "@/views/B1n2About.vue"),
    },
    {
      path: "/b1n2contact",
      alias: "/get-in-touch",
      name: "contact",
      component: () =>
        import(/* webChunkName: 'home' */ "@/views/B1n2Contact.vue"),
    },
    {
      path: "/b3",
      name: "b3",
      component: () => import(/* webChunkName: 'b3' */ "@/views/B3.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import(/* webChunkName: '404' */ "@/views/B4.vue"),
    },
    {
      path: "/b5dashboard",
      name: "b5dashboard",
      component: () =>
        import(/* webChunkName: 'b5dashboard' */ "@/views/B5Dashboard.vue"),
      beforeEnter: (to, from, next) => {
        const isLogged = true;
        if (isLogged) {
          next();
        } else {
          next({
            name: "b5login",
          });
        }
      },
    },
    {
      path: "/b5login",
      name: "b5login",
      component: () =>
        import(/* webChunkName: 'b5login' */ "@/views/B5Login.vue"),
    },
    {
      path: "/b6",
      name: "b6",
      component: () => import(/* webChunkName: 'b6 */ "@/views/B6.vue"),
      children: [
        {
          path: "b6-user-manager",
          name: "b6-user-manager",
          component: () =>
            import(/* webChhunkName: 'b6' */ "@/views/B6UserManganer.vue"),
        },
        {
          path: "b6-product-manager",
          name: "b6-product-manager",
          component: () =>
            import(/* webChunkName: 'b6' */ "@/views/B6ProductManager.vue"),
        },
        {
          path: "b6-settings",
          name: "b6-settings",
          component: () =>
            import(/* webChunkName: 'b6' */ "@/views/B6Settings.vue"),
        },
        {
          path: "/posts",
          name: "ListPost",
          component: ListPost,
        },
        {
          path: "/posts/:id",
          name: "PostDetail",
          component: PostDetail,
          beforeEnter: (to, from, next) => {
            const postId = parseInt(to.params.id);
            const validPostIds = [1, 2, 3];
            if (!validPostIds.includes(postId)) {
              next("/404");
            } else {
              next();
            }
          },
        },
        {
          path: "/404",
          name: "PostNotFound",
          component: PostNotFound,
        },
        {
          path: "*",
          redirect: "/404",
        },
      ],
    },
    {
      path: "/posts",
      name: "ListPost",
      component: import(/* webChunkNameL "ListPost" */ "@/views/B7.vue"),
    },
    {
      path: "/posts/:id",
      name: "PostDetail",
      component: import(
        /* webChunkNameL "PostDetail" */ "@/views/B7Detail.vue"
      ),
      beforeEnter: (to, from, next) => {
        const postId = parseInt(to.params.id);
        const validPostIds = [1, 2, 3];
        if (!validPostIds.includes(postId)) {
          next("/404");
        } else {
          next();
        }
      },
    },
    {
      path: "/404",
      name: "PostNotFound",
      component: import(
        /* webChunkNameL "ListPost" */ "@/views/B7NotFound.vue"
      ),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.name === "PostDetail") {
      return { x: 0, y: document.body.scrollHeight / 2 };
    } else if (to.name === "PostNotFound") {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
