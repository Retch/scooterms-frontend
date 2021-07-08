import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Account from "@/views/Accountpage.vue";
import Login from "@/views/Loginpage.vue";
import Logout from "@/views/Logoutpage.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  {
    path: "/account",
    name: "Account",
    component: Account
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
