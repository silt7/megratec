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
      <Breadcrumbs title="Тренинги"/>
      <div class="section section-contacts">
        <div class="container" v-if="$root.contentPage" v-html="$root.contentPage.DETAIL_TEXT"></div>
        <Trainings count="6"/>
        <Form :fields="['Имя', 'Компания', 'Почта', 'Телефон']"></Form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import Trainings from "./components/Trainings.vue";

export default {
  components: {
    Form,
    Trainings
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
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$root.loadContantsPage();
    });
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
    height: 50vh;
  }
}
@media screen and (max-width: 900px) {
  .section {
    padding: 10px 0;
  }
}
</style>
