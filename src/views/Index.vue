<template>
  <div id="indexPage" class="wrapper">
    <carousel
      :per-page="1"
      loop
      :speed="1"
      autoplay
      :autoplay-timeout="12000"
      :mouse-drag="false"
      navigationEnabled
      navigationNextLabel="<i class='material-icons' style='display:none'>keyboard_arrow_right</i>"
      navigationPrevLabel="<i class='material-icons' style='display:none'>keyboard_arrow_left</i>"
      class="main-carusel"
    >
      <slide v-for="item in banners" :key="item.ID">
        <div class="carousel-caption">
          <h3>{{ item.NAME }}</h3>
          <h2 v-html="item.PREVIEW_TEXT"></h2>
          <div class="line-slider"></div>
        </div>
        <video
          :autoplay="autoplay"
          muted
          width="100%"
          style="margin-top: -10%"
          v-if="item.PROPERTY_VALUES['BANNER_VIDEO']"
        >
          <source :src="item.PROPERTY_VALUES['BANNER_VIDEO']" />
        </video>
        <img v-else width="100%" :src="item.PREVIEW_PICTURE" alt="carousel1" />
      </slide>
    </carousel>
    <div class="main main-raised">
      <div class="section" style="padding: 0;">
        <CatalogMenu></CatalogMenu>
        <div class="container news" style="padding-bottom:25px">
          <h2>Последние события</h2>
          <div class="md-layout text-center">
            <div
              class="md-layout-item"
              v-for="item in newsFiltr(1)"
              :key="item.ID"
            >
              <div
                class="md-card md-card-background md-theme-default"
                :style="{
                  'background-image': 'url(' + item.PREVIEW_PICTURE + ')'
                }"
              >
                <div class="md-card-content" style="min-height:290px">
                  <h6 class="card-category text-info">
                    {{ item.DATE_CREATE.split("T")[0] }}
                  </h6>
                  <a href="javascript:void(0)"
                    ><h3 class="card-title">{{ item.NAME }}</h3></a
                  >
                  <p class="card-description" v-html="item.PREVIEW_TEXT"></p>
                  <a
                    href="javascript:void(0)"
                    class="md-button md-white md-round md-theme-default"
                  >
                    <div class="event md-ripple">
                      <router-link :to="'/news/' + item.ID" style="color: #999">
                        <div class="md-button-content">
                          <i class="md-icon md-icon-font md-theme-default"
                            >format_align_left</i
                          >
                          Читать
                        </div>
                      </router-link>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="md-layout text-center">
            <div
              class="md-layout-item"
              v-for="item in newsFiltr(2)"
              :key="item.ID"
            >
              <div
                class="md-card md-card-background md-theme-default"
                :style="{
                  'background-image': 'url(' + item.PREVIEW_PICTURE + ')'
                }"
              >
                <div class="md-card-content" style="height:300px">
                  <h6 class="card-category text-info">
                    {{ item.DATE_CREATE.split("T")[0] }}
                  </h6>
                  <a href="javascript:void(0)"
                    ><h3 class="card-title">{{ item.NAME }}</h3></a
                  >
                  <p class="card-description" v-html="item.PREVIEW_TEXT"></p>
                  <a
                    href="javascript:void(0)"
                    class="md-button md-danger md-round md-theme-default"
                  >
                    <div class="md-ripple">
                      <router-link
                        :to="'/news/' + item.ID"
                        style="color: white"
                      >
                        <div class="md-button-content">
                          <i class="md-icon md-icon-font md-theme-default"
                            >format_align_left</i
                          >
                          Читать
                        </div>
                      </router-link>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" style="padding: 50px 0">
          <carousel
            :perPageCustom="[[900, 5]]"
            loop
            :speed="700"
            :navigationEnabled="true"
            :paginationEnabled="false"
            navigationNextLabel="<i class='material-icons' style='color:#000 !important'>keyboard_arrow_right</i>"
            navigationPrevLabel="<i class='material-icons' style='color:#000 !important'>keyboard_arrow_left</i>"
            class="partnerSlide"
          >
            <slide>
              <img src="@/assets/img/partner/huawei.png" />
            </slide>
            <slide>
              <img src="@/assets/img/partner/baikal.png" />
            </slide>
            <slide>
              <img src="@/assets/img/partner/depo.png" />
            </slide>
            <slide>
              <img src="@/assets/img/partner/ineum.png" />
            </slide>
            <slide>
              <img src="@/assets/img/partner/ka.png" />
            </slide>
            <slide>
              <img src="@/assets/img/partner/miet.png" />
            </slide>
            <slide>
              <img src="@/assets/img/partner/elbrus.png" />
            </slide>
            <slide>
              <img src="@/assets/img/partner/odul.png" />
            </slide>
            <slide>
              <img src="@/assets/img/partner/oak.png" />
            </slide>
            <slide>
              <img src="@/assets/img/partner/rti.png" />
            </slide>
            <slide>
              <img src="@/assets/img/partner/elvis.png" />
            </slide>
            <slide>
              <img src="@/assets/img/partner/pai.png" />
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogMenu from "./components/CatalogMenu.vue";

