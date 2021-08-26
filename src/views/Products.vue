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
          v-for="item in categoryFiltr(category[0])"
          :key="item.ID"
          class="container catalog"
        >
          <h2 style="text-align:left">{{ item.NAME }}</h2>
          <div class="md-layout md-gutter md-alignment-left">
            <router-link
              class="md-layout-item md-size-20 md-small-size-100"
              v-for="product in productsFiltr(item.ID)"
              :key="product.ID"
              :to="'/product/' + product.CODE"
            >
              <md-card class="product text-center">
                <img
                  v-if="product.PROPERTY_VALUES.icon != ''"
                  :src="product.PROPERTY_VALUES.icon"
                />
                <img v-else src="@/assets/img/icon/noimg.svg" />
                <md-card-header-text>
                  <div class="md-title">{{ product.NAME }}</div>
                  <div class="sub-title">
                    {{ product.PREVIEW_TEXT }}
                  </div>
                  <div class="md-subhead">Подробнее</div>
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
      products: []
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
    this.loadContent();
    this.category = this.getSection("products", 0);
    this.getSeo();
  },
  methods: {
    async loadContent() {
      this.products = await this.getItem("products", 0);
    },
    productsFiltr(categ_id) {
      return this.products.filter(i => i["SECTION"] == categ_id);
    },
    categoryFiltr(category) {
      if (category) {
        return category.filter(i => i["ID"] != 10);
      }
    }
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
