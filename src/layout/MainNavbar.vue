<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start logo">
        <router-link :to="$root.dictionary.menu.main.url">
          <b>megra</b>tec<span class="logo_mini"
            >MENTOR GRAPHICS TECHNOLOGIES</span
          >
        </router-link>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">language</i>
                        <p v-if="$root.language == 'rus'">Rus</p>
                        <p v-else>Eng</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons md-theme-second">
                        <li class="flag">
                          <a @click="$root.changeLang('rus')">
                            <img src="@/assets/img/icon/ru.svg"/>
                            <p>Russian</p>
                          </a>
                        </li>
                        <li class="flag">
                          <a @click="$root.changeLang('eng')">
                             <img src="@/assets/img/icon/eng.svg" />
                            <p>English</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <md-list-item v-if="this.$route.path !== '/' && this.$route.path !== '/eng'">
                <router-link exact :to="$root.dictionary.menu.main.url">
                  <p class="menu-p">{{$root.dictionary.menu.main.title}}</p>
                </router-link>
              </md-list-item>
              <md-list-item
                v-if="(this.$route.path !== '/' && this.$route.path !== '/eng') || this.window.width <= 990"
              >
                <router-link exact :to="$root.dictionary.menu.dizayncentr.url">
                  <p class="menu-p">{{$root.dictionary.menu.dizayncentr.title}}</p>
                </router-link>
              </md-list-item>
              <md-list-item
                v-if="(this.$route.path !== '/' && this.$route.path !== '/eng') || this.window.width <= 990"
              >
                <router-link exact :to="$root.dictionary.menu.products.url">
                  <p class="menu-p">{{$root.dictionary.menu.products.title}}</p>
                </router-link>
              </md-list-item>
              <md-list-item
                v-if="(this.$route.path !== '/' && this.$route.path !== '/eng') || this.window.width <= 990"
              >
                <router-link exact :to="$root.dictionary.menu.trainings.url">
                  <p class="menu-p">{{$root.dictionary.menu.trainings.title}}</p>
                </router-link>
              </md-list-item>
              <md-list-item
                v-if="(this.$route.path !== '/' && this.$route.path !== '/eng') || this.window.width <= 990"
              >
                <router-link exact :to="$root.dictionary.menu.contacts.url">
                  <p class="menu-p">{{$root.dictionary.menu.contacts.title}}</p>
                </router-link>
              </md-list-item>
              <md-list-item
                v-if="(this.$route.path !== '/' && this.$route.path !== '/eng') || this.window.width <= 990"
              >
                <router-link exact :to="$root.dictionary.menu.about.url">
                  <p class="menu-p">{{$root.dictionary.menu.about.title}}</p>
                </router-link>
              </md-list-item>

              <md-list-item
                href="/"
                target="_blank"
                v-if="(this.$route.path === '/' || this.$route.path === '/eng') && this.window.width > 990"
              >
                <md-icon>mail</md-icon>
                <p>
                  <a href="mailto:support@megratec.ru">support@megratec.ru</a>
                </p>
              </md-list-item>

              <md-list-item
                href="javascript:void(0)"
                @click="scrollToElement()"
                v-if="(this.$route.path === '/' || this.$route.path === '/eng') && this.window.width > 990"
              >
                <md-icon>phone_android</md-icon>
                <p>+7 (495) 580-77-46</p>
              </md-list-item>
              <md-list-item
                href="javascript:void(0)"
                @click="
                  scrollToElement();
                  classicModal = true;
                "
                v-if="!this.$route.path.includes('search')"
              >
                <md-icon>search</md-icon>
              </md-list-item>
              <md-list-item
                href="/chasto-zadavaemye-voprosy"
                @click="scrollToElement();"
                v-if="(this.$route.path === '/' || this.$route.path === '/eng') && this.window.width > 990"
              >
                <md-icon>help_outline</md-icon>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
    <modal v-if="classicModal" @close="classicModalHide">
      <template slot="body">
        <form class="contact-form md-layout" @submit="validateBeforeSubmit">
          <md-icon
            class="text-primary md-layout-item"
            style="font-size: 32px !important;"
            >search</md-icon
          >
          <md-field class="md-layout-item md-size-55">
            <label>{{$root.dictionary.menu.search.title}}...</label>
            <md-input v-model="searchText" type="text"></md-input>
          </md-field>
          <div class="md-layout-item md-size-30">
            <md-button class="md-primary" @click="search()">{{$root.dictionary.menu.search.title}}</md-button>
          </div>
        </form>
      </template>
    </modal>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
import { Modal } from "@/components";
export default {
  components: {
    MobileMenu,
    Modal
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      imgLogo: require("@/assets/img/logo.png"),
      colorLogo: "#fff",
      window: {
        width: 0,
        height: 0
      },
      classicModal: false,
      searchText: ""
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (scrollValue > 1) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    classicModalHide() {
      this.classicModal = false;
    },
    search() {
      this.classicModalHide();
      this.$router.push({ name: "search", query: { q: this.searchText } });
    },
    validateBeforeSubmit(e) {
      e.preventDefault();
      this.search();
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
<style>
.logo a {
  font-size: 3.3rem;
  position: relative;
  height: 40px;
  color: #2e5790 !important;
}
.logo a:hover,
.logo a:active {
  color: #2e5790 !important;
}
.md-transparent .logo a {
  color: #fff !important;
}
.md-transparent .logo a:hover,
.logo a:active {
  color: #fff !important;
}
.logo_mini {
  position: absolute;
  font-size: 0.45rem;
  font-weight: 600;
  bottom: -10px;
  right: 2px;
}
.modal-mask {
  height: 100vh !important;
}
.modal-wrapper {
  display: block !important;
  margin-top: 10%;
}
.modal-body {
  padding: 0 15px !important;
}
.flag img{
  width: 30px;
}
.flag p{
  margin: 3px 0 0 10px;
}
.menu-p{
  margin-bottom: 0;
}

</style>