export default {
  components: {
    CatalogMenu
  },
  name: "index",
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false,
      carousel1: require("@/assets/img/slider-1.jpg"),
      carousel2: require("@/assets/img/slider-2.jpg"),
      carousel3: require("@/assets/img/slider-2.jpg"),
      productImg: require("@/assets/img/products/1.jpg"),
      news: [],
      banners: [],
      autoplay: true
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    },
    newsFiltr(number) {
      let result = [];
      if (number == 1){
        result = this.news.slice(0,2);
      } else if (number == 2) {
        result = this.news.slice(2,5);
      }
      return result;
    },
    async loadContent(){
      this.banners = await this.getItem("banners", 0);
      this.news = await this.getItem("news", 0);
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    },
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);

    if (window.screen.width < 900) {
      this.autoplay = false;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
        vm.loadContent()
    });
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

.main-carusel .VueCarousel-pagination {
  bottom: 50% !important;
}

.main-carusel .VueCarousel-inner {
  transition: none !important;
}

.main-carusel .VueCarousel-slide-active {
  animation: shadow 3s 1 ease-in-out;
}

@keyframes shadow {
  from {
    opacity: 0.8;
  }

  20% {
    opacity: 1;
  }

  to {
    opacity: 1;
  }
}

.carousel-caption {
  top: 15%;
  animation: carousel-caption 2s 1 ease-in-out;
}

@keyframes carousel-caption {
  from {
    opacity: 0;
    transform: translateY(10vh);
  }

  to {
    opacity: 1;
  }
}

.line-slider {
  margin: 3% auto;
  width: 25%;
  max-width: 100%;
  height: 1px;
  background: -moz-linear-gradient(
    0deg,
    rgba(242, 243, 248, 0) 0%,
    #f6f6f6 50%,
    rgba(242, 243, 248, 0) 100%
  );
  background: -webkit-linear-gradient(
    0deg,
    rgba(242, 243, 248, 0) 0%,
    #f6f6f6 50%,
    rgba(242, 243, 248, 0) 100%
  );
}

.news .card-title {
  color: #fff !important;
}

.news .card-description {
  color: #fff !important;
}

.news .md-card-content {
  background-color: rgba(10, 30, 50, 0.7);
}
.news a.md-button {
  margin-bottom: 5px !important;
}
.news .md-card-background {
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
}

.md-button .md-ripple {
  justify-content: start !important;
}

.partnerSlide .VueCarousel-slide {
  text-align: center;
}

.partnerSlide .VueCarousel-slide img {
  width: 70%;
}

.partnerSlide .VueCarousel-navigation-prev {
  left: 0 !important;
}

.partnerSlide .VueCarousel-navigation-next {
  right: 0 !important;
}

.partnerSlide .VueCarousel-navigation-button {
  outline: none !important;
}

.tabChanged-left,
.tabChanged-right {
  position: absolute;
  font-size: 50px;
  cursor: pointer;
  color: #000;
  opacity: 0.5;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.tabChanged-left:hover,
.tabChanged-right:hover {
  opacity: 1;
}

.tabChanged-left {
  left: -70px;
}

.tabChanged-right {
  right: -70px;
}
@media screen and (min-width: 901px) {
  .main-carusel.VueCarousel {
    height: 450px;
  }

  .md-tabs-navigation {
    padding-left: 18vw !important;
  }

  .news .md-card-content .md-button {
    position: absolute;
    width: 140px;
    bottom: 5px;
    left: 0;
    right: 0;
    margin: auto;
  }
}

@media screen and (min-width: 1600px) {
  .main-carusel.VueCarousel {
    height: 600px;
  }
}

@media screen and (max-width: 900px) {
  .mainMenu button,
  .tabChanged-left,
  .tabChanged-right {
    display: none;
  }

  .partnerSlide .VueCarousel-navigation {
    display: none;
  }

  .carousel-caption {
    display: none;
  }

  .event.md-ripple {
    height: auto;
  }
}

@media screen and (max-width: 1400px) {
  .tabChanged-left {
    left: -30px;
  }

  .tabChanged-right {
    right: -30px;
  }

  .partnerSlide .VueCarousel-navigation-prev {
    left: 25px !important;
  }

  .partnerSlide .VueCarousel-navigation-next {
    right: 25px !important;
  }
}

@media screen and (max-width: 1255px) {
  .tabChanged-left,
  .tabChanged-right {
    display: none;
  }
}
</style>
