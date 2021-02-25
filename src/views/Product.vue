<template>
  <div class="wrapper" id="pageProduct">
      <parallax class="section page-header header-filter"
                :style="headerStyle">
          <div class="container" v-for="item in product[0]" :key="item.ID">
              <div class="md-layout content">
                  <div class="md-layout-item md-size-50 mx-auto">
                      <div class="profile">
                              <img v-if="item.DETAIL_PICTURE"
                                   :src="item.DETAIL_PICTURE"
                                   class="img-raised rounded img-fluid" 
                                   style="transform: inherit"/>
                              <img v-else
                                   src="@/assets/img/picture-not.jpg"
                                   class="img-raised rounded img-fluid"
                                   style="transform: inherit"/>
                      </div>
                  </div>
              </div>
          </div>

      </parallax>
    <div class="main main-raised">
        <div class="section profile-content">
            <md-toolbar class="md-primary mainMenu">
                <div class="md-toolbar-row">
                    <div class="md-toolbar-section-start">
                        <md-list>
                            <md-list-item href="javascript:void(0)"
                                          v-on:click="openCategory">
                                <md-icon>list</md-icon>
                                <p style="font-size:14px">ПРОДУКТЫ</p>
                                <md-icon :style="{ transform: 'rotate(' + turn + 'turn)' }">keyboard_arrow_down</md-icon>
                            </md-list-item>
                        </md-list>
                    </div>
                </div>
            </md-toolbar>
            <nav-tabs-card no-label tabs-plain id="tabs-menu">
                <template slot="content">
                    <md-tabs class="md-secondary" md-alignment="left">
                        <md-tab v-for="item in category[0]"
                                :key="item.ID"
                                :md-label="item.NAME"
                                :id="'md-' + item.ID"
                                v-if="item.ID != 10">
                            <div class="container" v-if="showTabProducts">
                                <div class="md-layout md-gutter md-alignment-left">
                                    <router-link class="md-layout-item md-size-20 md-small-size-100"
                                                 v-for="product in products[0]"
                                                 :key="product.ID"
                                                 :to="'/product/' + product.ID"
                                                 v-if="product.SECTION == item.ID">
                                        <md-card class="product">
                                            <img v-if="product.PROPERTY_VALUES.icon != ''"
                                                 :src="product.PROPERTY_VALUES.icon" />
                                            <img v-else src="@/assets/img/icon/noimg.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">{{ product.NAME }}</div>
                                                <div class="sub-title">{{ product.PREVIEW_TEXT }}</div>
                                                <div class="md-subhead">Подробнее</div>
                                            </md-card-header-text>
                                        </md-card>
                                    </router-link>
                                </div>
                            </div>
                        </md-tab>
                    </md-tabs>
                </template>
            </nav-tabs-card>
            <div class="container" v-for="item in product[0]" :key="item.ID">
                <div class="md-layout content">
                    <div class="md-layout-item md-size-50 mx-auto">
                        <div class="profile">
                            <div class="name">
                                <h3 class="title">{{ item.NAME }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" v-html="item.DETAIL_TEXT"></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { NavTabsCard } from "@/components";
export default {
  components: {
    NavTabsCard
  },
  bodyClass: "profile-page",
  data() {
    return {
      product: [],
      category: [],
      products: [],
      turn: 0,
      clickCategory: 0,
      showTabProducts: 0
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/techno-animate-bg.jpg")
    }
  },
    watch: {
        '$route.params.id': function () {
            this.product = this.getItem("products", this.$route.params.id);
        }
    },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  mounted() {
    this.category = this.getSection("products", 0);
    this.products = this.getItem("products", 0);
  },
  methods:{
    openCategory: function(event) {
      let parent = document.getElementById("tabs-menu");
      let tabsMenu = parent.querySelector(".md-tabs-navigation");
      if (this.clickCategory == 0) {
        tabsMenu.classList.add("activeTabs");
        this.clickCategory = 1;
        this.turn = 0.5;
        this.showTabProducts = 1
      } else {
        tabsMenu.classList.remove("activeTabs");
        this.clickCategory = 0;
        this.turn = 0;
        this.showTabProducts = 0
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.product = vm.getItem("products", to.params.id);
    });
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-page .profile img {
  max-width: 280px;
}

.profile-tabs::v-deep {
  .md-card-content .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 100px;
    img {
      margin-bottom: 2.142rem;
    }
  }
}
.breadcrumps {
  padding: 10px;
  font-size: 12px;
}
.breadcrumps a {
  color: #2e5790 !important;
  padding-right: 5px;
  padding-left: 5px;
}
@media screen and (max-width: 900px) {
  .profile-page .page-header {
    height: 200px;
  }
  .content {
    margin-top: 50px;
  }
  .content .name {
    margin-top: -30px !important;
  }
}
</style>
