<template>
  <div class="wrapper" id="pageProduct">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout content">
          <div class="md-layout-item md-size-50 mx-auto">
            <div class="profile">
              <img
                v-if="product.DETAIL_PICTURE"
                :src="product.DETAIL_PICTURE"
                class="img-raised rounded img-fluid"
                style="transform: inherit"
              />
              <img
                v-else
                src="@/assets/img/picture-not.jpg"
                class="img-raised rounded img-fluid"
                style="transform: inherit"
              />
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <CatalogMenu :isShow="false"></CatalogMenu>
        <Breadcrumbs :title="product.NAME"/>
        <div class="container">
          <div class="md-layout content">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="name">
                  <h3 class="title">{{ product.NAME }}</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="container" v-html="product.DETAIL_TEXT"></div>
          <div v-if="product.PROPERTY_VALUES">
            <Form
              v-if="product.PROPERTY_VALUES.FORM == 'Да'"
              :fields="['Имя', 'Компания', 'Почта', 'Телефон']"
            ></Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogMenu from "./components/CatalogMenu.vue";
import Form from "./components/Form.vue";

export default {
  components: {
    CatalogMenu,
    Form
  },
  bodyClass: "profile-page",
  data() {
    return {
      product: [],
      showTabProducts: 0
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
  watch: {
    "$route.params.id": function() {
      this.loadContent();
    }
  },
  methods: {
    async loadContent() {
      this.product = await this.getItem("trainings", this.$route.params.id);
      this.product = this.product[0];

      this.getSeo();
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.loadContent();
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
::v-deep nav{
  top: -80px !important;
  left: 20px !important;
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
