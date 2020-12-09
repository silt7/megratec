import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Product from "./views/Product.vue";
import Trainings from "./views/Trainings.vue";
import Contacts from "./views/Contacts.vue";
import About from "./views/About.vue";

Vue.use(Router);

const baseURL = 'https://megratec-dev.ru';

export default new Router({
    linkExactActiveClass: "active",
    mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      meta: { baseURL: baseURL }
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/components",
      name: "components",
      components: {
        default: Components,
        header: MainNavbar,
        footer: MainFooter
      }
    },
    {
      path: "/product/:id",
      name: "product",
      components: { default: Product, header: MainNavbar, footer: MainFooter },
      meta: { baseURL: baseURL}
    },
	{
      path: "/trainings",
      name: "trainings",
      components: {
        default: Trainings,
        header: MainNavbar,
        footer: MainFooter
      }
    },
	{
      path: "/contacts",
      name: "contacts",
      components: {
        default: Contacts,
        header: MainNavbar,
        footer: MainFooter
      }
    },
	{
      path: "/about",
      name: "about",
      components: {
        default: About,
        header: MainNavbar,
        footer: MainFooter
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
