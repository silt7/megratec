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
        <CatalogMenu :isShow="false"></CatalogMenu>
        <div
          v-for="(category, index) in products"
          :key="index"
          class="container catalog"
        >
          <h2 style="text-align:left">{{ index.slice(4) }}</h2>
          <div class="md-layout md-gutter md-alignment-left">
            <router-link
              class="md-layout-item md-size-20 md-small-size-100"
              v-for="product in category"
              :key="product.ID"
              :to="$root.dictionary.link.product + product.CODE"
            >
              <md-card class="product text-center">
                <img
                  v-if="product.PROPERTY_ICON != null"
                  :src="$root.baseURL + product.PROPERTY_ICON"
                />
                <img v-else src="@/assets/img/icon/noimg.svg" />
                <md-card-header-text>
                  <div class="md-title">{{ product.NAME }}</div>
                  <div class="sub-title">
                    {{ product.PREVIEW_TEXT }}
                  </div>
                  <div class="md-subhead">{{$root.dictionary.button.detail}}</div>
                </md-card-header-text>
              </md-card>
            </router-link>
          </div>
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
  bodyClass: "profile-page",
  data() {
    return {
      category: [],
      products: this.$root.getCatalog().then(response=>this.products = response)
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
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$root.getCatalog().then(response=>vm.products = response)
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
    padding-bottom: 50px;
    img {
      margin-bottom: 2.142rem;
    }
  }
}
.catalog:first-child,
:not(.catalog) + .catalog {
  margin-top: -70px;
}
@media screen and (max-width: 900px) {
  .catalog {
    margin-top: 40px;
  }
  h2 {
    font-size: 2.1rem;
  }
}
</style>
