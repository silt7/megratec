<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title" style="text-align:center">Продукты</h1>
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
                    <md-tabs class="md-secondary" md-alignment="centered" >
                        <md-tab md-label="Все">
                            <div v-for="item in category[0]" :key="item.ID" class="container catalog" v-if="item.ID != 10">
                            <h2 style="text-align:left">{{ item.NAME }}</h2>
                                <div class="md-layout md-gutter md-alignment-left">
                                <router-link
                                    class="md-layout-item md-size-20 md-small-size-100"
                                    v-for="product in products[0]"
                                    :key="product.ID"
                                    :to="'/product/' + product.ID"
                                    v-if="product.SECTION == item.ID"
                                >
                                    <md-card class="product text-center">
                                    <img
                                        v-if="product.PROPERTY_VALUES.icon != ''"
                                        :src="product.PROPERTY_VALUES.icon"
                                    />
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
                        <md-tab v-for="item in category[0]"
                                :key="item.ID"
                                :md-label="item.NAME"
                                :id="'md-' + item.ID"
                                v-if="item.ID != 10">
                            <div class="container">
                                <div class="md-layout md-gutter md-alignment-left">
                                    <router-link class="md-layout-item md-size-20 md-small-size-100"
                                                    v-for="product in products[0]"
                                                    :key="product.ID"
                                                    :to="'product/' + product.ID"
                                                    v-if="product.SECTION == item.ID">
                                        <md-card class="product">
                                            <img v-if="product.PROPERTY_VALUES.icon != ''"
                                                    :src="product.PROPERTY_VALUES.icon" />
                                            <img v-else src="@/assets/img/icon/noimg.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">{{ product.NAME }}</div>
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
      category: [],
      products: [],
      turn: 0,
      clickCategory: 0,
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/techno-animate-bg.jpg")
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
      } else {
        tabsMenu.classList.remove("activeTabs");
        this.clickCategory = 0;
        this.turn = 0;
      }
    },
  }
   /*beforeRouteEnter(to, from, next) {
   let categoryId = 0;

    if (typeof to.params.filtr !== "undefined") {
      categoryId = to.params.filtr;
    }

    next(vm => {
      (vm.products = vm.getItem("products", 0)),
        (vm.category = vm.getSection("products", categoryId));
    })
  };*/
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
    padding-bottom: 50px;
    img {
      margin-bottom: 2.142rem;
    }
  }
}
.dropdown-menu li a:hover,
.dropdown-menu li a:focus,
.dropdown-menu li a:active {
  background-color: #2e5790 !important;
}
.filtr {
  width: 140px;
  position: absolute;
  right: 15px;
}
#tabs-menu {
  padding: 0 10px;
  .md-tabs-navigation {
    background: #4b8edb !important;
    box-shadow: 0 0 black;
    border-radius: 0;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.15s ease-out;
  }

  button {
    width: 30%;
    max-width: inherit !important;
  }

  .activeTabs {
    max-height: 500px;
    transition: max-height 0.7s ease-out;
  }
}
@media screen and (max-width: 900px) {
  .filtr {
    left: 0;
    right: 0;
  }
  .catalog {
    margin-top: 40px;
  }
  h2 {
    font-size: 2.1rem;
  }
}
</style>
