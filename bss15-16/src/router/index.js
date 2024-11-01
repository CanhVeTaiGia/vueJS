import { createRouter, createWebHistory } from "vue-router";
import B1 from "@/views/B1.vue";
import B2 from "@/views/B2.vue";
import B3 from "@/views/B3.vue";
import B4 from "@/views/B4.vue";
import B5 from "@/views/B5.vue";
import B6 from "@/views/B6.vue";
import B6Home from "@/views/B6Home.vue";
import B6Contact from "@/views/B6Contact.vue";
import B7 from "@/views/B7.vue";
import B7Home from "@/views/B7Home.vue";
import B7Detail from "@/views/B7Detail.vue";
import B7Product from "@/views/B7Product.vue";
import B8 from "@/views/B8.vue";
import B8Account from "@/views/B8Account.vue";
import B8Dashboard from "@/views/B8Dashboard.vue";
import B8Product from "@/views/B8Product.vue";
import B9 from "@/views/B9.vue";
import B9Detail from "@/views/B9Detail.vue";
import B10Profile from "@/views/B10Profile.vue";
import B10Contact from "@/views/B10Contact.vue";
import B10Projects from "@/views/B10Projects.vue";
import B10Detail from "@/views/B10Detail.vue";
import B10 from "@/views/B10.vue";
import B11Register from "@/views/B11Register.vue";
import B11Login from "@/views/B11Login.vue";

const routes = [
  {
    path: "/",
    component: B1,
  },
  {
    path: "/B2",
    component: B2,
  },
  {
    path: "/register",
    component: B3,
  },
  {
    path: "/login",
    component: B4,
  },
  {
    path: "/:pathMatch(.*)*",
    component: B5,
  },
  {
    path: "/B6",
    component: B6,
    children: [
      {
        path: "B6Home",
        name: "B6Home",
        component: B6Home,
      },
      {
        path: "B6Contact",
        name: "B6Contact",
        component: B6Contact,
      },
    ],
  },
  {
    path: "/B7",
    component: B7,
    children: [
      {
        path: "B7Home",
        name: "B7Home",
        component: B7Home,
      },
      {
        path: "B7Detail",
        name: "B7Detail",
        component: B7Detail,
      },
      {
        path: "B7Product",
        name: "B7Product",
        component: B7Product,
      },
    ],
  },
  {
    path: "/B8",
    component: B8,
    children: [
      {
        path: "B8Account",
        name: "B8Account",
        component: B8Account,
      },
      {
        path: "B8Dashboard",
        name: "B8Dashboard",
        component: B8Dashboard,
      },
      {
        path: "B8Product",
        name: "B8Product",
        component: B8Product,
      },
    ],
  },
  {
    path: "/B9",
    component: B9,
  },
  {
    path: "/B9Detail/:id",
    component: B9Detail,
  },
  {
    path: "/B10",
    component: B10,
  },
  {
    path: "/B10/:id",
    component: B10Detail,
    children: [
      {
        path: "B10Profile",
        name: "B10Profile",
        component: B10Profile,
      },
      {
        path: "B10Projects",
        name: "B10projects",
        component: B10Projects,
      },
      {
        path: "B10Contact",
        name: "B10Contact",
        component: B10Contact,
      },
    ],
  },
  {
    path: "/B11Login",
    component: B11Login,
    
  },
  {
    path: "/B11Register",
    component: B11Register,

  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
