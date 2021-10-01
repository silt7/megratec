<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
            v-if="page"
            v-html="page.PREVIEW_TEXT"
          ></div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <Breadcrumbs/>
      <div class="section section-contacts">
        <div class="container" v-if="page" v-html="page.DETAIL_TEXT"></div>
        <Form :fields="['Имя', 'Компания', 'Почта', 'Телефон']"></Form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  components: {
    Form
  },
  data() {
    return {
      page: "",
      header: require("@/assets/img/banner-bg.jpg")
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  mounted() {
    this.getItem("pages", this.$route.path.replace(/(\\|\/)/g, "")).then(
      data => {
        this.page = data.shift();
        this.getSeo();
      }
    );
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.md-has-textarea + .md-layout {
  margin-top: 15px;
}

@media screen and (min-width: 900px) {
  .page-header {
    height: 70vh;
  }
}
@media screen and (max-width: 900px) {
  .section {
    padding: 10px 0;
  }
}
</style>
