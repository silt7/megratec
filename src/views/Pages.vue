<template>
  <div id="pages" class="wrapper" v-if="page[0]">
    <div v-if="page.length == 1">
      <parallax class="section page-header header-filter" :style="headerStyle">
        <div class="container">
          <div class="md-layout md-alignment-center">
            <div
              class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
            >
              <h1 class="title" style="text-align: center">
                {{ page[0].NAME }}
              </h1>
            </div>
          </div>
        </div>
      </parallax>
      <div class="main main-raised">
        <div class="section section-contacts">
          <div v-html="page[0].DETAIL_TEXT"></div>
          <Form
            v-if="
              page[0].PROPERTY_VALUES.FORM == 'Да' &&
                page[0].PROPERTY_VALUES.FORMFIELD != ''
            "
            :fields="page[0].PROPERTY_VALUES.FORMFIELD"
          ></Form>
        </div>
      </div>
    </div>
    <div v-else>
      <parallax class="section page-header header-filter" :style="headerStyle">
        <div class="container">
          <div class="md-layout md-alignment-center">
            <div
              class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
            >
              <h1 class="title" style="text-align: center">
                Страницы не существует
              </h1>
            </div>
          </div>
        </div>
      </parallax>
    </div>
  </div>
</template>
<script>
import Form from "./components/Form.vue";

export default {
  components: {
    Form
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/banner-bg.jpg")
    }
  },
  data() {
    return {
      page: []
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
        height: "300px"
      };
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.getItem("pages", to.path.replace(/(\\|\/)/g, "")).then(data => {
        vm.page = data;
        vm.getSeo();
      });
    });
  }
};
</script>
