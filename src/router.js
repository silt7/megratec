import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Products from "./views/Products.vue";
import Product from "./views/Product.vue";
import Trainings from "./views/Trainings.vue";
import Training from "./views/Training.vue";
import Contacts from "./views/Contacts.vue";
import About from "./views/About.vue";
import News from "./views/News.vue";
import Search from "./views/Search.vue";
import Design from "./views/Design.vue";
import Events from "./views/Events.vue";
import Pages from "./views/Pages.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
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
        footer: MainFooter,
      },
    },
    {
      path: "/products",
      name: "Продукты",
      components: { default: Products, header: MainNavbar, footer: MainFooter },
      props: true,
    },
    {
      path: "/product/:id",
      name: "product",
      components: { default: Product, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/trainings",
      name: "Тренинги",
      components: {
        default: Trainings,
        header: MainNavbar,
        footer: MainFooter,
      },
    },
    {
      path: "/training/:id",
      name: "training",
      components: {
        default: Training,
        header: MainNavbar,
        footer: MainFooter,
      },
    },
    {
      path: "/contacts",
      name: "contacts",
      components: {
        default: Contacts,
        header: MainNavbar,
        footer: MainFooter,
      },
    },
    {
      path: "/about",
      name: "about",
      components: {
        default: About,
        header: MainNavbar,
        footer: MainFooter,
      },
    },
    {
      path: "/news/:id",
      name: "news",
      components: { default: News, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/search",
      name: "search",
      components: {
        default: Search,
        header: MainNavbar,
        footer: MainFooter,
      },
    },
    {
      path: "/dizayn-centr",
      name: "design",
      components: {
        default: Design,
        header: MainNavbar,
        footer: MainFooter,
      },
    },
    {
      path: "/news",
      name: "Новости",
      components: {
        default: Events,
        header: MainNavbar,
        footer: MainFooter,
      },
    },
    {
      path: "/eng",
      name: "index-eng",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/eng/products",
      name: "Продукты-eng",
      components: { default: Products, header: MainNavbar, footer: MainFooter },
      props: true,
    },
    {
      path: "/eng/product/:id",
      name: "product-eng",
      components: { default: Product, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "/eng/dizayn-centr",
      name: "design-eng",
      components: {
        default: Design,
        header: MainNavbar,
        footer: MainFooter,
      },
    },
    {
      path: "/eng/trainings",
      name: "Тренинги-eng",
      components: {
        default: Trainings,
        header: MainNavbar,
        footer: MainFooter,
      },
    },
    {
      path: "/eng/training/:id",
      name: "training-eng",
      components: {
        default: Training,
        header: MainNavbar,
        footer: MainFooter,
      },
    },
    {
      path: "/eng/contacts",
      name: "contacts-eng",
      components: {
        default: Contacts,
        header: MainNavbar,
        footer: MainFooter,
      },
    },
    {
      path: "/eng/about",
      name: "about-eng",
      components: {
        default: About,
        header: MainNavbar,
        footer: MainFooter,
      },
    },
    {
      path: "/eng/news",
      name: "Новости-eng",
      components: {
        default: Events,
        header: MainNavbar,
        footer: MainFooter,
      },
    },
    {
      path: "/eng/news/:id",
      name: "news-eng",
      components: { default: News, header: MainNavbar, footer: MainFooter },
    },
    {
      path: "*",
      name: "pages",
      components: {
        default: Pages,
        header: MainNavbar,
        footer: MainFooter,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
